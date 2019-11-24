import { Component, ReactNode } from "react";

type Props = {
  isOpen: boolean;
  children: ReactNode;
};

const FPS = 10; // 10 frames-per-second
const MODAL_SELECTOR = ".ReactModal__Content";

export default class ReactModalBody extends Component<Props> {
  bodyStart: HTMLElement;
  bodyEnd: HTMLElement;
  timer: NodeJS.Timeout;

  constructor(props: Props) {
    super(props);

    // @ts-ignore
    if (typeof window === "undefined") return; // ignore SSR
    this.bodyStart = document.createElement("div");
    this.bodyStart.style.position = "absolute"; // ensure no layout flow
    this.bodyStart.style.opacity = "0"; // ensure invisible
    this.bodyStart.setAttribute("tabindex", "0");
    this.bodyStart.addEventListener("focus", this.onFocus);
    this.bodyEnd = this.bodyStart.cloneNode() as HTMLElement;
    this.bodyEnd.addEventListener("focus", this.onFocus);

    this.setFocusTrap = this.setFocusTrap.bind(this);
    this.removeFocusTrap = this.removeFocusTrap.bind(this);
  }

  componentDidUpdate() {
    if (!this.bodyStart || !this.bodyEnd) return;

    if (this.props.isOpen) {
      this.setFocusTrap();
    } else {
      this.removeFocusTrap();
    }
  }

  setFocusTrap() {
    if (this.timer) clearTimeout(this.timer);
    // Place focus trap elements at start/end of <body>
    // so that users who leave react-modal via (ie) CTRL-L
    // and then tab into the page immediately fall into the
    // focus trap and then are moved to the modal.
    if (document.body.firstChild !== this.bodyStart) {
      document.body.insertBefore(this.bodyStart, document.body.firstChild);
    }
    if (document.body.lastChild !== this.bodyEnd) {
      document.body.appendChild(this.bodyEnd);
    }

    // keep trying to place traps in case DOM changes while modal is open
    this.timer = setTimeout(this.setFocusTrap, 1000 / FPS);
  }

  removeFocusTrap() {
    if (this.timer) clearTimeout(this.timer);
    if (
      this.bodyStart.parentElement && // if it's an attached node
      this.bodyStart.parentElement === document.body // and if it's below the body
    ) {
      document.body.removeChild(this.bodyStart);
    }
    if (
      this.bodyEnd.parentElement && // if it's an attached node
      this.bodyEnd.parentElement === document.body // and if it's below the body
    ) {
      document.body.removeChild(this.bodyEnd);
    }
  }

  onFocus() {
    // FIXME: if this code is merged into React Modal we should move focus using their methods
    const target = document.querySelector(MODAL_SELECTOR) as HTMLElement;
    if (!target) {
      console.error(
        "Unable to move focus to modal because unable to find modal."
      );
      return;
    }
    console.info("Focus moved to ", target);
    target.focus();
  }

  componentWillUnmount() {
    this.removeFocusTrap();
    this.bodyStart.removeEventListener("focus", this.onFocus);
    this.bodyStart = null;
    this.bodyEnd.removeEventListener("focus", this.onFocus);
    this.bodyEnd = null;
  }

  render() {
    return this.props.children;
  }
}

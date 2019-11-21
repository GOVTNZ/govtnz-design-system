# react-modal-body

A wrapper around `react-modal` to fix keyboard focus bugs.

This attempts to constrain keyboard focus to the modal when leaving and then reentering the window.

See [react-modal #742](https://github.com/reactjs/react-modal/issues/742) and [#787](https://github.com/reactjs/react-modal/issues/787).

## Usage

Give it your `isOpen` boolean that you would normally provide your `<Modal>`.



```javascript
import Modal from 'react-modal';
import ModalBody from 'react-modal-body';

<ModalBody isOpen={isOpen}>
  <Modal>
</ModalBody>
```



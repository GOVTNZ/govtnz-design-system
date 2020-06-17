import { Component, Input } from "@angular/core";
@Component({
  selector: "g-MainNavLink",
  template: `
<li class="g-main-nav__link">

  
<a aria-current="{{ariaCurrent}}" class="g-main-nav__link__a{{ariaCurrent ? " g-main-nav__link__a--active" : ""}}" href="{{href}}" rel="{{rel}}" target="{{target}}">

    <slot></slot>
  

</a>




</li>


`
})
export class AppComponent {
  @Input() ariaCurrent: any | undefined;
  @Input() href: string;
  @Input() rel: string | undefined;
  @Input() target: any | undefined;
  @Input() children: React.ReactNode;
  title = "MainNavLink";
}

import { Component, Input } from "@angular/core";
@Component({
  selector: "g-MainNav",
  template: `
<nav aria-label="Main" class="g-main-nav" role="navigation">
   
<button aria-controls="{{id}}" aria-expanded="{{isOpen ?  isOpen : ""}}" class="g-main-nav__button{{constants.isOpen[isOpen] !== undefined ? " " +  constants.isOpen[isOpen] : ""}}" name="{{name}}" type="{{type}}">
     <slot name="button"></slot>     
<svg class="g-main-nav__button__icon" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
       
<path d="M7.992 9.55l5.6-5.6a1 1 0 0 1 1.415 0l.688.689a1 1 0 0 1 0 1.414L8.7 13.049a1 1 0 0 1-1.414 0L.29 6.053a1 1 0 0 1 0-1.414l.689-.689a1 1 0 0 1 1.414 0l5.6 5.6z" fill="currentColor" fill-rule="nonzero"/>
     

</svg>

   

</button>

    
<div id="{{id}}">
     
<ul class="g-main-nav__ul{{constants.isOpen[isOpen] !== undefined ? " " +  constants.isOpen[isOpen] : ""}}">
       <slot></slot>     

</ul>

   

</div>

 

</nav>

 `
})
export class AppComponent {
  @Input() isOpen: "true" | "false" | undefined;
  @Input() id: string | undefined;
  @Input() name: string | undefined;
  @Input() type: any | undefined;
  @Input() button: React.ReactNode;
  @Input() children: React.ReactNode;
  title = "MainNav";
}

<nav aria-label="Main" class="g-main-nav" role="navigation"> 
  <button<% if $navId %> aria-controls="{$navId}"<% end_if %> aria-expanded="{$isOpen}" class="g-main-nav__button<% if $isOpen == "true" %> g-main-nav--open<% else_if $isOpen == "false" %> g-main-nav--closed<% end_if %>"<% if $id %> id="{$id}"<% end_if %><% if $name %> name="{$name}"<% end_if %><% if $type %> type="{$type}"<% end_if %>> 
    {$button}

    <svg class="g-main-nav__button__icon" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"> 
      <path d="M7.992 9.55l5.6-5.6a1 1 0 0 1 1.415 0l.688.689a1 1 0 0 1 0 1.414L8.7 13.049a1 1 0 0 1-1.414 0L.29 6.053a1 1 0 0 1 0-1.414l.689-.689a1 1 0 0 1 1.414 0l5.6 5.6z" fill="currentColor" fill-rule="nonzero"/> 
    </svg> 
  </button> 

  <ul class="g-main-nav__ul<% if $isOpen == "true" %> g-main-nav--open<% else_if $isOpen == "false" %> g-main-nav--closed<% end_if %>"> 
    {$children}

  </ul> 
</nav>
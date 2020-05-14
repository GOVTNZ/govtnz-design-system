<nav aria-label="Main" class="g-main-nav<% if $isOpen == "true" %> g-main-nav--open<% else_if $isOpen == "false" %> g-main-nav--closed<% end_if %>"<% if $menuContainer %> id="{$menuContainer}"<% end_if %> role="navigation"> 
  <ul class="g-main-nav__ul"> 
    {$children}

  </ul> 
</nav>
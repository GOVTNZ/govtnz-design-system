<button<% if $menuContainer %> aria-controls="{$menuContainer}"<% end_if %> aria-expanded="{$ariaExpanded}" class="g-main-nav-mobile-menu<% if $isOpen == "true" %> g-main-nav-mobile-menu--open<% else_if $isOpen == "false" %> g-main-nav-mobile-menu--closed<% end_if %>"<% if $name %> name="{$name}"<% end_if %><% if $type %> type="{$type}"<% end_if %>> 
  {$children}

</button>
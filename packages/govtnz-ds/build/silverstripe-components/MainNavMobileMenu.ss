<button<% if $navId %> aria-controls="{$navId}"<% end_if %> aria-expanded="{$isOpen}" class="g-main-nav-mobile-menu<% if $isOpen == "true" %> g-main-nav-mobile-menu--open<% else_if $isOpen == "false" %> g-main-nav-mobile-menu--closed<% end_if %>"<% if $name %> name="{$name}"<% end_if %><% if $type %> type="{$type}"<% end_if %>> 
  {$children}

</button>
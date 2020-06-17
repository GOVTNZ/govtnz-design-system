<button class="g-button<% if $disabled %>  g-button--disabled<% end_if %><% if $level == "secondary" %> g-button--secondary<% else_if $level == "warning" %> g-button--warning<% end_if %>" disabled="<% if $disabled %>true<% end_if %>"<% if $type %> type="{$type}"<% end_if %><% if $name %> name="{$name}"<% end_if %>> 
  {$children}

</button>
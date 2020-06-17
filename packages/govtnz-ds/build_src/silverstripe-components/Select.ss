<select class="g-select"<% if $selectId %> id="{$selectId}"<% end_if %><% if $name %> name="{$name}"<% end_if %><% if $required %> required="<% if $required %>undefined<% end_if %>"<% end_if %><% if $multiple %> multiple="<% if $multiple %>undefined<% end_if %>"<% end_if %>> 
  {$children}

</select>
<h2 class="<% if $styleSize == "xlarge" %>g-h2-heading-xl<% else_if $styleSize == "large" %>g-h2-heading-l<% else_if $styleSize == "medium" %>g-h2-heading-m<% else_if $styleSize == "small" %>g-h2-heading-s<% else_if $styleSize == "xsmall" %>g-h2-heading-xs<% else_if $styleSize == "xxsmall" %>g-h2-heading-xxs<% end_if %><% if $marginBottom8 %>  g-h2-heading-mb-8<% end_if %><% if $marginBottom0 %>  g-h2-heading-mb-0<% end_if %>"<% if $id %> id="{$id}"<% end_if %>> 
  {$children}

</h2>
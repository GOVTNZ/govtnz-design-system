<h3 class="<% if $styleSize == "xlarge" %>g-h3-heading-xl<% else_if $styleSize == "large" %>g-h3-heading-l<% else_if $styleSize == "medium" %>g-h3-heading-m<% else_if $styleSize == "small" %>g-h3-heading-s<% else_if $styleSize == "xsmall" %>g-h3-heading-xs<% else_if $styleSize == "xxsmall" %>g-h3-heading-xxs<% end_if %><% if $marginBottom8 %>  g-h3-heading-mb-8<% end_if %><% if $marginBottom0 %>  g-h3-heading-mb-0<% end_if %>"<% if $id %> id="{$id}"<% end_if %>> 
  {$children}

</h3>
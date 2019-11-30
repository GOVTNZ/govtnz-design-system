<h5 class="<% if $styleSize == "xlarge" %>g-h5-heading-xl<% else_if $styleSize == "large" %>g-h5-heading-l<% else_if $styleSize == "medium" %>g-h5-heading-m<% else_if $styleSize == "small" %>g-h5-heading-s<% else_if $styleSize == "xsmall" %>g-h5-heading-xs<% else_if $styleSize == "xxsmall" %>g-h5-heading-xxs<% end_if %><% if $marginBottom8 %>  g-h5-heading-mb-8<% end_if %><% if $marginBottom0 %>  g-h5-heading-mb-0<% end_if %>"<% if $id %> id="{$id}"<% end_if %>> 
  {$children}

</h5>
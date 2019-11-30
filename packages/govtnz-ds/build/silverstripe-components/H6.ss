<h6 class="\<% if $styleSize == "xlarge" %> g-h6-heading-xl<% else_if $styleSize == "large" %> g-h6-heading-l<% else_if $styleSize == "medium" %> g-h6-heading-m<% else_if $styleSize == "small" %> g-h6-heading-s<% else_if $styleSize == "xsmall" %> g-h6-heading-xs<% else_if $styleSize == "xxsmall" %> g-h6-heading-xxs<% end_if %><% if $marginBottom8 %>  g-h6-heading-mb-8<% end_if %><% if $marginBottom0 %>  g-h6-heading-mb-0<% end_if %>"<% if $id %> id="{$id}"<% end_if %>> 
  {$children}

</h6>
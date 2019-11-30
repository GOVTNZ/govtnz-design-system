<h4 class="\<% if $styleSize == "xlarge" %> g-h4-heading-xl<% else_if $styleSize == "large" %> g-h4-heading-l<% else_if $styleSize == "medium" %> g-h4-heading-m<% else_if $styleSize == "small" %> g-h4-heading-s<% else_if $styleSize == "xsmall" %> g-h4-heading-xs<% else_if $styleSize == "xxsmall" %> g-h4-heading-xxs<% end_if %><% if $marginBottom8 %>  g-h4-heading-mb-8<% end_if %><% if $marginBottom0 %>  g-h4-heading-mb-0<% end_if %>"<% if $id %> id="{$id}"<% end_if %>> 
  {$children}

</h4>
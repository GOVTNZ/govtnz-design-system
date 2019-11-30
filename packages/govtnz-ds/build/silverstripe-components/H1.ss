<h1 class="\<% if $styleSize == "xlarge" %> g-h1-heading-xl<% else_if $styleSize == "large" %> g-h1-heading-l<% else_if $styleSize == "medium" %> g-h1-heading-m<% else_if $styleSize == "small" %> g-h1-heading-s<% else_if $styleSize == "xsmall" %> g-h1-heading-xs<% else_if $styleSize == "xxsmall" %> g-h1-heading-xxs<% end_if %><% if $marginBottom8 %>  g-h1-heading-mb-8<% end_if %><% if $marginBottom0 %>  g-h1-heading-mb-0<% end_if %>"<% if $id %> id="{$id}"<% end_if %>> 
  {$children}

</h1>
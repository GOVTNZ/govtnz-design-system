<div class="<% if $errorId %>g-form-group--error<% end_if %>"> 
  <label class="g-selectBlock-label"<% if $selectId %> for="{$selectId}"<% end_if %>> 
    {$label}

  </label> 
  <select class="g-selectBlock-select<% if $error %>  g-selectBlock-select--error<% end_if %>"<% if $selectId %> id="{$selectId}"<% end_if %><% if $name %> name="{$name}"<% end_if %><% if $multiple %> multiple="<% if $multiple %>undefined<% end_if %>"<% end_if %>> Options</select> 
</div>
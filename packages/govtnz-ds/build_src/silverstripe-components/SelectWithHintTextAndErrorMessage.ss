<div class="g-selectWithHintTextAndErrorMessage-form-group g-selectWithHintTextAndErrorMessage-form-group--error"> 
  <label class="g-selectWithHintTextAndErrorMessage-label"<% if $select2 %> for="{$select2}"<% end_if %>> 
    Label text goes here
  </label> 
  <span class="g-selectWithHintTextAndErrorMessage-hint"<% if $select2Hint %> id="{$select2Hint}"<% end_if %>> 
    Hint text goes here
  </span> 
  <span class="g-selectWithHintTextAndErrorMessage-error-message"<% if $select2Error %> id="{$select2Error}"<% end_if %>> 
    Error message goes here
  </span> 
  <select<% if $select2Hint && $select2Error %> aria-describedby="{$select2Hint} {$select2Error}"<% end_if %> class="g-selectWithHintTextAndErrorMessage-select g-selectWithHintTextAndErrorMessage-select--error"<% if $select2 %> id="{$select2}"<% end_if %><% if $name %> name="{$name}"<% end_if %><% if $multiple %> multiple="<% if $multiple %>undefined<% end_if %>"<% end_if %>> 
    Govt.NZ frontend option 1
    Govt.NZ frontend option 2
    Govt.NZ frontend option 3
  

</select> </div>
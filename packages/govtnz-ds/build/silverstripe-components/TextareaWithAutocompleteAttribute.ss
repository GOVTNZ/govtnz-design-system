<div class="g-textareaWithAutocompleteAttribute-form-group"> 
  <label class="g-textareaWithAutocompleteAttribute-label"<% if $textareaWithAutocompleteAttribute %> for="{$textareaWithAutocompleteAttribute}"<% end_if %>> 
    Full address
  </label> 
  <textarea autocomplete="street-address" class="g-textareaWithAutocompleteAttribute-textarea"<% if $textareaWithAutocompleteAttribute %> id="{$textareaWithAutocompleteAttribute}"<% end_if %> name="address" rows="5"/> 
</div>
<div class="g-textareaWithLabelAsPageHeading-form-group"> 
  <h1 class="g-textareaWithLabelAsPageHeading-label-wrapper"> 
    <label class="g-textareaWithLabelAsPageHeading-label"<% if $textareaWithPageHeading %> for="{$textareaWithPageHeading}"<% end_if %>> 
      Full address
    </label> 
  </h1> 
  <textarea class="g-textareaWithLabelAsPageHeading-textarea"<% if $textareaWithPageHeading %> id="{$textareaWithPageHeading}"<% end_if %> name="address" rows="5"/> 
</div>
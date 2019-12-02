<div class="g-textarea-form-group"> 
  <label class="g-textarea-label"<% if $moreDetail %> for="{$moreDetail}"<% end_if %>> 
    Can you provide more detail?
  </label> 
  <span class="g-textarea-hint"<% if $moreDetailHint %> id="{$moreDetailHint}"<% end_if %>> 
    Don't include personal or financial information, eg your National Insurance
    number or credit card details.
  </span> 
  <textarea<% if $moreDetailHint %> aria-describedby="{$moreDetailHint}"<% end_if %> class="g-textarea"<% if $moreDetail %> id="{$moreDetail}"<% end_if %><% if $name %> name="{$name}"<% end_if %><% if $rows %> rows=""<% end_if %><% if $disabled %> disabled="<% if $disabled %>undefined<% end_if %>"<% end_if %><% if $readOnly %> readonly="<% if $readOnly %>undefined<% end_if %>"<% end_if %><% if $cols %> cols=""<% end_if %><% if $autoFocus %> autofocus="<% if $autoFocus %>undefined<% end_if %>"<% end_if %><% if $spellCheck %> spellcheck="<% if $spellCheck %>undefined<% end_if %>"<% end_if %><% if $autoComplete %> autocomplete="{$autoComplete}"<% end_if %><% if $maxLength %> maxlength=""<% end_if %><% if $value %> value="{$value}"<% end_if %>/> 
</div>
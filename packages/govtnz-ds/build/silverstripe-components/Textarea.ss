<div class="g-textarea-form-group"> 
  <label class="g-textarea-label"<% if $moreDetail %> for="{$moreDetail}"<% end_if %>> 
    Can you provide more detail?
  </label> 
  <span class="g-textarea-hint"<% if $moreDetailHint %> id="{$moreDetailHint}"<% end_if %>> 
    Don't include personal or financial information, eg your National Insurance
    number or credit card details.
  </span> 
  <textarea<% if $moreDetailHint %> aria-describedby="{$moreDetailHint}"<% end_if %> class="g-textarea"<% if $moreDetail %> id="{$moreDetail}"<% end_if %> name="more-detail" rows="5"/> 
</div>
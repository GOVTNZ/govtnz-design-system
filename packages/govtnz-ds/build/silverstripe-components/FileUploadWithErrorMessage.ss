<div class="g-fileUploadWithErrorMessage-form-group g-fileUploadWithErrorMessage-form-group--error"> 
  <label class="g-fileUploadWithErrorMessage-label"<% if $fileUpload3 %> for="{$fileUpload3}"<% end_if %>> 
    Upload a file
  </label> 
  <span class="g-fileUploadWithErrorMessage-hint"<% if $fileUpload3Hint %> id="{$fileUpload3Hint}"<% end_if %>> 
    Your photo may be in your Pictures, Photos, Downloads or Desktop folder. Or
    in an app like iPhoto.
  </span> 
  <span class="g-fileUploadWithErrorMessage-error-message"<% if $fileUpload3Error %> id="{$fileUpload3Error}"<% end_if %>> 
    Error message goes here
  </span> 
  <input<% if $fileUpload3Hint && $fileUpload3Error %> aria-describedby="{$fileUpload3Hint} {$fileUpload3Error}"<% end_if %> class="g-fileUploadWithErrorMessage-file-upload g-fileUploadWithErrorMessage-file-upload--error"<% if $fileUpload3 %> id="{$fileUpload3}"<% end_if %><% if $name %> name="{$name}"<% end_if %> type="file"<% if $disabled %> disabled="<% if $disabled %>undefined<% end_if %>"<% end_if %><% if $readOnly %> readonly="<% if $readOnly %>undefined<% end_if %>"<% end_if %><% if $autoFocus %> autofocus="<% if $autoFocus %>undefined<% end_if %>"<% end_if %>/> 
</div>
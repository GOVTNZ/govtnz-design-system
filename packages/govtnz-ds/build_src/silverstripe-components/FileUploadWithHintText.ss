<div class="g-fileUploadWithHintText-form-group"> 
  <label class="g-fileUploadWithHintText-label"<% if $fileUpload2 %> for="{$fileUpload2}"<% end_if %>> 
    Upload your photo
  </label> 
  <span class="g-fileUploadWithHintText-hint"<% if $fileUpload2Hint %> id="{$fileUpload2Hint}"<% end_if %>> 
    Your photo may be in your Pictures, Photos, Downloads or Desktop folder. Or
    in an app like iPhoto.
  </span> 
  <input<% if $fileUpload2Hint %> aria-describedby="{$fileUpload2Hint}"<% end_if %> class="g-fileUploadWithHintText-file-upload"<% if $fileUpload2 %> id="{$fileUpload2}"<% end_if %><% if $name %> name="{$name}"<% end_if %> type="file"<% if $disabled %> disabled="<% if $disabled %>undefined<% end_if %>"<% end_if %><% if $readOnly %> readonly="<% if $readOnly %>undefined<% end_if %>"<% end_if %><% if $autoFocus %> autofocus="<% if $autoFocus %>undefined<% end_if %>"<% end_if %>/> 
</div>
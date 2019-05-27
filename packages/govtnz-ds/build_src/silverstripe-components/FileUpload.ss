<div class="g-fileUpload-form-group"> 
  <label class="g-fileUpload-label"<% if $fileUpload1 %> for="{$fileUpload1}"<% end_if %>> 
    Upload a file
  </label> 
  <input class="g-file-upload"<% if $fileUpload1 %> id="{$fileUpload1}"<% end_if %><% if $name %> name="{$name}"<% end_if %> type="file"<% if $disabled %> disabled="<% if $disabled %>undefined<% end_if %>"<% end_if %><% if $readOnly %> readonly="<% if $readOnly %>undefined<% end_if %>"<% end_if %><% if $autoFocus %> autofocus="<% if $autoFocus %>undefined<% end_if %>"<% end_if %>/> 
</div>
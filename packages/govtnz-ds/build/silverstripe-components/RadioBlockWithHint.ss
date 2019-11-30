<div class="g-radios__item"> 
        <input<% if $hintId %> aria-describedby="{$hintId}"<% end_if %> class="g-radios__input<% if $fakeFocus %>  :focus<% end_if %>"<% if $radioId %> id="{$radioId}"<% end_if %> type="radio"<% if $name %> name="{$name}"<% end_if %><% if $disabled %> disabled="<% if $disabled %>undefined<% end_if %>"<% end_if %><% if $readOnly %> readonly="<% if $readOnly %>undefined<% end_if %>"<% end_if %><% if $autoFocus %> autofocus="<% if $autoFocus %>undefined<% end_if %>"<% end_if %><% if $value %> value="{$value}"<% end_if %><% if $checked %> checked="<% if $checked %>undefined<% end_if %>"<% end_if %>/> 
        <label class="g-radioBlockWithHint-label g-radios__label"<% if $radioId %> for="{$radioId}"<% end_if %>> {$label}
</label> 
        <div class="g-radioBlockWithHint-hint g-radios__hint"<% if $hintId %> id="{$hintId}"<% end_if %>> {$hint}
</div> 
      </div>
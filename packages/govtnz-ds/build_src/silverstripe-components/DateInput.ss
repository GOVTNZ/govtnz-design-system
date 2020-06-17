<div class="g-dateInput-form-group<% if $errorId %>  g-dateInput-form-group--error<% end_if %>"> 
  <fieldset<% if $hintId && $errorId %> aria-describedby="{$hintId} {$errorId}"<% end_if %> class="g-dateInput-fieldset" role="group"> 
    <legend class="g-dateInput-fieldset__legend"> 
      {$label}

    </legend> 
    <span class="g-dateInput-hint"<% if $hintId %> id="{$hintId}"<% end_if %>> 
      {$hint}

    </span> 
    
      <span class="g-dateInput-error-message"<% if $errorId %> id="{$errorId}"<% end_if %>> 
        <span class="g-dateInput-visually-hidden"> Error: </span> 
        {$error}

      </span> 
    
    <div class="g-dateInput"<% if $id %> id="{$id}"<% end_if %>> 
      <div class="g-dateInput__item"> 
        <div class="g-dateInput-form-group"> 
          <label class="g-dateInput-label g-dateInput__label"<% if $dayId %> for="{$dayId}"<% end_if %>> 
            Day
          </label> 
          <input class="g-dateInput-input g-dateInput__input g-dateInput-input--width-2<% if $error %>  g-dateInput-input--error<% end_if %>"<% if $dayId %> id="{$dayId}"<% end_if %><% if  %> maxlength="2"<% end_if %><% if $dayName %> name="{$dayName}"<% end_if %> pattern="[0-9]*" type="text"<% if $value %> value="{$value}"<% end_if %><% if $required %> required="<% if $required %>undefined<% end_if %>"<% end_if %><% if $disabled %> disabled="<% if $disabled %>undefined<% end_if %>"<% end_if %><% if $readOnly %> readonly="<% if $readOnly %>undefined<% end_if %>"<% end_if %><% if $autoFocus %> autofocus="<% if $autoFocus %>undefined<% end_if %>"<% end_if %><% if $spellCheck %> spellcheck="<% if $spellCheck %>undefined<% end_if %>"<% end_if %><% if $autoComplete %> autocomplete="{$autoComplete}"<% end_if %>/> 
        </div> 
      </div> 
      <div class="g-dateInput__item"> 
        <div class="g-dateInput-form-group"> 
          <label class="g-dateInput-label g-dateInput__label"<% if $monthId %> for="{$monthId}"<% end_if %>> 
            Month
          </label> 
          <input class="g-dateInput-input g-dateInput__input g-dateInput-input--width-2<% if $error %>  g-dateInput-input--error<% end_if %>"<% if $monthId %> id="{$monthId}"<% end_if %><% if  %> maxlength="2"<% end_if %><% if $yearName %> name="{$yearName}"<% end_if %> pattern="[0-9]*" type="text"<% if $value2 %> value="{$value2}"<% end_if %><% if $required %> required="<% if $required %>undefined<% end_if %>"<% end_if %><% if $disabled %> disabled="<% if $disabled %>undefined<% end_if %>"<% end_if %><% if $readOnly %> readonly="<% if $readOnly %>undefined<% end_if %>"<% end_if %><% if $autoFocus %> autofocus="<% if $autoFocus %>undefined<% end_if %>"<% end_if %><% if $spellCheck %> spellcheck="<% if $spellCheck %>undefined<% end_if %>"<% end_if %><% if $autoComplete %> autocomplete="{$autoComplete}"<% end_if %>/> 
        </div> 
      </div> 
      <div class="g-dateInput__item"> 
        <div class="g-dateInput-form-group"> 
          <label class="g-dateInput-label g-dateInput__label"<% if $yearId %> for="{$yearId}"<% end_if %>> 
            Year
          </label> 
          <input class="g-dateInput-input g-dateInput__input g-dateInput-input--width-4<% if $error %>  g-dateInput-input--error<% end_if %>"<% if $yearId %> id="{$yearId}"<% end_if %><% if  %> maxlength="4"<% end_if %><% if $yearName %> name="{$yearName}"<% end_if %> pattern="[0-9]*" type="text"<% if $value3 %> value="{$value3}"<% end_if %><% if $required %> required="<% if $required %>undefined<% end_if %>"<% end_if %><% if $disabled %> disabled="<% if $disabled %>undefined<% end_if %>"<% end_if %><% if $readOnly %> readonly="<% if $readOnly %>undefined<% end_if %>"<% end_if %><% if $autoFocus %> autofocus="<% if $autoFocus %>undefined<% end_if %>"<% end_if %><% if $spellCheck %> spellcheck="<% if $spellCheck %>undefined<% end_if %>"<% end_if %><% if $autoComplete %> autocomplete="{$autoComplete}"<% end_if %>/> 
        </div> 
      </div> 
    </div> 
  </fieldset> 
</div>
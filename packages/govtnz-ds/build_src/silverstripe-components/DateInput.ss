<div class="g-dateInput-form-group<% if $error %>  g-dateInput-form-group--error<% end_if %>"> 
          <fieldset<% if $hintId && $errorId %> aria-describedby="{$hintId} {$errorId}"<% end_if %> class="g-fieldset" role="group"> 
            <legend class="g-fieldset__legend g-fieldset__legend--xl"> 
              {$label}

            </legend> 
            <span class="g-dateInput-hint"<% if $hintId %> id="{$hintId}"<% end_if %>> 
              {$hint}

            </span> 
            
              <span class="g-dateInput-error-message"<% if $errorId %> id="{$errorId}"<% end_if %>> 
                <span class="g-dateInput-visually-hidden"> Error: </span> 
                {$error}

            </span> 
            
            <div class="g-date-input"<% if $id %> id="{$id}"<% end_if %>> 
              <div class="g-date-input__item"> 
                <div class="g-dateInput-form-group"> 
                  <label class="g-dateInput-label g-date-input__label"<% if $dayId %> for="{$dayId}"<% end_if %>> 
                    Day
                  </label> 
                  <input class="g-dateInput-input g-date-input__input g-dateInput-input--width-2<% if $error %>  g-dateInput-input--error<% end_if %>"<% if $dayId %> id="{$dayId}"<% end_if %><% if  %> maxlength="2"<% end_if %><% if $name %> name="{$name}"<% end_if %> pattern="[0-9]*" type="text"<% if $disabled %> disabled="<% if $disabled %>undefined<% end_if %>"<% end_if %><% if $readOnly %> readonly="<% if $readOnly %>undefined<% end_if %>"<% end_if %><% if $autoFocus %> autofocus="<% if $autoFocus %>undefined<% end_if %>"<% end_if %><% if $value %> value="{$value}"<% end_if %><% if $spellCheck %> spellcheck="<% if $spellCheck %>undefined<% end_if %>"<% end_if %><% if $autoComplete %> autocomplete="{$autoComplete}"<% end_if %>/> 
                </div> 
              </div> 
              <div class="g-date-input__item"> 
                <div class="g-dateInput-form-group"> 
                  <label class="g-dateInput-label g-date-input__label"<% if $monthId %> for="{$monthId}"<% end_if %>> 
                    Month
                  </label> 
                  <input class="g-dateInput-input g-date-input__input g-dateInput-input--width-2<% if $error %>  g-dateInput-input--error<% end_if %>"<% if $monthId %> id="{$monthId}"<% end_if %><% if  %> maxlength="2"<% end_if %><% if $name2 %> name="{$name2}"<% end_if %> pattern="[0-9]*" type="text"<% if $disabled2 %> disabled="<% if $disabled2 %>undefined<% end_if %>"<% end_if %><% if $readOnly2 %> readonly="<% if $readOnly2 %>undefined<% end_if %>"<% end_if %><% if $autoFocus2 %> autofocus="<% if $autoFocus2 %>undefined<% end_if %>"<% end_if %><% if $value2 %> value="{$value2}"<% end_if %><% if $spellCheck2 %> spellcheck="<% if $spellCheck2 %>undefined<% end_if %>"<% end_if %><% if $autoComplete2 %> autocomplete="{$autoComplete2}"<% end_if %>/> 
                </div> 
              </div> 
              <div class="g-date-input__item"> 
                <div class="g-dateInput-form-group"> 
                  <label class="g-dateInput-label govuk-date-input__label"<% if $yearId %> for="{$yearId}"<% end_if %>> 
                    Year
                  </label> 
                  <input class="g-dateInput-input g-date-input__input g-dateInput-input--width-4<% if $error %>  g-dateInput-input--error<% end_if %>"<% if $yearId %> id="{$yearId}"<% end_if %><% if  %> maxlength="4"<% end_if %><% if $name3 %> name="{$name3}"<% end_if %> pattern="[0-9]*" type="text"<% if $disabled3 %> disabled="<% if $disabled3 %>undefined<% end_if %>"<% end_if %><% if $readOnly3 %> readonly="<% if $readOnly3 %>undefined<% end_if %>"<% end_if %><% if $autoFocus3 %> autofocus="<% if $autoFocus3 %>undefined<% end_if %>"<% end_if %><% if $value3 %> value="{$value3}"<% end_if %><% if $spellCheck3 %> spellcheck="<% if $spellCheck3 %>undefined<% end_if %>"<% end_if %><% if $autoComplete3 %> autocomplete="{$autoComplete3}"<% end_if %>/> 
                </div> 
              </div> 
            </div> 
          </fieldset> 
        </div>
<div class="g-fieldsetBlock-form-group<% if $errorId %>  g-fieldsetBlock-form-group--error<% end_if %>">    <fieldset<% if $hintId && $errorId %> aria-describedby="{$hintId} {$errorId}"<% end_if %> class="g-fieldsetBlock-fieldset">      <legend class="g-fieldsetBlock-fieldset__legend">        {$legend}
     </legend>             <div class="g-fieldsetBlock-hint"<% if $hintId %> id="{$hintId}"<% end_if %>>          {$hint}
       </div>                  <div class="g-fieldsetBlock-error-message"<% if $errorId %> id="{$errorId}"<% end_if %>>          <span class="g-fieldsetBlock-visually-hidden">            Error:         </span>          {$error}
       </div>           <div> {$children}
</div>    </fieldset>  </div>
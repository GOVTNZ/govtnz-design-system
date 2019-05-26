<div class="g-fieldsetBlock-form-group"> 
        <fieldset<% if $hintId %> aria-describedby="{$hintId}"<% end_if %> class="g-fieldset"> 
          <legend class="g-fieldset__legend"> {$legend}
</legend> 
          
            <div class="g-fieldsetBlock-hint"<% if $hintId %> id="{$hintId}"<% end_if %>> {$hint}
</div> 
          
          <div> {$children}
</div> 
        </fieldset> 
      </div>
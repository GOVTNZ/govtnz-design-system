<div<% if $errorSummaryTitle %> aria-labelledby="{$errorSummaryTitle}"<% end_if %> class="g-error-summary optional-extra-class" data-module="error-summary" role="alert" tabindex="-1"> 
  <h2 class="g-error-summary__title"<% if $errorSummaryTitle %> id="{$errorSummaryTitle}"<% end_if %>> 
    Message to alert the user to a problem goes here
  </h2> 
  <div class="g-error-summary__body"> 
    <p> 
      Optional description of the errors and how to correct them
    </p> 
    <ul class="g-errorSummary-list g-error-summary__list"> 
      <li> 
        <a<% if $href %> href="{$href}"<% end_if %><% if $rel %> rel="{$rel}"<% end_if %><% if $target %> target="<% if $target == "Blank" %>_blank<% else_if $target == "Top" %>_top<% else_if $target == "Self" %>_self<% else_if $target == "Parent" %>_parent<% end_if %>"<% end_if %>> Descriptive link to the question with an error</a> 
      </li> 
      <li> 
        <a<% if $href2 %> href="{$href2}"<% end_if %><% if $rel2 %> rel="{$rel2}"<% end_if %><% if $target2 %> target="<% if $target2 == "Blank" %>_blank<% else_if $target2 == "Top" %>_top<% else_if $target2 == "Self" %>_self<% else_if $target2 == "Parent" %>_parent<% end_if %>"<% end_if %>> Descriptive link to the question with an error</a> 
      </li> 
    </ul> 
  </div> 
</div>
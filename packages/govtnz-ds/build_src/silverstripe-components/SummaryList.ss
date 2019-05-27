<dl class="g-summary-list"> 
  <div class="g-summary-list__row"> 
    <dt class="g-summary-list__key"> 
      Name
    </dt> 
    <dd class="g-summary-list__value"> 
      Firstname Lastname
    </dd> 
    <dd class="g-summary-list__actions"> 
      <ul class="g-summary-list__actions-list"> 
        <li class="g-summary-list__actions-list-item"> 
          <a class="g-summaryList-link"<% if $href %> href="{$href}"<% end_if %><% if $rel %> rel="{$rel}"<% end_if %><% if $target %> target="<% if $target == "Blank" %>_blank<% else_if $target == "Top" %>_top<% else_if $target == "Self" %>_self<% else_if $target == "Parent" %>_parent<% end_if %>"<% end_if %>> 
            Edit<span class="g-summaryList-visually-hidden">  name</span> 
          </a> 
        </li> 
        <li class="g-summary-list__actions-list-item"> 
          <a class="g-summaryList-link"<% if $href2 %> href="{$href2}"<% end_if %><% if $rel2 %> rel="{$rel2}"<% end_if %><% if $target2 %> target="<% if $target2 == "Blank" %>_blank<% else_if $target2 == "Top" %>_top<% else_if $target2 == "Self" %>_self<% else_if $target2 == "Parent" %>_parent<% end_if %>"<% end_if %>> 
            Delete<span class="g-summaryList-visually-hidden">  name</span> 
          </a> 
        </li> 
      </ul> 
    </dd> 
  </div> 
  <div class="g-summary-list__row"> 
    <dt class="g-summary-list__key"> 
      Date of birth
    </dt> 
    <dd class="g-summary-list__value"> 
      13/08/1980
    </dd> 
    <dd class="g-summary-list__actions"> 
      <a class="g-summaryList-link"<% if $href3 %> href="{$href3}"<% end_if %><% if $rel3 %> rel="{$rel3}"<% end_if %><% if $target3 %> target="<% if $target3 == "Blank" %>_blank<% else_if $target3 == "Top" %>_top<% else_if $target3 == "Self" %>_self<% else_if $target3 == "Parent" %>_parent<% end_if %>"<% end_if %>> 
        Change<span class="g-summaryList-visually-hidden">  date of birth</span> 
      </a> 
    </dd> 
  </div> 
  <div class="g-summary-list__row"> 
    <dt class="g-summary-list__key"> 
      Contact information
    </dt> 
    <dd class="g-summary-list__value"> 
      <p class="g-summaryList-body"> 
        email@email.com
      </p> 
      <p class="g-summaryList-body"> 
        Address line 1<br/> 
        Address line 2<br/> 
        Address line 3<br/> 
        Address line 4<br/> 
        Address line 5
      </p> 
    </dd> 
    <dd class="g-summary-list__actions"> 
      <ul class="g-summary-list__actions-list"> 
        <li class="g-summary-list__actions-list-item"> 
          <a class="g-summaryList-link"<% if $href4 %> href="{$href4}"<% end_if %><% if $rel4 %> rel="{$rel4}"<% end_if %><% if $target4 %> target="<% if $target4 == "Blank" %>_blank<% else_if $target4 == "Top" %>_top<% else_if $target4 == "Self" %>_self<% else_if $target4 == "Parent" %>_parent<% end_if %>"<% end_if %>> 
            Edit<span class="g-summaryList-visually-hidden">  contact information</span> 
          </a> 
        </li> 
        <li class="g-summary-list__actions-list-item"> 
          <a class="g-summaryList-link"<% if $href5 %> href="{$href5}"<% end_if %><% if $rel5 %> rel="{$rel5}"<% end_if %><% if $target5 %> target="<% if $target5 == "Blank" %>_blank<% else_if $target5 == "Top" %>_top<% else_if $target5 == "Self" %>_self<% else_if $target5 == "Parent" %>_parent<% end_if %>"<% end_if %>> 
            Change<span class="g-summaryList-visually-hidden"> 
              contact information</span> 
          </a> 
        </li> 
      </ul> 
    </dd> 
  </div> 
</dl>
<div class="g-breadcrumbs"> 
  <ol class="g-breadcrumbs__list"> 
    <li class="g-breadcrumbs__list-item"> 
      <a class="g-breadcrumbs__link"<% if $href %> href="{$href}"<% end_if %><% if $rel %> rel="{$rel}"<% end_if %><% if $target %> target="<% if $target == "Blank" %>_blank<% else_if $target == "Top" %>_top<% else_if $target == "Self" %>_self<% else_if $target == "Parent" %>_parent<% end_if %>"<% end_if %>> Section</a> 
    </li> 
    <li class="g-breadcrumbs__list-item"> 
      <a class="g-breadcrumbs__link"<% if $href2 %> href="{$href2}"<% end_if %><% if $rel2 %> rel="{$rel2}"<% end_if %><% if $target2 %> target="<% if $target2 == "Blank" %>_blank<% else_if $target2 == "Top" %>_top<% else_if $target2 == "Self" %>_self<% else_if $target2 == "Parent" %>_parent<% end_if %>"<% end_if %>> Sub-section</a> 
    </li> 
  </ol> 
</div>
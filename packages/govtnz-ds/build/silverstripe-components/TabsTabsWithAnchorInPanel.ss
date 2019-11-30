<div class="g-tabsTabsWithAnchorInPanel-tabs" data-module="tabs"> 
  <h2 class="g-tabsTabsWithAnchorInPanel-tabs__title"> 
    Contents
  </h2> 

  <ul class="g-tabsTabsWithAnchorInPanel-tabs__list" role="tablist"> 
    <li class="g-tabsTabsWithAnchorInPanel-tabs__list-item" role="presentation"> 
      <a<% if $tab1 %> aria-controls="{$tab1}"<% end_if %> aria-selected="true" class="g-tabsTabsWithAnchorInPanel-tabs__tab g-tabsTabsWithAnchorInPanel-tabs__tab--selected"<% if $href %> href="{$href}"<% end_if %><% if $tabTab1 %> id="{$tabTab1}"<% end_if %> role="tab" tabindex="0"<% if $rel %> rel="{$rel}"<% end_if %><% if $target %> target="<% if $target == "Blank" %>_blank<% else_if $target == "Top" %>_top<% else_if $target == "Self" %>_self<% else_if $target == "Parent" %>_parent<% end_if %>"<% end_if %>> 
        Tab 1
      </a> 
    </li> 
    <li class="g-tabsTabsWithAnchorInPanel-tabs__list-item" role="presentation"> 
      <a<% if $tab2 %> aria-controls="{$tab2}"<% end_if %> aria-selected="false" class="g-tabsTabsWithAnchorInPanel-tabs__tab"<% if $href2 %> href="{$href2}"<% end_if %><% if $tabTab2 %> id="{$tabTab2}"<% end_if %> role="tab" tabindex="-1"<% if $rel2 %> rel="{$rel2}"<% end_if %><% if $target2 %> target="<% if $target2 == "Blank" %>_blank<% else_if $target2 == "Top" %>_top<% else_if $target2 == "Self" %>_self<% else_if $target2 == "Parent" %>_parent<% end_if %>"<% end_if %>> 
        Tab 2
      </a> 
    </li> 
  </ul> 

  <section<% if $tabTab1 %> aria-labelledby="{$tabTab1}"<% end_if %> class="g-tabsTabsWithAnchorInPanel-tabs__panel"<% if $tab1 %> id="{$tab1}"<% end_if %> role="tabpanel"> 
    <h2 class="g-tabsTabsWithAnchorInPanel-heading-l"> Tab 1</h2> 
    <p> 
      Testing that when you click the anchor it moves to the anchor point
      successfully
    </p> 
    <a class="g-link"<% if $href3 %> href="{$href3}"<% end_if %><% if $rel3 %> rel="{$rel3}"<% end_if %><% if $target3 %> target="<% if $target3 == "Blank" %>_blank<% else_if $target3 == "Top" %>_top<% else_if $target3 == "Self" %>_self<% else_if $target3 == "Parent" %>_parent<% end_if %>"<% end_if %>> Anchor</a> 
    <a<% if $anchor %> id="{$anchor}"<% end_if %> tabindex="0"<% if $href4 %> href="{$href4}"<% end_if %><% if $rel4 %> rel="{$rel4}"<% end_if %><% if $target4 %> target="<% if $target4 == "Blank" %>_blank<% else_if $target4 == "Top" %>_top<% else_if $target4 == "Self" %>_self<% else_if $target4 == "Parent" %>_parent<% end_if %>"<% end_if %>> Anchor Point</a> 
  </section> 
  <section<% if $tabTab2 %> aria-labelledby="{$tabTab2}"<% end_if %> class="g-tabsTabsWithAnchorInPanel-tabs__panel g-tabsTabsWithAnchorInPanel-tabs__panel--hidden"<% if $tab2 %> id="{$tab2}"<% end_if %> role="tabpanel"> 
    <h2 class="g-tabsTabsWithAnchorInPanel-heading-l"> Tab 2</h2> 
  </section> 
</div>
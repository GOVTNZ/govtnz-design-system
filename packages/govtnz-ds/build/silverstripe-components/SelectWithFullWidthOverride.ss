<div class="g-selectWithFullWidthOverride-form-group"> 
  <label class="g-selectWithFullWidthOverride-label"<% if $select1 %> for="{$select1}"<% end_if %>> 
    Label text goes here
  </label> 
  <select class="g-selectWithFullWidthOverride-select g-!-width-full"<% if $select1 %> id="{$select1}"<% end_if %><% if $name %> name="{$name}"<% end_if %><% if $multiple %> multiple="<% if $multiple %>undefined<% end_if %>"<% end_if %>> 
    <option value="1"<% if $selected %> selected="<% if $selected %>undefined<% end_if %>"<% end_if %>> Govt.NZ frontend option 1</option> 
    <option<% if $selected2 %> selected="<% if $selected2 %>undefined<% end_if %>"<% end_if %> value="2"> Govt.NZ frontend option 2</option> 
    <option disabled="" value="3"<% if $selected3 %> selected="<% if $selected3 %>undefined<% end_if %>"<% end_if %>> Govt.NZ frontend option 3</option> 
  </select> 
</div>
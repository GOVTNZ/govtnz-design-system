<button $getAttributesHTML('class') class="btn $extraClass<% if $ButtonStyle %> btn-{$ButtonStyle}<% end_if %><% if $ButtonSize %> btn-{$ButtonSize}<% end_if %>">
	<% if $ButtonContent %>$ButtonContent<% else %>$Title<% end_if %>
</button>

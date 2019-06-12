<ul class="nav nav-tabs">
	<% loop Tabs %>
		<li class="<% if $First %>active<% end_if %>">
			<a href="#$id" data-toggle="tab">$Title</a>
		</li>
	<% end_loop %>
</ul>
<div class="tab-content">
	<% loop Tabs %>
		<% if Tabs %>
			$FieldHolder
		<% else %>
			<div class="tab-pane <% if $First %>active<% end_if %>" id="$id">
				<% loop Fields %>
					$FieldHolder
				<% end_loop %>
			</div>
		<% end_if %>
	<% end_loop %>
</div>


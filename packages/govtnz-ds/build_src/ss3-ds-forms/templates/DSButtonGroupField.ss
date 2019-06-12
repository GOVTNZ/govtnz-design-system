<div class="btn-group<% if extraClass %> $extraClass<% end_if %>">
<% loop $Options %>
  <button type="button" data-value="$Value" class="btn <% if $Selected %>active<% end_if %>">$Label</button>
<% end_loop %>
</div>
<input id="$id" type="hidden" name="$Name" value="$Value">
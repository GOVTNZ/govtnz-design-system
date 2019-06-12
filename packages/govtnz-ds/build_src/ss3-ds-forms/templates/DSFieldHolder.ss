<div id="$Name" class="$HolderClasses" $HolderAttributes>
    <label for="$ID" class="$LabelClasses<% if $BootstrapLayout=='horizontal' %> control-label $GridLabelClass<% end_if %>">$Title</label>
    <% if $BootstrapLayout=='horizontal' %><div class="$GridInputClass"><% end_if %>
    $Field
    <% if $HelpText %>
    <p class="help-block">$HelpText</p>
    <% end_if %>
    <% if $InlineHelpText %>
    <span class="help-inline">$InlineHelpText</span>
    <% end_if %>
<% if $BootstrapLayout=='horizontal' %></div><% end_if %>
</div>

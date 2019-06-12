<div id="$Name" class="$HolderClasses" $HolderAttributes>
    <label for="$ID" class="$LabelClasses<% if $BootstrapLayout=='horizontal' %> control-label $GridLabelClass<% end_if %>">$Title</label>

    <% if $BootstrapLayout=='horizontal' %><div class="$GridInputClass "><% end_if %>

    <% if $AppendedText || $PrependedText %><div class="input-group"><% end_if %>

    <% if $PrependedText %>
        <span class="input-group-addon">$PrependedText</span>
    <% end_if %>

HELLO

    $Field

    <% if $AppendedText %>
        <span class="input-group-addon">$AppendedText</span>
    <% end_if %>

    <% if $HelpText %><p class="help-block">$HelpText</p><% end_if %>

    <% if $InlineHelpText %><span class="help-inline">$InlineHelpText</span><% end_if %>

    <% if $AppendedText || $PrependedText %></div><% end_if %>

    <% if $BootstrapLayout=='horizontal' %></div><% end_if %>
</div>

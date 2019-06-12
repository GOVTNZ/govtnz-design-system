<div id="$Name" class="checkbox $HolderClasses" $HolderAttributes>
    <label class="$labelClasses">
        <input $AttributesHTML class="$inputClasses">$Title
    </label>
    <% if $HelpText %>
    <p class="help-block">$HelpText</p>
    <% end_if %>
    <% if $InlineHelpText %>
    <span class="help-inline">$InlineHelpText</span>
    <% end_if %>
</div>


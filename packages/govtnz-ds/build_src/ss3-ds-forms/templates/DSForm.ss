<% if $IncludeFormTag %>
<form $AttributesHTML role="form">
sdfsfsdfsdfFSDSDFDF


<% end_if %>
	<% if $Message %>
		<% if $MessageType == "good" %>
                <div id="{$FormName}_error" class="alert alert-success" role="alert">$Message</div>
		<% else_if $MessageType == "info" %>
                <div id="{$FormName}_error" class="alert alert-info" role="alert">$Message</div>
		<% else_if $MessageType == "bad" %>
                <div id="{$FormName}_error" class="alert alert-danger" role="alert">$Message</div>
		<% end_if %>
	<% end_if %>

	<fieldset>
		<% if $Legend %><legend>$Legend</legend><% end_if %>
		<% loop $Fields %>
			$FieldHolder


		
		<% end_loop %>
		<div class="clear"><!-- --></div>
	</fieldset>

	<% if $Actions %>
        <% if $formLayout=='horizontal' %>
            <div class="form-group">
                <div class="$gridActionClass">
        <% else %>
            <div class="form-actions">
        <% end_if %>

        <% loop $Actions %>
            $Field
        <% end_loop %>

        <% if $formLayout=='horizontal' %>
            </div>
        <% end_if %>

	    </div>
	<% end_if %>
<% if $IncludeFormTag %>
</form>
<% end_if %>

<button aria-disabled="<% if $disabled %>true<% end_if %>" class="g-button<% if $disabled %>  g-button--disabled<% end_if %><% if $level == "secondary" %> g-button--secondary<% else_if $level == "warning" %> g-button--warning<% end_if %>" disabled="<% if $disabled %>true<% end_if %>"<% if $type %> type="<% if $type == "Submit" %>submit<% else_if $type == "Reset" %>reset<% else_if $type == "Button" %>button<% end_if %>"<% end_if %><% if $name %> name="{$name}"<% end_if %>> 
          {$children}

        </button>
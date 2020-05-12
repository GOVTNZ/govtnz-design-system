<li class="g-main-nav__item"> 
  <a<% if $ariaCurrent %> aria-current=""<% end_if %> class="g-main-nav__item__link"<% if $href %> href="{$href}"<% end_if %><% if $rel %> rel="{$rel}"<% end_if %><% if $target %> target="{$target}"<% end_if %>> 
    {$children}

  </a> 
</li>
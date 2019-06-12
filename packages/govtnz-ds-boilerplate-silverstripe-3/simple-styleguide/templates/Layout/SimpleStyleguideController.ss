<% require css("cms/css/TreeSelector.css") %>
<div class="styleguide">
	<div class="styleguide__title">
		<h1>$Title</h1>
		<p class="page-description">This controller is only accessible to developers and admin users.</p>
	</div>

	<div class="styleguide__navigation">
		<h3>Quick links</h3>
		<ul>
			<li><a href="#typography">Typography</a></li>
			<li><a href="#links">Links</a></li>
			<li><a href="#headings">Headings</a></li>
			<li><a href="#lists">Lists</a></li>
			<li><a href="#blockquote">Blockquote</a></li>
		</ul>
	</div>

	<div class="styleguide__content">

		<h2 id="typography">Typography</h2>
		
		<h3>Paragraph</h3>

		<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam egestas,  diam sit amet faucibus dictum, turpis libero porttitor diam, id  pellentesque orci augue adipiscing risus. Nulla id lacus eros. Nam  porttitor semper enim, sit amet vestibulum arcu adipiscing sed. Proin  dignissim, ligula id rhoncus fringilla, nunc lectus luctus magna, vitae  cursus neque arcu id risus. Phasellus eu risus quis mauris consectetur  luctus. Sed facilisis diam mauris, a vulputate ligula. Sed nec purus  mauris. Nulla euismod massa ac nisl gravida dictum. Fusce leo turpis,  accumsan non ultricies sed, consectetur id dui. Suspendisse porttitor  odio in ipsum dignissim mollis.</p>
		<p>Maecenas id dolor odio, eu elementum augue. Suspendisse odio nisi,  aliquet eu tempus quis, rutrum quis sem. Nulla volutpat cursus dolor  tempus consectetur. Proin faucibus, nulla at sodales interdum, lectus  lectus aliquet risus, ut rutrum velit ligula eget ligula. Sed volutpat,  elit non condimentum interdum, purus velit feugiat augue, id cursus  felis dui sed diam. Proin in lobortis tellus. Nullam fringilla dapibus  urna et pretium. Proin ac ligula ut purus luctus blandit ac ac lacus.  Etiam molestie consectetur felis vitae mollis. Pellentesque semper  bibendum lectus, molestie porta odio aliquet vehicula. Nunc et volutpat  arcu. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices  posuere cubilia Curae; Cras pretium mauris eu dolor molestie hendrerit.  Duis lectus leo, gravida sed ullamcorper eu, pretium eu augue.  Vestibulum eleifend, velit et dapibus dapibus, justo quam dictum diam,  ac euismod augue ipsum ac leo. Aliquam erat volutpat. Morbi a mi ac urna  tincidunt fermentum consectetur sit amet arcu.</p>

		<h3>Paragraph (strikethrough, small, bold)</h3>

		<p>Maecenas id dolor odio, eu elementum augue. Suspendisse odio nisi,  aliquet eu tempus quis, rutrum quis sem. Nulla volutpat cursus dolor  tempus consectetur. <span style="text-decoration: line-through;">Proin faucibus, nulla at sodales interdum, lectus  lectus aliquet risus, ut rutrum velit ligula eget ligula. Sed volutpat,  elit non condimentum interdum, purus velit feugiat augue, id cursus  felis dui sed diam. Proin in lobortis tellus. Nullam fringilla dapibus  urna et pretium. Proin ac ligula ut purus luctus blandit ac ac lacus.</span>  Etiam molestie <small>consectetur felis vitae mollis. Pellentesque semper  bibendum lectus, molestie porta odio aliquet vehicula. Nunc et volutpat  arcu.</small> Vestibulum ante ipsum primis in faucibus orci luctus et ultrices  posuere cubilia Curae; Cras pretium mauris eu dolor molestie hendrerit.  Duis lectus leo, gravida sed ullamcorper eu, pretium eu augue.  <b>Vestibulum eleifend, velit et dapibus dapibus, justo quam dictum diam,  ac euismod augue ipsum ac leo.</b> Aliquam erat volutpat. Morbi a mi ac urna  tincidunt fermentum consectetur sit amet arcu.</p>

		<h3>Macrons</h3>

		<p>ĀĒĪŌŪāēīōū. He aha ngā mahi a te rongoā.</p>
		<p><b>ĀĒĪŌŪāēīōū. He aha ngā mahi a te rongoā.</b></p>
		<p><em>ĀĒĪŌŪāēīōū. He aha ngā mahi a te rongoā.</em></p>
		<p><small>ĀĒĪŌŪāēīōū. He aha ngā mahi a te rongoā.</small></p>

		<hr />
		<h2 id="links">Links</h2>

		<h3>Standard links</h3>

		<p>Lorem ipsum dolor sit amet, <a href="#">consectetur adipiscing</a> elit.</p>
		<p>Lorem ipsum dolor sit amet, <a href="http://google.com">consectetur adipiscing</a> elit.</p>
		<p>Lorem ipsum dolor sit amet, <a href="/test.doc">consectetur adipiscing</a> elit.</p>
		<p>Lorem ipsum dolor sit amet, <a href="/test.xls">consectetur adipiscing</a> elit.</p>
		<p>Lorem ipsum dolor sit amet, <a href="/test.zip">consectetur adipiscing</a> elit.</p>
		<p>Lorem ipsum dolor sit amet, <a href="/test.exe">consectetur adipiscing</a> elit.</p>
		<p>Lorem ipsum dolor sit amet, <a href="/test.pdf">consectetur adipiscing</a> elit.</p>
		<p>Lorem ipsum dolor sit amet, <a href="/test.mp3">consectetur adipiscing</a> elit.</p>
		<p>Lorem ipsum dolor sit amet, <a href="/test.ppt">consectetur adipiscing</a> elit.</p>
		<p>Lorem ipsum dolor sit amet, <a href="/test.txt">consectetur adipiscing</a> elit.</p>
		<p>Lorem ipsum dolor sit amet, <a href="http://google.com/test.pdf">consectetur adipiscing</a> elit.</p>

		<h3>Content links</h3>

		$Content.RichLinks
		
		<hr />
		<h2 id="headings">Headings</h2>

		<h1>Heading 1 <a href="#">link</a></h1>
		<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam egestas, diam sit amet faucibus dictum, turpis libero porttitor diam, id pellentesque orci augue adipiscing risus. Nulla id lacus eros. Nam porttitor semper enim, sit amet vestibulum arcu adipiscing sed. Proin dignissim, ligula id rhoncus fringilla, nunc lectus luctus magna, vitae cursus neque arcu id risus. Phasellus eu risus quis mauris consectetur luctus. Sed facilisis diam mauris, a vulputate ligula. Sed nec purus mauris. Nulla euismod massa ac nisl gravida dictum. Fusce leo turpis, accumsan non ultricies sed, consectetur id dui. Suspendisse porttitor odio in ipsum dignissim mollis.</p>
		<p>Maecenas id dolor odio, eu elementum augue. Suspendisse odio nisi, aliquet eu tempus quis, rutrum quis sem. Nulla volutpat cursus dolor tempus consectetur. Proin faucibus, nulla at sodales interdum, lectus lectus aliquet risus, ut rutrum velit ligula eget ligula. Sed volutpat, elit non condimentum interdum, purus velit feugiat augue, id cursus felis dui sed diam. Proin in lobortis tellus. Nullam fringilla dapibus urna et pretium. Proin ac ligula ut purus luctus blandit ac ac lacus. Etiam molestie consectetur felis vitae mollis. Pellentesque semper bibendum lectus, molestie porta odio aliquet vehicula. Nunc et volutpat arcu. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Cras pretium mauris eu dolor molestie hendrerit. Duis lectus leo, gravida sed ullamcorper eu, pretium eu augue. Vestibulum eleifend, velit et dapibus dapibus, justo quam dictum diam, ac euismod augue ipsum ac leo. Aliquam erat volutpat. Morbi a mi ac urna tincidunt fermentum consectetur sit amet arcu.</p>

		<h2>Heading 2 <a href="#">link</a></h2>
		<p>Nam posuere augue et leo rutrum condimentum. Etiam a odio blandit odio aliquam hendrerit. In hac habitasse platea dictumst. Ut iaculis facilisis justo, a elementum felis imperdiet et. Vestibulum gravida volutpat condimentum. Aliquam condimentum, turpis eu tempus iaculis, neque risus cursus mauris, id lacinia elit eros ut diam. Curabitur lobortis pellentesque posuere. Aliquam magna eros, auctor vitae faucibus sit amet, ullamcorper a est. In hac habitasse platea dictumst. Vestibulum condimentum dui eu mi pretium adipiscing. Ut dictum vestibulum imperdiet.</p>

		<h3>Heading 3 <a href="#">link</a></h3>
		<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam egestas,  diam sit amet faucibus dictum, turpis libero porttitor diam, id pellentesque orci augue adipiscing risus. Nulla id lacus eros. Nam porttitor semper enim, sit amet vestibulum arcu adipiscing sed. Proin dignissim, ligula id rhoncus fringilla, nunc lectus luctus magna, vitae cursus neque arcu id risus. Phasellus eu risus quis mauris consectetur luctus. Sed facilisis diam mauris, a vulputate ligula. Sed nec purus mauris. Nulla euismod massa ac nisl gravida dictum. Fusce leo turpis, accumsan non ultricies sed, consectetur id dui. Suspendisse porttitor odio in ipsum dignissim mollis.</p>

		<h4>Heading 4 <a href="#">link</a></h4>
		<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam molestie malesuada diam eu rhoncus. Aliquam justo elit, convallis sed eleifend condimentum, ornare at nisl. Sed at leo euismod velit egestas ultricies vel quis purus. Morbi accumsan fermentum ipsum convallis rhoncus. Aenean tincidunt, neque sed consequat pulvinar, sem felis ornare lectus, ac mattis purus eros vitae mauris. Vestibulum in metus sed nisi imperdiet faucibus ac sit amet orci. Duis sit amet tincidunt libero. Duis risus purus, rutrum eget bibendum et, faucibus sed magna. Donec metus nunc, eleifend id sollicitudin vitae, blandit pulvinar nisl. Ut adipiscing pretium mi vel malesuada. Aliquam id quam lectus. Duis fringilla purus eget ipsum semper iaculis. Nullam nec mauris leo, eu posuere lacus. Maecenas turpis massa, egestas et vestibulum ac, rutrum nec sapien. Nam consequat varius enim, quis congue quam elementum vel. Proin eleifend lobortis arcu, quis dignissim orci consequat sed. Nunc vel libero in lorem hendrerit adipiscing sit amet non eros. Praesent eget eros est.</p>

		<h5>Heading 5 <a href="#">link</a></h5>
		<p>Duis lectus dolor, euismod eu adipiscing sit amet, fringilla ut augue. Pellentesque tristique condimentum iaculis. Aliquam erat volutpat. Donec nec sapien urna. Vivamus nec felis dui, ut porta mauris. In mollis porttitor ipsum, vitae elementum erat lacinia imperdiet. Sed ut sem ut erat convallis pretium. Vestibulum nec orci nec urna ullamcorper tincidunt. Integer at massa sit amet orci cursus varius. Curabitur eu ipsum massa, at condimentum justo.</p>

		<h6>Heading 6 <a href="#">link</a></h6>
		<p>Duis lectus dolor, euismod eu adipiscing sit amet, fringilla ut augue. Pellentesque tristique condimentum iaculis. Aliquam erat volutpat. Donec nec sapien urna. Vivamus nec felis dui, ut porta mauris. In mollis porttitor ipsum, vitae elementum erat lacinia imperdiet. Sed ut sem ut erat convallis pretium. Vestibulum nec orci nec urna ullamcorper tincidunt. Integer at massa sit amet orci cursus varius. Curabitur eu ipsum massa, at condimentum justo.</p>
		
		<hr />
		<h2 id="lists">Lists</h2>
		
		<h3>Unordered list (Short)</h3>

		<ul>
		   <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
		   <li>Aliquam tincidunt mauris eu risus.</li>
		   <li>Vestibulum auctor dapibus neque.</li>
		</ul>

		<h3>Unordered list (Long)</h3>

		<ul>
			<li>Morbi in sem quis dui placerat ornare. Pellentesque odio nisi, euismod in, pharetra a, ultricies in, diam. Sed arcu. Cras consequat.</li>
			<li>Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus.</li>
			<li>Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer ligula vulputate sem tristique cursus. Nam nulla quam, gravida non, commodo a, sodales sit amet, nisi.</li>
			<li>Pellentesque fermentum dolor. Aliquam quam lectus, facilisis auctor, ultrices ut, elementum vulputate, nunc.</li>
		</ul>

		<h3>Ordered list (Short)</h3>

		<ol>
			<li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
			<li>Aliquam tincidunt mauris eu risus.</li>
			<li>Vestibulum auctor dapibus neque.</li>
		</ol>

		<h3>Ordered list (Long)</h3>

		<ol>
			<li>Morbi in sem quis dui placerat ornare. Pellentesque odio nisi, euismod in, pharetra a, ultricies in, diam. Sed arcu. Cras consequat.</li>
			<li>Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus.</li>
			<li>Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer ligula vulputate sem tristique cursus. Nam nulla quam, gravida non, commodo a, sodales sit amet, nisi.</li>
			<li>Pellentesque fermentum dolor. Aliquam quam lectus, facilisis auctor, ultrices ut, elementum vulputate, nunc.</li>
		</ol>
		
		<h3>Ordered list (Nested)</h3>

		<ol>
			<li>Morbi in sem quis dui placerat ornare. Pellentesque odio nisi, euismod in, pharetra a, ultricies in, diam. Sed arcu. Cras consequat.</li>
			<li>Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer ligula vulputate sem tristique cursus. Nam nulla quam, gravida non, commodo a, sodales sit amet, nisi.</li>
			<ol>
				<li>Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus.</li>
				<ol>
					<li>Morbi in sem quis dui placerat ornare. Pellentesque odio nisi, euismod in, pharetra a, ultricies in, diam. Sed arcu. Cras consequat.</li>
					<li>Pellentesque fermentum dolor. Aliquam quam lectus, facilisis auctor, ultrices ut, elementum vulputate, nunc.</li>
					<ol>
						<li>Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer ligula vulputate sem tristique cursus. Nam nulla quam, gravida non, commodo a, sodales sit amet, nisi.</li>
						<ol>
							<li>Pellentesque fermentum dolor. Aliquam quam lectus, facilisis auctor, ultrices ut, elementum vulputate, nunc.</li>
						</ol>
					</ol>
					<li>Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus.</li>
				</ol>
			</ol>
		</ol>
		
		<hr />
		<h2 id="blockquote">Blockquote</h2>

		<blockquote>
			<p>Sed facilisis diam mauris, a vulputate ligula. Sed nec purus mauris. Nulla euismod massa ac nisl gravida dictum. Fusce leo turpis, accumsan non ultricies sed, consectetur id dui.</p>
		</blockquote>
		
		<hr />
		<h2 id="form">Form</h2>

		$TestForm

	</div>
</div>
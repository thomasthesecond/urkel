# jquery.urkel.js

Urkel is a jQuery plugin for creating simple accordions.

## Default Usage

JavaScript:

	$('.accordion').urkel();

HTML:

	<div class="accordion">

		<h3><a href="#id1">Title</a></h3>
		<div id="id1">
			<p>Content</p>
		</div>

		<h3><a href="#id2">Title</a></h3>
		<div id="id2">
			<p>Content</p>
		</div>

	</div>
	
CSS:

	h3.collapsed a:after{ content: "\25BC"; }
	h3.expanded a:after{ content: "\25B2"; }
	
## Custom Usage

JavaScript:

	$('.accordion').urkel({
		title : '.title',
		title_closed_class : 'closed',
		title_open_class : 'open',
		content : '.content',
		speed : 'fast'
	});
	
HTML:

	<div class="accordion">

		<div class="title"><a href="#id1">Title</a></div>
		<div class="content" id="id1">
			<p>Content</p>
		</div>

		<div class="title"><a href="#id2">Title</a></div>
		<div class="content" id="id2">
			<p>Content</p>
		</div>

	</div>
	
CSS:

	.title.closed a:after{ content: "\25BC"; }
	.title.open a:after{ content: "\25B2"; }
	
## Options

### title

The HTML element to be used as the title. Examples: h3, .title

Default value: h3

---

### title_closed_class

The class to be used on the **title** element when closed/collapsed. Simply a hook for styling.

Default value: collapsed

---

### title_open_class

The class to be used on the **title** element when opened/expanded. Simply a hook for styling.

Default value: expanded

---

### content

The HTML element to be used to wrap the content. Examples: div, .content

Default value: div

---

### speed

The speed (in milliseconds) at which the accordion slides open/closed. You can also use the values 'fast' or 'slow'.

Default value: 500

## Demo

[View Urkel in action](https://github.com/thomasthesecond/urkel).
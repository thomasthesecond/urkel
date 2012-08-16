/*
 * Urkel - jQuery plugin for creating simple accordions - http://youtu.be/G9aj4PTEl6Q :)
 *
 * Copyright (c) 2012 Thomas Cunningham (http://thomasthesecond.com)
 *
 * Licensed under the MIT license: http://www.opensource.org/licenses/mit-license.php
 *
 * Project home: 
 *
 * Version: 1.0
 *
 */

/* Sample markup:
 *
 * <div class="accordion">
 *	 <h3><a href="#id">Title</a></h3>
 *	 <div id="id"><p>...</p></div>
 * </div>
 *
 */

/* Usage:
 *
 * $('.accordion').urkel();
 *
 * $('.accordion').urkel({
 * 		title : 'h3',
 * 		closed_class : 'collapsed',
 * 		open_class : 'expanded',
 * 		content_wrapper : 'div',
 * 		speed : 500
 * });
 *
 */

(function($) {

	$.fn.urkel = function(options) {

		// Default settings
		var settings = $.extend({

			'title' : 'h3',
			'closed_class' : 'collapsed',
			'open_class' : 'expanded',
			'content_wrapper' : 'div',
			'speed' : 500

		}, options);

		// First, get the accordion element
		var element = this.selector; // .accordion

		// Set the content element
		var content = element + ' > ' + settings['content_wrapper']; // .accordion > div

		// For each accordion...
		$(element).each(function(){

			// add the closed class to the title element...
			$(settings['title']).addClass(settings['closed_class']); // h3.collapsed

			// and hide the content elements
			$(content).css('display', 'none'); // .accordion > div

		});

		// Set the click target element (anchor tag)
		var target = $(element).find(settings['title']).children('a'); // .accordion > h3 a

		// For each target element...
		target.each(function(){

			// get the href attribute
			var href = $(this).attr('href');

			// Create the click event
			$(this).click(function(){

				// Toggle between closed class and open class on all siblings of the targeted element's parent title element
				$(this).parent(settings['title']).toggleClass(settings['closed_class']).toggleClass(settings['open_class']).siblings(settings['title']);

				// If the title element has the open class, remove it and add the closed class
				if ($(this).parent(settings['title']).siblings(settings['title']).hasClass(settings['open_class'])){
					$(this).parent(settings['title']).siblings(settings['title']).removeClass(settings['open_class']).addClass(settings['closed_class']);
				}

				// Show the targeted element content and hide all others
				$(content + href).slideToggle(settings['speed']).siblings(settings['content_wrapper']).slideUp(settings['speed']);

				return false;

			});

		});

	};

})(jQuery);
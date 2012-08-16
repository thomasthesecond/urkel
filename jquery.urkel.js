/*
 * Urkel - jQuery plugin for creating simple accordions - http://youtu.be/G9aj4PTEl6Q :)
 *
 * Copyright (c) 2012 Thomas Cunningham (http://thomasthesecond.com)
 *
 * Licensed under the MIT license.
 * You're free to use this plugin as you wish, but please leave this comment block intact.
 *
 * Project home: http://thomasthesecond.github.com/urkel
 *
 * Version: 1.0
 *
 */

(function($) {

	$.fn.urkel = function(options) {

		// Default settings
		var settings = $.extend({

			'title' : 'h3',
			'title_closed_class' : 'collapsed',
			'title_open_class' : 'expanded',
			'content' : 'div',
			'speed' : 500

		}, options);

		// First, get the accordion element
		var element = this.selector; // .accordion

		// Set the content element
		var content = element + ' > ' + settings['content']; // .accordion > div

		// For each accordion...
		$(element).each(function(){

			// add the closed class to the title element...
			$(settings['title']).addClass(settings['title_closed_class']); // h3.collapsed

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
				$(this).parent(settings['title']).toggleClass(settings['title_closed_class']).toggleClass(settings['title_open_class']).siblings(settings['title']);

				// If the title element has the open class, remove it and add the closed class
				if ($(this).parent(settings['title']).siblings(settings['title']).hasClass(settings['title_open_class'])){
					$(this).parent(settings['title']).siblings(settings['title']).removeClass(settings['title_open_class']).addClass(settings['title_closed_class']);
				}

				// Show the targeted element content and hide all others
				$(content + href).slideToggle(settings['speed']).siblings(settings['content']).slideUp(settings['speed']);

				return false;

			});

		});

	};

})(jQuery);
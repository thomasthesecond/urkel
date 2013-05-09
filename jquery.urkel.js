/*
 * Urkel - jQuery plugin for creating simple accordions - http://youtu.be/G9aj4PTEl6Q :)
 *
 * Copyright (c) 2012-2013 Thomas Cunningham (http://thomasthesecond.com)
 *
 * Use this plugin however you please. However, please don't redistribute without giving proper credit.
 *
 * Project home: http://thomasthesecond.github.com/urkel
 *
 * Version: 1.2
 *
 */

(function($)
{

	var content,
		element,
		accordion,
		hasContainer = null;

	$.fn.urkel = function(options)
	{

		// Default settings
		var settings = $.extend(
		{

			'accordion' : true,
			'has_container': false,
			'container_element': null,
			'title' : 'h3',
			'title_closed_class' : 'collapsed',
			'title_open_class' : 'expanded',
			'content' : 'div',
			'speed' : 500

		}, options);

		// First, get the accordion element
		var element = this.selector; // .accordion

		// Find out if this is an accordion
		var accordion = settings['accordion'];

		// Find out if there is a container element {boolean}
		var hasContainer = settings['has_container'];

		// Set the content element
		if(hasContainer == false){
			content = element + ' > ' + settings['content']; // .accordion > div
		} else {
			content = element + ' > ' + settings['container_element'] + ' > ' + settings['content']; // .accordion > [element] > div
		}

		// var returnContentElement = (accordion == true) ? accordionTrue() : accordionFalse();

		// For each accordion element...
		$(element).each(function()
		{
			// add the closed class to the title element...
			$(settings['title']).addClass(settings['title_closed_class']); // h3.collapsed

			// and hide the content elements
			$(content).css('display', 'none'); // .accordion > div
		});

		// Set the click target element (anchor tag)
		var target = $(element).find(settings['title']).children('a'); // .accordion > h3 a

		// For each target element...
		target.each(function()
		{
			// get the href attribute
			var href = $(this).attr('href');

			// Create the click event
			$(this).click(function()
			{
				// Toggle between closed class and open class on all siblings of the targeted element's parent title element
				$(this)
					.parent(settings['title'])
					.toggleClass(settings['title_closed_class'])
					.toggleClass(settings['title_open_class'])
					.siblings(settings['title']);

				// If the title element has the open class, remove it and add the closed class
				if(hasContainer == false){
					if (accordion == true && $(this).parent(settings['title']).siblings(settings['title']).hasClass(settings['title_open_class']))
						$(this)
							.parent(settings['title'])
							.siblings(settings['title'])
							.removeClass(settings['title_open_class'])
							.addClass(settings['title_closed_class']);
				} else {
					if (accordion == true && $(this).parent(settings['title']).parent(settings['container_element']).siblings().children(settings['title']).hasClass(settings['title_open_class']))
						$(this)
							.parent(settings['title'])
							.parent(settings['container_element'])
							.siblings()
							.children(settings['title'])
							.removeClass(settings['title_open_class'])
							.addClass(settings['title_closed_class']);
				}

				// Find out if this is an accordion
				var returnAccordion = (accordion == true) ? accordionTrue(content, href) : accordionFalse(content, href);

				return false;

			});

		});

		/**
		 * @param {string} content
		 * @param {string} href
		 * @returns {void}
		 */
		function accordionTrue(content, href)
		{
			// Check for container element and then show the
			// targeted element content and hide all others
			if(hasContainer == false){
				$(content + href)
					.slideToggle(settings['speed'])
					.siblings(settings['content'])
					.slideUp(settings['speed']);
			} else {
				$(content + href)
					.slideToggle(settings['speed'])
					.parent(settings['container_element'])
					.siblings()
					.children(settings['content'])
					.slideUp(settings['speed']);
			}
		}

		/**
		 * @param {string} content
		 * @param {string} href
		 * @returns {void}
		 */
		function accordionFalse(content, href)
		{
			// Show the targeted element content but do not hide all others
			$(content + href).slideToggle(settings['speed']);
		}

	};

})(jQuery);
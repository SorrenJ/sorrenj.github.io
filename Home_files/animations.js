/**
 * @name		Animations Widget for Template Creator CK
 * @copyright	Copyright (C) 2017. All rights reserved.
 * @license		GNU General Public License version 2 or later; see LICENSE.txt
 * @author		Cedric Keiflin - https://www.template-creator.com - https://www.joomlack.fr - https://www.wp-pluginsck.com
 */

(function($) {
	var TCK_Animations = function(container, options) {
		var defaults = {
			replay: '0'			// replay animations
		};

		var opts = $.extend(defaults, options);
		var els = $(container);
		var $window = $(window);

		els.each(function() {
			var $this = $(this);
			$window = $(window);

			// function to be called whenever the window is scrolled or resized
			function update($this){
					var top = $this.offset().top;
					var pos = $window.scrollTop();
					var height = $this.height();
					var windowheight = $(window).height();

				// check if totally above or totally below viewport
				if (top + height < pos || top > pos + windowheight) {
					if (opts.replay == '1') $this.removeClass('animateck');
					return;
				}
				// animate the content if found
				if (top < pos || top > pos + windowheight-30) {
					// is out of the screen
				} else {
					$this.addClass('animateck');
				}
			}
			update($this);
			$window.bind('load scroll', function() { update($this); });
			// $window.scroll(function() { update($this); });
		});
	};
	window.TCK_Animations = TCK_Animations;
})(jQuery);
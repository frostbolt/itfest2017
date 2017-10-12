$(function() {

	windowHeight = jQuery(window).height();

	jQuery(window).resize(function(){
		windowHeight = jQuery(window).height();
	});


	jQuery(window).scroll(function(){
		if (jQuery(this).scrollTop() >= (windowHeight / 3)) {
			jQuery('.aside-container').addClass('scrolled');
			jQuery('.menu-toggle-btn .bar').addClass('scrolled');
		} else {
			jQuery('.aside-container').removeClass('scrolled');
			jQuery('.menu-toggle-btn .bar').removeClass('scrolled');
		}
	});

	jQuery('.menu-toggle-btn').click(function(){
		jQuery(this).toggleClass('opened');
		jQuery('aside').toggleClass('opened');
	});
});

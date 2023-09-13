(function($) {

	/*==========  background  ==========*/
	$("[data-background]").each(function() {
			$(this).css("background-image", "url(" + $(this).attr("data-background") + ")")
		})
		/*========== Active Hover  ==========*/
	$(".features__area-two-item").hover(function() {
		$(".features__area-two-item").removeClass("features__area-two-item-hover");
		$(this).addClass("features__area-two-item-hover");
	});
	// /*========== Responsive Menu  ==========*/
	$('.meanmenu-responsive').meanmenu({
		meanMenuContainer: '.responsive-menu',
		meanScreenWidth: '991',
		meanMenuOpen: '<span></span><span></span><span></span>',
		meanMenuClose: '<i class="fal fa-times"></i>'
	});
	// /*==========  Features  ==========*/
	var swiper = new Swiper(".features-slider", {
		slidesPerView: 4,
		loop: true,
		speed: 1500,
		breakpoints: {
			0: {
				slidesPerView: 1
			},
			640: {
				slidesPerView: 2
			},
			991: {
				slidesPerView: 3
			},
			1400: {
				slidesPerView: 4
			},
		}
	});
	$('.toggle-menu ul').hide();
	$(".toggle-menu a").click(function() {
		$(this).parent(".toggle-menu").children("ul").slideToggle("100");
		$(this).find(".change").toggleClass("fal fa-angle-up fal fa-angle-down");
	});
	/*========== FAQ  ==========*/
	$(".faq-item-card-header").click(function() {
		if($(this).next(".faq-item-card-header-content").hasClass("active")) {
			$(this).next(".faq-item-card-header-content").removeClass("active").slideUp()
			$(this).children("i").removeClass("fal fa-angle-up").addClass("fal fa-angle-down")
		} else {
			$(".faq-item-card-header-content").removeClass("active").slideUp()
			$(".faq-item-card .faq-item-card-header i").removeClass("fal fa-angle-up").addClass("fal fa-angle-down");
			$(this).next(".faq-item-card-header-content").addClass("active").slideDown()
			$(this).children("i").removeClass("fal fa-angle-down").addClass("fal fa-angle-up")
		}
	});
	/*==========  video-popup  ==========*/
	$('.video-popup').magnificPopup({
		type: 'iframe'
	});
	// /*==========  Brand  ==========*/
	var swiper = new Swiper(".sponsors-slider", {
		slidesPerView: 3,
		loop: true,
		speed: 1500,
		spaceBetween: 120,
		breakpoints: {
			0: {
				spaceBetween: 50,
				slidesPerView: 2
			},
			575: {
				spaceBetween: 80,
				slidesPerView: 3
			},
			992: {
				slidesPerView: 4
			},
			1200: {
				slidesPerView: 3
			},
		}
	});
	/*==========  Skill Bar  ==========*/
	if($('.skill__area-right-skill-item-bar').length) {
		$('.skill__area-right-skill-item-bar').appear(function() {
			var el = $(this);
			var percent = el.data('width');
			$(el).css('width', percent + '%');
		}, {
			accY: 0
		});
	};
	/*==========  Skill Bar Two  ==========*/
	if($('.skill__area-two-right-skill-item-bar').length) {
		$('.skill__area-two-right-skill-item-bar').appear(function() {
			var el = $(this);
			var percent = el.data('width');
			$(el).css('width', percent + '%');
		}, {
			accY: 0
		});
	};
	// /*==========  testimonial  ==========*/
	var swiper = new Swiper(".reviews", {
		slidesPerView: 1,
		loop: true,
		speed: 1000,
		spaceBetween: 30,
		pagination: {
			el: ".reviews-pagination",
			clickable: true,
		},
	});

	/*========== Active Hover  ==========*/
	$(".Services__area-item").hover(function() {
		$(".Services__area-item").removeClass("Services__area-item-hover");
		$(this).addClass("Services__area-item-hover");
	});
	/*========== Active Hover  ==========*/
	$(".features__area-item").hover(function() {
		$(".features__area-item").removeClass("features__area-item-hover");
		$(this).addClass("features__area-item-hover");
	});

	/*========== scroll to top  ==========*/
	var scrollPath = document.querySelector('.scroll-up path');
	var pathLength = scrollPath.getTotalLength();
	scrollPath.style.transition = scrollPath.style.WebkitTransition = 'none';
	scrollPath.style.strokeDasharray = pathLength + ' ' + pathLength;
	scrollPath.style.strokeDashoffset = pathLength;
	scrollPath.getBoundingClientRect();
	scrollPath.style.transition = scrollPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';
	var updatescroll = function() {
		var scroll = $(window).scrollTop();
		var height = $(document).height() - $(window).height();
		var scroll = pathLength - (scroll * pathLength / height);
		scrollPath.style.strokeDashoffset = scroll;
	}
	updatescroll();
	$(window).scroll(updatescroll);
	var offset = 50;
	var duration = 950;
	jQuery(window).on('scroll', function() {
		if(jQuery(this).scrollTop() > offset) {
			jQuery('.scroll-up').addClass('active-scroll');
		} else {
			jQuery('.scroll-up').removeClass('active-scroll');
		}
	});
	jQuery('.scroll-up').on('click', function(event) {
		event.preventDefault();
		jQuery('html, body').animate({
			scrollTop: 0
		}, duration);
		return false;
	});
})(jQuery);







popup = {
	init: function () {
		$('figure').click(function () {
			popup.open($(this));
		});

		$(document).on('click', '.popup img', function () {
			return false;
		}).on('click', '.popup', function () {
			popup.close();
		})
	},
	open: function ($figure) {
		$('.gallery').addClass('pop');
		$popup = $('<div class="popup" />').appendTo($('body'));
		$fig = $figure.clone().appendTo($('.popup'));
		$bg = $('<div class="bg" />').appendTo($('.popup'));
		$close = $('<div class="close"><svg><use xlink:href="#close"></use></svg></div>').appendTo($fig);
		$shadow = $('<div class="shadow" />').appendTo($fig);
		src = $('img', $fig).attr('src');
		$shadow.css({ backgroundImage: 'url(' + src + ')' });
		$bg.css({ backgroundImage: 'url(' + src + ')' });
		setTimeout(function () {
			$('.popup').addClass('pop');
		}, 10);
	},
	close: function () {
		$('.gallery, .popup').removeClass('pop');
		setTimeout(function () {
			$('.popup').remove()
		}, 100);
	}
}

popup.init()
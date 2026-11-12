(function($) {

	/*==========  background différé  ==========*/
	var backgrounds = document.querySelectorAll("[data-background]");
	if("IntersectionObserver" in window) {
		var backgroundObserver = new IntersectionObserver(function(entries) {
			entries.forEach(function(entry) {
				if(entry.isIntersecting) {
					entry.target.style.backgroundImage = "url(" + entry.target.getAttribute("data-background") + ")";
					backgroundObserver.unobserve(entry.target);
				}
			});
		}, {
			rootMargin: "300px 0px"
		});
		backgrounds.forEach(function(element) {
			backgroundObserver.observe(element);
		});
	} else {
		backgrounds.forEach(function(element) {
			element.style.backgroundImage = "url(" + element.getAttribute("data-background") + ")";
		});
	}
		/*========== Active Hover  ==========*/
	$(".features__area-two-item").hover(function() {
		$(".features__area-two-item").removeClass("features__area-two-item-hover");
		$(this).addClass("features__area-two-item-hover");
	});
	// /*========== Responsive Menu  ==========*/
	if($.fn.meanmenu) {
		$('.meanmenu-responsive').meanmenu({
			meanMenuContainer: '.responsive-menu',
			meanScreenWidth: '991',
			meanMenuOpen: '<span></span><span></span><span></span>',
			meanMenuClose: '<i class="fal fa-times"></i>'
		});
	}
	// /*==========  Features  ==========*/
	if($(".features-slider").length) {
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
	}
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
	if($.fn.magnificPopup) {
		$('.video-popup').magnificPopup({
			type: 'iframe'
		});
	}
	// /*==========  Brand  ==========*/
	if($(".sponsors-slider").length) {
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
	}
	/*==========  Skill Bar  ==========*/
	if($.fn.appear && $('.skill__area-right-skill-item-bar').length) {
		$('.skill__area-right-skill-item-bar').appear(function() {
			var el = $(this);
			var percent = el.data('width');
			$(el).css('width', percent + '%');
		}, {
			accY: 0
		});
	};
	/*==========  Skill Bar Two  ==========*/
	if($.fn.appear && $('.skill__area-two-right-skill-item-bar').length) {
		$('.skill__area-two-right-skill-item-bar').appear(function() {
			var el = $(this);
			var percent = el.data('width');
			$(el).css('width', percent + '%');
		}, {
			accY: 0
		});
	};
	// /*==========  testimonial  ==========*/
	if($(".reviews").length) {
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
	}

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
	if(scrollPath) {
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
	}

	/*========== Événements GA4 ==========*/
	function mlvTrack(name, params) {
		if(typeof gtag !== 'function') {
			return;
		}
		gtag('event', name, $.extend({
			transport_type: 'beacon'
		}, params));
	}

	$(document).on('click', 'a[href]', function() {
		var $link = $(this);
		var href = $link.attr('href') || '';
		var label = ($link.attr('aria-label') || $link.text() || '').replace(/\s+/g, ' ').trim();
		var params = {
			link_text: label,
			link_url: href
		};

		if(href.indexOf('tel:') === 0) {
			mlvTrack('appel_telephone', params);
			return;
		}

		if(href.indexOf('mailto:') === 0) {
			mlvTrack('courriel', params);
			return;
		}

		if($link.is('.theme-btn-1') && /(^|\/)contact\.html(?:[?#]|$)/.test(href)) {
			mlvTrack('demande_soumission', params);
			return;
		}

		var service = href.match(/(?:^|\/)services-([a-z]+)\.html(?:[?#]|$)/);
		if(service) {
			params.service = service[1];
			mlvTrack('clic_service', params);
		}
	});
})(jQuery);




popup = {
	lastFocus: null,
	init: function () {
		$('figure').click(function () {
			popup.open($(this));
		});

		// Ouverture au clavier depuis les figures de galerie (Entrée ou Espace)
		$('figure').on('keydown', function (event) {
			if (event.key === 'Enter' || event.key === ' ' || event.key === 'Spacebar') {
				event.preventDefault();
				popup.open($(this));
			}
		});

		$(document).on('click', '.popup img', function () {
			return false;
		}).on('click', '.popup', function () {
			popup.close();
		}).on('keydown', function (event) {
			if ((event.key === 'Escape' || event.key === 'Esc') && $('.popup').length) {
				popup.close();
			}
		});

		// Fermeture au clavier depuis le bouton de fermeture
		$(document).on('keydown', '.popup .close', function (event) {
			if (event.key === 'Enter' || event.key === ' ' || event.key === 'Spacebar') {
				event.preventDefault();
				popup.close();
			}
		});
	},
	open: function ($figure) {
		if ($('.popup').length) {
			return;
		}
		popup.lastFocus = $figure[0];
		$('.gallery').addClass('pop');
		$popup = $('<div class="popup" role="dialog" aria-modal="true" aria-label="Aperçu de la photo" />').appendTo($('body'));
		$fig = $figure.clone().removeAttr('tabindex role aria-label').appendTo($('.popup'));
		$img = $('img', $fig);
		// La visionneuse utilise toujours l'image pleine résolution (1024 px).
		// On reconstruit l'<img> pour éviter que le navigateur réutilise
		// la variante 640 px déjà chargée pour la vignette.
		var fullSrc = $figure.find('img').attr('src');
		var $fresh = $('<img>', { src: fullSrc, alt: $img.attr('alt') });
		if ($img.attr('width')) $fresh.attr('width', $img.attr('width'));
		if ($img.attr('height')) $fresh.attr('height', $img.attr('height'));
		$img.replaceWith($fresh);
		$img = $('img', $fig);
		src = fullSrc;
		$bg = $('<div class="bg" />').appendTo($('.popup'));
		$close = $('<div class="close" role="button" tabindex="0" aria-label="Fermer la visionneuse"></div>').appendTo($fig);
		$shadow = $('<div class="shadow" />').appendTo($fig);
		$shadow.css({ backgroundImage: 'url(' + src + ')' });
		$bg.css({ backgroundImage: 'url(' + src + ')' });
		setTimeout(function () {
			$('.popup').addClass('pop');
			$('.popup .close').trigger('focus');
		}, 10);
	},
	close: function () {
		$('.gallery, .popup').removeClass('pop');
		if (popup.lastFocus) {
			$(popup.lastFocus).trigger('focus');
			popup.lastFocus = null;
		}
		setTimeout(function () {
			$('.popup').remove()
		}, 100);
	}
}

popup.init()

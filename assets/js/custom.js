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
		// Accessibilité : libellé du bouton hamburger
		$('.meanmenu-reveal').attr('aria-label', 'Ouvrir le menu de navigation').attr('aria-expanded', 'false');
		$(document).on('click', '.meanmenu-reveal', function () {
			var expanded = $(this).hasClass('meanclose');
			$(this).attr('aria-expanded', expanded ? 'true' : 'false')
				.attr('aria-label', expanded ? 'Fermer le menu de navigation' : 'Ouvrir le menu de navigation');
		});
		// Fermer le menu mobile après un clic sur un lien
		$(document).on('click', '.mean-nav a', function () {
			var $reveal = $('.meanmenu-reveal.meanclose');
			if ($reveal.length) $reveal.trigger('click');
		});
		// Marquer la page active dans le menu mobile
		var current = window.location.pathname.split('/').pop() || 'index.html';
		$('.mean-nav a').each(function () {
			if ($(this).attr('href') === current) {
				$(this).addClass('mean-current');
			}
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
			if (event.key === 'ArrowLeft' && $('.popup').length) {
				event.preventDefault();
				popup.navigate(-1);
			}
			if (event.key === 'ArrowRight' && $('.popup').length) {
				event.preventDefault();
				popup.navigate(1);
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
		$popup = $('<div class="popup" role="dialog" aria-modal="true" aria-label="Apercu de la photo" />').appendTo($('body'));
		$fig = $figure.clone().removeAttr('tabindex role aria-label').appendTo($popup);
		$img = $('img', $fig);
		var fullSrc = $figure.find('img').attr('src');
		var $fresh = $('<img>', { src: fullSrc, alt: $img.attr('alt') });
		if ($img.attr('width')) $fresh.attr('width', $img.attr('width'));
		if ($img.attr('height')) $fresh.attr('height', $img.attr('height'));
		$img.replaceWith($fresh);
		$img = $('img', $fig);
		src = fullSrc;
		$bg = $('<div class="bg" />').appendTo($popup);
		$close = $('<div class="close" role="button" tabindex="0" aria-label="Fermer la visionneuse"></div>').appendTo($fig);
		$shadow = $('<div class="shadow" />').appendTo($fig);
		$shadow.css({ backgroundImage: 'url(' + src + ')' });
		$bg.css({ backgroundImage: 'url(' + src + ')' });

		// Navigation precedent / suivant
		var $figures = $('.gallery figure');
		popup.figures = $figures.toArray();
		popup.currentIndex = $figures.index($figure);
		if (popup.figures.length > 1) {
			$prev = $('<button type="button" class="popup-nav popup-prev" aria-label="Photo precedente">&#10094;</button>').appendTo($popup);
			$next = $('<button type="button" class="popup-nav popup-next" aria-label="Photo suivante">&#10095;</button>').appendTo($popup);
			$prev.on('click', function (e) { e.stopPropagation(); popup.navigate(-1); });
			$next.on('click', function (e) { e.stopPropagation(); popup.navigate(1); });
		}

		// Stockage des references pour la navigation
		popup.$popup = $popup;
		popup.$fig = $fig;
		popup.$img = $img;
		popup.$bg = $bg;
		popup.$shadow = $shadow;

		// Swipe tactile
		var touchStartX = 0;
		$popup.on('touchstart', function (e) {
			touchStartX = e.originalEvent.touches[0].clientX;
		}).on('touchend', function (e) {
			var dx = e.originalEvent.changedTouches[0].clientX - touchStartX;
			if (Math.abs(dx) > 50) {
				popup.navigate(dx > 0 ? -1 : 1);
			}
		});

		setTimeout(function () {
			$('.popup').addClass('pop');
			$('.popup .close').trigger('focus');
		}, 10);
	},
	navigate: function (dir) {
		if (!popup.figures || popup.figures.length < 2) return;
		var len = popup.figures.length;
		popup.currentIndex = (popup.currentIndex + dir + len) % len;
		var $figure = $(popup.figures[popup.currentIndex]);
		var $srcImg = $figure.find('img');
		var fullSrc = $srcImg.attr('src');
		var alt = $srcImg.attr('alt') || '';
		var caption = $figure.find('figcaption').html() || '';
		popup.$img.attr('src', fullSrc).attr('alt', alt);
		popup.$fig.find('figcaption').html(caption);
		popup.$shadow.css({ backgroundImage: 'url(' + fullSrc + ')' });
		popup.$bg.css({ backgroundImage: 'url(' + fullSrc + ')' });
		popup.lastFocus = popup.figures[popup.currentIndex];
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


// MOB-26 : evenements GA4 mobile
(function () {
  if (typeof gtag !== 'function') return;
  var tracked = { 25: false, 50: false, 75: false, 100: false };
  function trackScroll() {
    var h = document.documentElement;
    var scrolled = (h.scrollTop + window.innerHeight) / h.scrollHeight * 100;
    for (var t of [25, 50, 75, 100]) {
      if (!tracked[t] && scrolled >= t) {
        tracked[t] = true;
        gtag('event', 'scroll_depth', { percent: t, transport_type: 'beacon' });
      }
    }
  }
  window.addEventListener('scroll', trackScroll, { passive: true });

  var start = Date.now();
  window.addEventListener('pagehide', function () {
    var seconds = Math.round((Date.now() - start) / 1000);
    gtag('event', 'temps_sur_page', { seconds: seconds, transport_type: 'beacon' });
  });

  $(document).on('click', '.mean-nav a', function () {
    gtag('event', 'clic_menu_mobile', { link_url: $(this).attr('href') || '', transport_type: 'beacon' });
  });
})();

popup.init()

// Service worker (cache offline) — enregistrement différé
if ('serviceWorker' in navigator) {
  window.addEventListener('load', function () {
    navigator.serviceWorker.register('/sw.js').catch(function () {});
  });
}

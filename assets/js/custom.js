(function () {
	'use strict';

	/*==========  background différé  ==========*/
	var backgrounds = document.querySelectorAll("[data-background]");
	if ("IntersectionObserver" in window) {
		var backgroundObserver = new IntersectionObserver(function (entries) {
			entries.forEach(function (entry) {
				if (entry.isIntersecting) {
					entry.target.style.backgroundImage = "url(" + entry.target.getAttribute("data-background") + ")";
					backgroundObserver.unobserve(entry.target);
				}
			});
		}, {
			rootMargin: "300px 0px"
		});
		backgrounds.forEach(function (element) {
			backgroundObserver.observe(element);
		});
	} else {
		backgrounds.forEach(function (element) {
			element.style.backgroundImage = "url(" + element.getAttribute("data-background") + ")";
		});
	}

	/*========== Active Hover  ==========*/
	document.querySelectorAll(".features__area-two-item").forEach(function (item) {
		item.addEventListener("mouseenter", function () {
			document.querySelectorAll(".features__area-two-item").forEach(function (el) {
				el.classList.remove("features__area-two-item-hover");
			});
			item.classList.add("features__area-two-item-hover");
		});
	});

	/*========== Menu mobile maison (LIB-05 / LIB-06) ==========*/
	var MLV_MENU_BREAKPOINT = 991;
	function mlvSyncMobileMenu() {
		var container = document.querySelector(".responsive-menu");
		var target = document.querySelector(".meanmenu-responsive");
		if (!container || !target) {
			return;
		}
		var isMobile = (window.innerWidth || document.documentElement.clientWidth) <= MLV_MENU_BREAKPOINT;
		var hasContainer = container.classList.contains("mean-container");

		if (!isMobile) {
			if (hasContainer) {
				container.querySelectorAll(".mean-bar, .mean-push").forEach(function (el) {
					el.remove();
				});
				container.classList.remove("mean-container");
				target.style.display = "";
			}
			return;
		}

		if (hasContainer) {
			return;
		}

		container.classList.add("mean-container");
		var bar = document.createElement("div");
		bar.className = "mean-bar";

		var reveal = document.createElement("a");
		reveal.href = "#nav";
		reveal.className = "meanmenu-reveal";
		reveal.setAttribute("aria-label", "Ouvrir le menu de navigation");
		reveal.setAttribute("aria-expanded", "false");
		reveal.innerHTML = "<span></span><span></span><span></span>";

		var nav = document.createElement("nav");
		nav.className = "mean-nav";
		nav.innerHTML = target.innerHTML;

		bar.appendChild(reveal);
		bar.appendChild(nav);
		container.insertBefore(bar, container.firstChild);
		target.style.display = "none";

		nav.querySelectorAll("ul").forEach(function (ul) {
			ul.style.display = "none";
		});

		nav.querySelectorAll("li").forEach(function (li) {
			if (li.querySelector(":scope > ul") && !li.querySelector(":scope > .mean-expand")) {
				var exp = document.createElement("a");
				exp.className = "mean-expand";
				exp.href = "#";
				exp.setAttribute("aria-label", "Déplier le sous-menu");
				exp.textContent = "+";
				li.appendChild(exp);
			}
		});

		var topUl = nav.querySelector("ul");
		if (topUl && topUl.lastElementChild) {
			topUl.lastElementChild.classList.add("mean-last");
		}

		var current = window.location.pathname.split("/").pop() || "index.html";
		nav.querySelectorAll("a").forEach(function (a) {
			if (a.getAttribute("href") === current) {
				a.classList.add("mean-current");
			}
		});
	}

	document.addEventListener("click", function (e) {
		var reveal = e.target.closest(".meanmenu-reveal");
		if (reveal) {
			e.preventDefault();
			var container = reveal.closest(".mean-container");
			var ul = container ? container.querySelector(".mean-nav ul") : null;
			if (reveal.classList.contains("meanclose")) {
				if (ul) {
					ul.style.display = "none";
				}
				if (container) {
					container.querySelectorAll(".mean-expand").forEach(function (exp) {
						exp.classList.remove("mean-clicked");
						exp.textContent = "+";
					});
					container.querySelectorAll(".mean-nav ul ul").forEach(function (sub) {
						sub.style.display = "none";
					});
				}
			} else if (ul) {
				ul.style.display = "block";
			}
			reveal.classList.toggle("meanclose");
			var expanded = reveal.classList.contains("meanclose");
			reveal.setAttribute("aria-expanded", expanded ? "true" : "false");
			reveal.setAttribute("aria-label", expanded ? "Fermer le menu de navigation" : "Ouvrir le menu de navigation");
			return;
		}

		var expand = e.target.closest(".mean-expand");
		if (expand) {
			e.preventDefault();
			var li = expand.parentElement;
			var ulSub = expand.previousElementSibling;
			if (!ulSub || ulSub.tagName !== "UL") {
				ulSub = li ? li.querySelector(":scope > ul") : null;
			}
			if (expand.classList.contains("mean-clicked")) {
				expand.classList.remove("mean-clicked");
				expand.textContent = "+";
				if (ulSub) {
					ulSub.style.display = "none";
				}
			} else {
				expand.classList.add("mean-clicked");
				expand.textContent = "-";
				if (ulSub) {
					ulSub.style.display = "block";
				}
			}
			return;
		}

		var navLink = e.target.closest(".mean-nav a:not(.mean-expand)");
		if (navLink) {
			var revealOpen = document.querySelector(".meanmenu-reveal.meanclose");
			if (revealOpen) {
				revealOpen.click();
			}
		}
	});

	mlvSyncMobileMenu();
	window.addEventListener("resize", mlvSyncMobileMenu);

	/*==========  Features  ==========*/
	if (document.querySelector(".features-slider") && window.Swiper) {
		new Swiper(".features-slider", {
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
				}
			}
		});
	}

	/*========== Menu accordéon  ==========*/
	document.querySelectorAll(".toggle-menu").forEach(function (tm) {
		var ul = tm.querySelector("ul");
		var a = tm.querySelector("a");
		if (ul) {
			ul.style.display = "none";
		}
		if (a) {
			a.addEventListener("click", function (e) {
				e.preventDefault();
				if (ul) {
					ul.style.display = (ul.style.display === "none" || ul.style.display === "") ? "block" : "none";
				}
				var change = a.querySelector(".change");
				if (change) {
					if (change.classList.contains("fa-angle-up")) {
						change.classList.remove("fa-angle-up");
						change.classList.add("fa-angle-down");
					} else {
						change.classList.remove("fa-angle-down");
						change.classList.add("fa-angle-up");
					}
				}
			});
		}
	});

	/*========== FAQ  ==========*/
	document.querySelectorAll(".faq-item-card-header").forEach(function (header) {
		header.addEventListener("click", function () {
			var content = header.nextElementSibling;
			if (!content) {
				return;
			}
			if (content.classList.contains("active")) {
				content.classList.remove("active");
				content.style.display = "none";
				var i = header.querySelector("i");
				if (i) {
					i.classList.remove("fa-angle-up");
					i.classList.add("fa-angle-down");
				}
			} else {
				document.querySelectorAll(".faq-item-card-header-content").forEach(function (c) {
					c.classList.remove("active");
					c.style.display = "none";
				});
				document.querySelectorAll(".faq-item-card .faq-item-card-header i").forEach(function (ic) {
					ic.classList.remove("fa-angle-up");
					ic.classList.add("fa-angle-down");
				});
				content.classList.add("active");
				content.style.display = "block";
				var i2 = header.querySelector("i");
				if (i2) {
					i2.classList.remove("fa-angle-down");
					i2.classList.add("fa-angle-up");
				}
			}
		});
	});

	/*==========  video-popup  ==========*/
	/* Magnific Popup supprimé (LIB-02) : lien direct YouTube */

	/*==========  Brand  ==========*/
	if (document.querySelector(".sponsors-slider") && window.Swiper) {
		new Swiper(".sponsors-slider", {
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
				}
			}
		});
	}

	/*==========  Skill Bar  ==========*/
	var skillBars = document.querySelectorAll(".skill__area-right-skill-item-bar, .skill__area-two-right-skill-item-bar");
	if (skillBars.length) {
		if ("IntersectionObserver" in window) {
			var skillObserver = new IntersectionObserver(function (entries) {
				entries.forEach(function (entry) {
					if (entry.isIntersecting) {
						var el = entry.target;
						var percent = el.getAttribute("data-width");
						el.style.width = (percent || 0) + "%";
						skillObserver.unobserve(el);
					}
				});
			}, { threshold: 0.1 });
			skillBars.forEach(function (el) {
				skillObserver.observe(el);
			});
		} else {
			skillBars.forEach(function (el) {
				var percent = el.getAttribute("data-width");
				el.style.width = (percent || 0) + "%";
			});
		}
	}

	/*==========  testimonial  ==========*/
	if (document.querySelector(".reviews") && window.Swiper) {
		new Swiper(".reviews", {
			slidesPerView: 1,
			loop: true,
			speed: 1000,
			spaceBetween: 30,
			pagination: {
				el: ".reviews-pagination",
				clickable: true
			}
		});
	}

	/*========== Active Hover  ==========*/
	document.querySelectorAll(".Services__area-item").forEach(function (item) {
		item.addEventListener("mouseenter", function () {
			document.querySelectorAll(".Services__area-item").forEach(function (el) {
				el.classList.remove("Services__area-item-hover");
			});
			item.classList.add("Services__area-item-hover");
		});
	});
	document.querySelectorAll(".features__area-item").forEach(function (item) {
		item.addEventListener("mouseenter", function () {
			document.querySelectorAll(".features__area-item").forEach(function (el) {
				el.classList.remove("features__area-item-hover");
			});
			item.classList.add("features__area-item-hover");
		});
	});

	/*========== scroll to top  ==========*/
	var scrollPath = document.querySelector(".scroll-up path");
	if (scrollPath) {
		var pathLength = scrollPath.getTotalLength();
		scrollPath.style.transition = scrollPath.style.WebkitTransition = "none";
		scrollPath.style.strokeDasharray = pathLength + " " + pathLength;
		scrollPath.style.strokeDashoffset = pathLength;
		scrollPath.getBoundingClientRect();
		scrollPath.style.transition = scrollPath.style.WebkitTransition = "stroke-dashoffset 10ms linear";
		var updatescroll = function () {
			var scroll = window.pageYOffset || document.documentElement.scrollTop || 0;
			var height = (document.documentElement.scrollHeight || document.body.scrollHeight) - window.innerHeight;
			var offset = height ? pathLength - (scroll * pathLength / height) : pathLength;
			scrollPath.style.strokeDashoffset = offset;
		};
		updatescroll();
		window.addEventListener("scroll", updatescroll);
		window.addEventListener("scroll", function () {
			var scrollUp = document.querySelector(".scroll-up");
			if (!scrollUp) {
				return;
			}
			if ((window.pageYOffset || document.documentElement.scrollTop || 0) > 50) {
				scrollUp.classList.add("active-scroll");
			} else {
				scrollUp.classList.remove("active-scroll");
			}
		});
		var scrollBtn = document.querySelector(".scroll-up");
		if (scrollBtn) {
			scrollBtn.addEventListener("click", function (e) {
				e.preventDefault();
				window.scrollTo({ top: 0, behavior: "smooth" });
				return false;
			});
		}
	}

	/*========== Événements GA4 ==========*/
	function mlvTrack(name, params) {
		if (typeof gtag !== "function") {
			return;
		}
		gtag("event", name, Object.assign({ transport_type: "beacon" }, params || {}));
	}

	document.addEventListener("click", function (e) {
		var link = e.target.closest("a[href]");
		if (!link) {
			return;
		}
		var href = link.getAttribute("href") || "";
		var label = (link.getAttribute("aria-label") || link.textContent || "").replace(/\s+/g, " ").trim();
		var params = {
			link_text: label,
			link_url: href
		};

		if (href.indexOf("tel:") === 0) {
			mlvTrack("appel_telephone", params);
			return;
		}

		if (href.indexOf("mailto:") === 0) {
			mlvTrack("courriel", params);
			return;
		}

		if (link.classList.contains("theme-btn-1") && /(^|\/)contact\.html(?:[?#]|$)/.test(href)) {
			mlvTrack("demande_soumission", params);
			return;
		}

		var service = href.match(/(?:^|\/)services-([a-z]+)\.html(?:[?#]|$)/);
		if (service) {
			params.service = service[1];
			mlvTrack("clic_service", params);
		}
	});

	document.addEventListener("submit", function (e) {
		var form = e.target;
		if (!form || !form.getAttribute) {
			return;
		}
		var action = form.getAttribute("action") || "";
		if (action.indexOf("formspree.io") === -1) {
			return;
		}
		var serviceField = form.querySelector('[name="service"]');
		mlvTrack("formulaire_envoye", {
			form_id: form.classList.contains("mlv-contact__form") ? "contact" : "autre",
			service: serviceField ? serviceField.value : ""
		});
	});

	/*========== Visionneuse de galerie ==========*/
	var popup = {
		lastFocus: null,
		figures: [],
		currentIndex: 0,
		popupEl: null,
		fig: null,
		img: null,
		bg: null,
		shadow: null,

		init: function () {
			document.querySelectorAll("figure").forEach(function (figure) {
				figure.addEventListener("click", function () {
					popup.open(figure);
				});
				figure.addEventListener("keydown", function (e) {
					if (e.key === "Enter" || e.key === " " || e.key === "Spacebar") {
						e.preventDefault();
						popup.open(figure);
					}
				});
			});

			document.addEventListener("click", function (e) {
				var img = e.target.closest(".popup img");
				if (img) {
					e.stopPropagation();
					return;
				}
				var popupRoot = e.target.closest(".popup");
				if (popupRoot) {
					popup.close();
				}
			});

			document.addEventListener("keydown", function (e) {
				if ((e.key === "Escape" || e.key === "Esc") && document.querySelector(".popup")) {
					popup.close();
				}
				if (e.key === "ArrowLeft" && document.querySelector(".popup")) {
					e.preventDefault();
					popup.navigate(-1);
				}
				if (e.key === "ArrowRight" && document.querySelector(".popup")) {
					e.preventDefault();
					popup.navigate(1);
				}
				var closeBtn = e.target.closest ? e.target.closest(".popup .close") : null;
				if (closeBtn && (e.key === "Enter" || e.key === " " || e.key === "Spacebar")) {
					e.preventDefault();
					popup.close();
				}
			});
		},

		open: function (figure) {
			if (document.querySelector(".popup")) {
				return;
			}
			this.lastFocus = figure;

			var gallery = document.querySelector(".gallery");
			if (gallery) {
				gallery.classList.add("pop");
			}

			var popupEl = document.createElement("div");
			popupEl.className = "popup";
			popupEl.setAttribute("role", "dialog");
			popupEl.setAttribute("aria-modal", "true");
			popupEl.setAttribute("aria-label", "Apercu de la photo");
			document.body.appendChild(popupEl);

			var fig = figure.cloneNode(true);
			fig.removeAttribute("tabindex");
			fig.removeAttribute("role");
			fig.removeAttribute("aria-label");
			popupEl.appendChild(fig);

			var img = fig.querySelector("img");
			var fullSrc = (figure.querySelector("img") || {}).getAttribute ? figure.querySelector("img").getAttribute("src") : "";
			var fresh = document.createElement("img");
			fresh.src = fullSrc;
			fresh.alt = img ? (img.getAttribute("alt") || "") : "";
			if (img && img.getAttribute("width")) {
				fresh.setAttribute("width", img.getAttribute("width"));
			}
			if (img && img.getAttribute("height")) {
				fresh.setAttribute("height", img.getAttribute("height"));
			}
			if (img) {
				img.replaceWith(fresh);
			}

			var bg = document.createElement("div");
			bg.className = "bg";
			popupEl.appendChild(bg);

			var close = document.createElement("div");
			close.className = "close";
			close.setAttribute("role", "button");
			close.setAttribute("tabindex", "0");
			close.setAttribute("aria-label", "Fermer la visionneuse");
			fig.appendChild(close);

			var shadow = document.createElement("div");
			shadow.className = "shadow";
			fig.appendChild(shadow);

			shadow.style.backgroundImage = "url(" + fullSrc + ")";
			bg.style.backgroundImage = "url(" + fullSrc + ")";

			var figures = Array.prototype.slice.call(document.querySelectorAll(".gallery figure"));
			this.figures = figures;
			this.currentIndex = figures.indexOf(figure);

			if (figures.length > 1) {
				var prev = document.createElement("button");
				prev.type = "button";
				prev.className = "popup-nav popup-prev";
				prev.setAttribute("aria-label", "Photo precedente");
				prev.innerHTML = "&#10094;";

				var next = document.createElement("button");
				next.type = "button";
				next.className = "popup-nav popup-next";
				next.setAttribute("aria-label", "Photo suivante");
				next.innerHTML = "&#10095;";

				popupEl.appendChild(prev);
				popupEl.appendChild(next);

				prev.addEventListener("click", function (e) {
					e.stopPropagation();
					popup.navigate(-1);
				});
				next.addEventListener("click", function (e) {
					e.stopPropagation();
					popup.navigate(1);
				});
			}

			this.popupEl = popupEl;
			this.fig = fig;
			this.img = fresh;
			this.bg = bg;
			this.shadow = shadow;

			var touchStartX = 0;
			popupEl.addEventListener("touchstart", function (e) {
				if (e.touches && e.touches.length) {
					touchStartX = e.touches[0].clientX;
				}
			});
			popupEl.addEventListener("touchend", function (e) {
				if (e.changedTouches && e.changedTouches.length) {
					var dx = e.changedTouches[0].clientX - touchStartX;
					if (Math.abs(dx) > 50) {
						popup.navigate(dx > 0 ? -1 : 1);
					}
				}
			});

			var self = this;
			setTimeout(function () {
				popupEl.classList.add("pop");
				close.focus();
			}, 10);
		},

		navigate: function (dir) {
			if (!this.figures || this.figures.length < 2) {
				return;
			}
			var len = this.figures.length;
			this.currentIndex = (this.currentIndex + dir + len) % len;
			var figure = this.figures[this.currentIndex];
			var srcImg = figure.querySelector("img");
			var fullSrc = srcImg ? srcImg.getAttribute("src") : "";
			var alt = srcImg ? (srcImg.getAttribute("alt") || "") : "";
			var caption = "";
			var figcaption = figure.querySelector("figcaption");
			if (figcaption) {
				caption = figcaption.innerHTML || "";
			}
			if (this.img) {
				this.img.src = fullSrc;
				this.img.alt = alt;
			}
			var targetCaption = this.fig ? this.fig.querySelector("figcaption") : null;
			if (targetCaption) {
				targetCaption.innerHTML = caption;
			}
			if (this.shadow) {
				this.shadow.style.backgroundImage = "url(" + fullSrc + ")";
			}
			if (this.bg) {
				this.bg.style.backgroundImage = "url(" + fullSrc + ")";
			}
			this.lastFocus = this.figures[this.currentIndex];
		},

		close: function () {
			var gallery = document.querySelector(".gallery");
			if (gallery) {
				gallery.classList.remove("pop");
			}
			var popupRoot = document.querySelector(".popup");
			if (popupRoot) {
				popupRoot.classList.remove("pop");
			}
			if (this.lastFocus) {
				try {
					this.lastFocus.focus();
				} catch (e) { }
				this.lastFocus = null;
			}
			setTimeout(function () {
				var p = document.querySelector(".popup");
				if (p) {
					p.remove();
				}
			}, 100);
		}
	};

	/*========== Événements GA4 mobile ==========*/
	(function () {
		if (typeof gtag !== "function") {
			return;
		}
		var tracked = { 25: false, 50: false, 75: false, 100: false };
		function trackScroll() {
			var h = document.documentElement;
			var scrolled = (h.scrollTop + window.innerHeight) / (h.scrollHeight || 1) * 100;
			[25, 50, 75, 100].forEach(function (t) {
				if (!tracked[t] && scrolled >= t) {
					tracked[t] = true;
					gtag("event", "scroll_depth", { percent: t, transport_type: "beacon" });
				}
			});
		}
		window.addEventListener("scroll", trackScroll, { passive: true });

		var start = Date.now();
		window.addEventListener("pagehide", function () {
			var seconds = Math.round((Date.now() - start) / 1000);
			gtag("event", "temps_sur_page", { seconds: seconds, transport_type: "beacon" });
		});

		document.addEventListener("click", function (e) {
			var link = e.target.closest(".mean-nav a");
			if (!link) {
				return;
			}
			gtag("event", "clic_menu_mobile", { link_url: link.getAttribute("href") || "", transport_type: "beacon" });
		});
	})();

	popup.init();

	// Service worker (cache offline) — enregistrement différé
	if ("serviceWorker" in navigator) {
		window.addEventListener("load", function () {
			navigator.serviceWorker.register("/sw.js").catch(function () { });
		});
	}
})();

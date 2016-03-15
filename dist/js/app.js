// Avoid `console` errors in browsers that lack a console
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

// Place any jQuery/helper plugins in here.

/*
 * bxSlider v4.2.5
 * Copyright 2013-2015 Steven Wanderski
 * Written while drinking Belgian ales and listening to jazz

 * Licensed under MIT (http://opensource.org/licenses/MIT)
 */

!function (a) { var b = { mode: "horizontal", slideSelector: "", infiniteLoop: !0, hideControlOnEnd: !1, speed: 500, easing: null, slideMargin: 0, startSlide: 0, randomStart: !1, captions: !1, ticker: !1, tickerHover: !1, adaptiveHeight: !1, adaptiveHeightSpeed: 500, video: !1, useCSS: !0, preloadImages: "visible", responsive: !0, slideZIndex: 50, wrapperClass: "bx-wrapper", touchEnabled: !0, swipeThreshold: 50, oneToOneTouch: !0, preventDefaultSwipeX: !0, preventDefaultSwipeY: !1, ariaLive: !0, ariaHidden: !0, keyboardEnabled: !1, pager: !0, pagerType: "full", pagerShortSeparator: " / ", pagerSelector: null, buildPager: null, pagerCustom: null, controls: !0, nextText: "Next", prevText: "Prev", nextSelector: null, prevSelector: null, autoControls: !1, startText: "Start", stopText: "Stop", autoControlsCombine: !1, autoControlsSelector: null, auto: !1, pause: 4e3, autoStart: !0, autoDirection: "next", stopAutoOnClick: !1, autoHover: !1, autoDelay: 0, autoSlideForOnePage: !1, minSlides: 1, maxSlides: 1, moveSlides: 0, slideWidth: 0, shrinkItems: !1, onSliderLoad: function () { return !0 }, onSlideBefore: function () { return !0 }, onSlideAfter: function () { return !0 }, onSlideNext: function () { return !0 }, onSlidePrev: function () { return !0 }, onSliderResize: function () { return !0 } }; a.fn.bxSlider = function (c) { if (0 === this.length) return this; if (this.length > 1) return this.each(function () { a(this).bxSlider(c) }), this; var d = {}, e = this, f = a(window).width(), g = a(window).height(); if (!a(e).data("bxSlider")) { var h = function () { a(e).data("bxSlider") || (d.settings = a.extend({}, b, c), d.settings.slideWidth = parseInt(d.settings.slideWidth), d.children = e.children(d.settings.slideSelector), d.children.length < d.settings.minSlides && (d.settings.minSlides = d.children.length), d.children.length < d.settings.maxSlides && (d.settings.maxSlides = d.children.length), d.settings.randomStart && (d.settings.startSlide = Math.floor(Math.random() * d.children.length)), d.active = { index: d.settings.startSlide }, d.carousel = d.settings.minSlides > 1 || d.settings.maxSlides > 1 ? !0 : !1, d.carousel && (d.settings.preloadImages = "all"), d.minThreshold = d.settings.minSlides * d.settings.slideWidth + (d.settings.minSlides - 1) * d.settings.slideMargin, d.maxThreshold = d.settings.maxSlides * d.settings.slideWidth + (d.settings.maxSlides - 1) * d.settings.slideMargin, d.working = !1, d.controls = {}, d.interval = null, d.animProp = "vertical" === d.settings.mode ? "top" : "left", d.usingCSS = d.settings.useCSS && "fade" !== d.settings.mode && function () { for (var a = document.createElement("div"), b = ["WebkitPerspective", "MozPerspective", "OPerspective", "msPerspective"], c = 0; c < b.length; c++) if (void 0 !== a.style[b[c]]) return d.cssPrefix = b[c].replace("Perspective", "").toLowerCase(), d.animProp = "-" + d.cssPrefix + "-transform", !0; return !1 }(), "vertical" === d.settings.mode && (d.settings.maxSlides = d.settings.minSlides), e.data("origStyle", e.attr("style")), e.children(d.settings.slideSelector).each(function () { a(this).data("origStyle", a(this).attr("style")) }), j()) }, j = function () { var b = d.children.eq(d.settings.startSlide); e.wrap('<div class="' + d.settings.wrapperClass + '"><div class="bx-viewport"></div></div>'), d.viewport = e.parent(), d.settings.ariaLive && !d.settings.ticker && d.viewport.attr("aria-live", "polite"), d.loader = a('<div class="bx-loading" />'), d.viewport.prepend(d.loader), e.css({ width: "horizontal" === d.settings.mode ? 1e3 * d.children.length + 215 + "%" : "auto", position: "relative" }), d.usingCSS && d.settings.easing ? e.css("-" + d.cssPrefix + "-transition-timing-function", d.settings.easing) : d.settings.easing || (d.settings.easing = "swing"), d.viewport.css({ width: "100%", overflow: "hidden", position: "relative" }), d.viewport.parent().css({ maxWidth: n() }), d.settings.pager || d.settings.controls || d.viewport.parent().css({ margin: "0 auto 0px" }), d.children.css({ "float": "horizontal" === d.settings.mode ? "left" : "none", listStyle: "none", position: "relative" }), d.children.css("width", o()), "horizontal" === d.settings.mode && d.settings.slideMargin > 0 && d.children.css("marginRight", d.settings.slideMargin), "vertical" === d.settings.mode && d.settings.slideMargin > 0 && d.children.css("marginBottom", d.settings.slideMargin), "fade" === d.settings.mode && (d.children.css({ position: "absolute", zIndex: 0, display: "none" }), d.children.eq(d.settings.startSlide).css({ zIndex: d.settings.slideZIndex, display: "block" })), d.controls.el = a('<div class="bx-controls" />'), d.settings.captions && y(), d.active.last = d.settings.startSlide === q() - 1, d.settings.video && e.fitVids(), ("all" === d.settings.preloadImages || d.settings.ticker) && (b = d.children), d.settings.ticker ? d.settings.pager = !1 : (d.settings.controls && w(), d.settings.auto && d.settings.autoControls && x(), d.settings.pager && v(), (d.settings.controls || d.settings.autoControls || d.settings.pager) && d.viewport.after(d.controls.el)), k(b, l) }, k = function (b, c) { var d = b.find('img:not([src=""]), iframe').length, e = 0; return 0 === d ? void c() : void b.find('img:not([src=""]), iframe').each(function () { a(this).one("load error", function () { ++e === d && c() }).each(function () { this.complete && a(this).load() }) }) }, l = function () { if (d.settings.infiniteLoop && "fade" !== d.settings.mode && !d.settings.ticker) { var b = "vertical" === d.settings.mode ? d.settings.minSlides : d.settings.maxSlides, c = d.children.slice(0, b).clone(!0).addClass("bx-clone"), f = d.children.slice(-b).clone(!0).addClass("bx-clone"); d.settings.ariaHidden && (c.attr("aria-hidden", !0), f.attr("aria-hidden", !0)), e.append(c).prepend(f) } d.loader.remove(), s(), "vertical" === d.settings.mode && (d.settings.adaptiveHeight = !0), d.viewport.height(m()), e.redrawSlider(), d.settings.onSliderLoad.call(e, d.active.index), d.initialized = !0, d.settings.responsive && a(window).bind("resize", S), d.settings.auto && d.settings.autoStart && (q() > 1 || d.settings.autoSlideForOnePage) && I(), d.settings.ticker && J(), d.settings.pager && E(d.settings.startSlide), d.settings.controls && H(), d.settings.touchEnabled && !d.settings.ticker && N(), d.settings.keyboardEnabled && !d.settings.ticker && a(document).keydown(M) }, m = function () { var b = 0, c = a(); if ("vertical" === d.settings.mode || d.settings.adaptiveHeight) if (d.carousel) { var e = 1 === d.settings.moveSlides ? d.active.index : d.active.index * r(); for (c = d.children.eq(e), i = 1; i <= d.settings.maxSlides - 1; i++) c = e + i >= d.children.length ? c.add(d.children.eq(i - 1)) : c.add(d.children.eq(e + i)) } else c = d.children.eq(d.active.index); else c = d.children; return "vertical" === d.settings.mode ? (c.each(function (c) { b += a(this).outerHeight() }), d.settings.slideMargin > 0 && (b += d.settings.slideMargin * (d.settings.minSlides - 1))) : b = Math.max.apply(Math, c.map(function () { return a(this).outerHeight(!1) }).get()), "border-box" === d.viewport.css("box-sizing") ? b += parseFloat(d.viewport.css("padding-top")) + parseFloat(d.viewport.css("padding-bottom")) + parseFloat(d.viewport.css("border-top-width")) + parseFloat(d.viewport.css("border-bottom-width")) : "padding-box" === d.viewport.css("box-sizing") && (b += parseFloat(d.viewport.css("padding-top")) + parseFloat(d.viewport.css("padding-bottom"))), b }, n = function () { var a = "100%"; return d.settings.slideWidth > 0 && (a = "horizontal" === d.settings.mode ? d.settings.maxSlides * d.settings.slideWidth + (d.settings.maxSlides - 1) * d.settings.slideMargin : d.settings.slideWidth), a }, o = function () { var a = d.settings.slideWidth, b = d.viewport.width(); if (0 === d.settings.slideWidth || d.settings.slideWidth > b && !d.carousel || "vertical" === d.settings.mode) a = b; else if (d.settings.maxSlides > 1 && "horizontal" === d.settings.mode) { if (b > d.maxThreshold) return a; b < d.minThreshold ? a = (b - d.settings.slideMargin * (d.settings.minSlides - 1)) / d.settings.minSlides : d.settings.shrinkItems && (a = Math.floor((b + d.settings.slideMargin) / Math.ceil((b + d.settings.slideMargin) / (a + d.settings.slideMargin)) - d.settings.slideMargin)) } return a }, p = function () { var a = 1, b = null; return "horizontal" === d.settings.mode && d.settings.slideWidth > 0 ? d.viewport.width() < d.minThreshold ? a = d.settings.minSlides : d.viewport.width() > d.maxThreshold ? a = d.settings.maxSlides : (b = d.children.first().width() + d.settings.slideMargin, a = Math.floor((d.viewport.width() + d.settings.slideMargin) / b)) : "vertical" === d.settings.mode && (a = d.settings.minSlides), a }, q = function () { var a = 0, b = 0, c = 0; if (d.settings.moveSlides > 0) if (d.settings.infiniteLoop) a = Math.ceil(d.children.length / r()); else for (; b < d.children.length;)++a, b = c + p(), c += d.settings.moveSlides <= p() ? d.settings.moveSlides : p(); else a = Math.ceil(d.children.length / p()); return a }, r = function () { return d.settings.moveSlides > 0 && d.settings.moveSlides <= p() ? d.settings.moveSlides : p() }, s = function () { var a, b, c; d.children.length > d.settings.maxSlides && d.active.last && !d.settings.infiniteLoop ? "horizontal" === d.settings.mode ? (b = d.children.last(), a = b.position(), t(-(a.left - (d.viewport.width() - b.outerWidth())), "reset", 0)) : "vertical" === d.settings.mode && (c = d.children.length - d.settings.minSlides, a = d.children.eq(c).position(), t(-a.top, "reset", 0)) : (a = d.children.eq(d.active.index * r()).position(), d.active.index === q() - 1 && (d.active.last = !0), void 0 !== a && ("horizontal" === d.settings.mode ? t(-a.left, "reset", 0) : "vertical" === d.settings.mode && t(-a.top, "reset", 0))) }, t = function (b, c, f, g) { var h, i; d.usingCSS ? (i = "vertical" === d.settings.mode ? "translate3d(0, " + b + "px, 0)" : "translate3d(" + b + "px, 0, 0)", e.css("-" + d.cssPrefix + "-transition-duration", f / 1e3 + "s"), "slide" === c ? (e.css(d.animProp, i), 0 !== f ? e.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function (b) { a(b.target).is(e) && (e.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"), F()) }) : F()) : "reset" === c ? e.css(d.animProp, i) : "ticker" === c && (e.css("-" + d.cssPrefix + "-transition-timing-function", "linear"), e.css(d.animProp, i), 0 !== f ? e.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function (b) { a(b.target).is(e) && (e.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"), t(g.resetValue, "reset", 0), K()) }) : (t(g.resetValue, "reset", 0), K()))) : (h = {}, h[d.animProp] = b, "slide" === c ? e.animate(h, f, d.settings.easing, function () { F() }) : "reset" === c ? e.css(d.animProp, b) : "ticker" === c && e.animate(h, f, "linear", function () { t(g.resetValue, "reset", 0), K() })) }, u = function () { for (var b = "", c = "", e = q(), f = 0; e > f; f++) c = "", d.settings.buildPager && a.isFunction(d.settings.buildPager) || d.settings.pagerCustom ? (c = d.settings.buildPager(f), d.pagerEl.addClass("bx-custom-pager")) : (c = f + 1, d.pagerEl.addClass("bx-default-pager")), b += '<div class="bx-pager-item"><a href="" data-slide-index="' + f + '" class="bx-pager-link">' + c + "</a></div>"; d.pagerEl.html(b) }, v = function () { d.settings.pagerCustom ? d.pagerEl = a(d.settings.pagerCustom) : (d.pagerEl = a('<div class="bx-pager" />'), d.settings.pagerSelector ? a(d.settings.pagerSelector).html(d.pagerEl) : d.controls.el.addClass("bx-has-pager").append(d.pagerEl), u()), d.pagerEl.on("click touchend", "a", D) }, w = function () { d.controls.next = a('<a class="bx-next" href="">' + d.settings.nextText + "</a>"), d.controls.prev = a('<a class="bx-prev" href="">' + d.settings.prevText + "</a>"), d.controls.next.bind("click touchend", z), d.controls.prev.bind("click touchend", A), d.settings.nextSelector && a(d.settings.nextSelector).append(d.controls.next), d.settings.prevSelector && a(d.settings.prevSelector).append(d.controls.prev), d.settings.nextSelector || d.settings.prevSelector || (d.controls.directionEl = a('<div class="bx-controls-direction" />'), d.controls.directionEl.append(d.controls.prev).append(d.controls.next), d.controls.el.addClass("bx-has-controls-direction").append(d.controls.directionEl)) }, x = function () { d.controls.start = a('<div class="bx-controls-auto-item"><a class="bx-start" href="">' + d.settings.startText + "</a></div>"), d.controls.stop = a('<div class="bx-controls-auto-item"><a class="bx-stop" href="">' + d.settings.stopText + "</a></div>"), d.controls.autoEl = a('<div class="bx-controls-auto" />'), d.controls.autoEl.on("click", ".bx-start", B), d.controls.autoEl.on("click", ".bx-stop", C), d.settings.autoControlsCombine ? d.controls.autoEl.append(d.controls.start) : d.controls.autoEl.append(d.controls.start).append(d.controls.stop), d.settings.autoControlsSelector ? a(d.settings.autoControlsSelector).html(d.controls.autoEl) : d.controls.el.addClass("bx-has-controls-auto").append(d.controls.autoEl), G(d.settings.autoStart ? "stop" : "start") }, y = function () { d.children.each(function (b) { var c = a(this).find("img:first").attr("title"); void 0 !== c && ("" + c).length && a(this).append('<div class="bx-caption"><span>' + c + "</span></div>") }) }, z = function (a) { a.preventDefault(), d.controls.el.hasClass("disabled") || (d.settings.auto && d.settings.stopAutoOnClick && e.stopAuto(), e.goToNextSlide()) }, A = function (a) { a.preventDefault(), d.controls.el.hasClass("disabled") || (d.settings.auto && d.settings.stopAutoOnClick && e.stopAuto(), e.goToPrevSlide()) }, B = function (a) { e.startAuto(), a.preventDefault() }, C = function (a) { e.stopAuto(), a.preventDefault() }, D = function (b) { var c, f; b.preventDefault(), d.controls.el.hasClass("disabled") || (d.settings.auto && d.settings.stopAutoOnClick && e.stopAuto(), c = a(b.currentTarget), void 0 !== c.attr("data-slide-index") && (f = parseInt(c.attr("data-slide-index")), f !== d.active.index && e.goToSlide(f))) }, E = function (b) { var c = d.children.length; return "short" === d.settings.pagerType ? (d.settings.maxSlides > 1 && (c = Math.ceil(d.children.length / d.settings.maxSlides)), void d.pagerEl.html(b + 1 + d.settings.pagerShortSeparator + c)) : (d.pagerEl.find("a").removeClass("active"), void d.pagerEl.each(function (c, d) { a(d).find("a").eq(b).addClass("active") })) }, F = function () { if (d.settings.infiniteLoop) { var a = ""; 0 === d.active.index ? a = d.children.eq(0).position() : d.active.index === q() - 1 && d.carousel ? a = d.children.eq((q() - 1) * r()).position() : d.active.index === d.children.length - 1 && (a = d.children.eq(d.children.length - 1).position()), a && ("horizontal" === d.settings.mode ? t(-a.left, "reset", 0) : "vertical" === d.settings.mode && t(-a.top, "reset", 0)) } d.working = !1, d.settings.onSlideAfter.call(e, d.children.eq(d.active.index), d.oldIndex, d.active.index) }, G = function (a) { d.settings.autoControlsCombine ? d.controls.autoEl.html(d.controls[a]) : (d.controls.autoEl.find("a").removeClass("active"), d.controls.autoEl.find("a:not(.bx-" + a + ")").addClass("active")) }, H = function () { 1 === q() ? (d.controls.prev.addClass("disabled"), d.controls.next.addClass("disabled")) : !d.settings.infiniteLoop && d.settings.hideControlOnEnd && (0 === d.active.index ? (d.controls.prev.addClass("disabled"), d.controls.next.removeClass("disabled")) : d.active.index === q() - 1 ? (d.controls.next.addClass("disabled"), d.controls.prev.removeClass("disabled")) : (d.controls.prev.removeClass("disabled"), d.controls.next.removeClass("disabled"))) }, I = function () { if (d.settings.autoDelay > 0) { setTimeout(e.startAuto, d.settings.autoDelay) } else e.startAuto(), a(window).focus(function () { e.startAuto() }).blur(function () { e.stopAuto() }); d.settings.autoHover && e.hover(function () { d.interval && (e.stopAuto(!0), d.autoPaused = !0) }, function () { d.autoPaused && (e.startAuto(!0), d.autoPaused = null) }) }, J = function () { var b, c, f, g, h, i, j, k, l = 0; "next" === d.settings.autoDirection ? e.append(d.children.clone().addClass("bx-clone")) : (e.prepend(d.children.clone().addClass("bx-clone")), b = d.children.first().position(), l = "horizontal" === d.settings.mode ? -b.left : -b.top), t(l, "reset", 0), d.settings.pager = !1, d.settings.controls = !1, d.settings.autoControls = !1, d.settings.tickerHover && (d.usingCSS ? (g = "horizontal" === d.settings.mode ? 4 : 5, d.viewport.hover(function () { c = e.css("-" + d.cssPrefix + "-transform"), f = parseFloat(c.split(",")[g]), t(f, "reset", 0) }, function () { k = 0, d.children.each(function (b) { k += "horizontal" === d.settings.mode ? a(this).outerWidth(!0) : a(this).outerHeight(!0) }), h = d.settings.speed / k, i = "horizontal" === d.settings.mode ? "left" : "top", j = h * (k - Math.abs(parseInt(f))), K(j) })) : d.viewport.hover(function () { e.stop() }, function () { k = 0, d.children.each(function (b) { k += "horizontal" === d.settings.mode ? a(this).outerWidth(!0) : a(this).outerHeight(!0) }), h = d.settings.speed / k, i = "horizontal" === d.settings.mode ? "left" : "top", j = h * (k - Math.abs(parseInt(e.css(i)))), K(j) })), K() }, K = function (a) { var b, c, f, g = a ? a : d.settings.speed, h = { left: 0, top: 0 }, i = { left: 0, top: 0 }; "next" === d.settings.autoDirection ? h = e.find(".bx-clone").first().position() : i = d.children.first().position(), b = "horizontal" === d.settings.mode ? -h.left : -h.top, c = "horizontal" === d.settings.mode ? -i.left : -i.top, f = { resetValue: c }, t(b, "ticker", g, f) }, L = function (b) { var c = a(window), d = { top: c.scrollTop(), left: c.scrollLeft() }, e = b.offset(); return d.right = d.left + c.width(), d.bottom = d.top + c.height(), e.right = e.left + b.outerWidth(), e.bottom = e.top + b.outerHeight(), !(d.right < e.left || d.left > e.right || d.bottom < e.top || d.top > e.bottom) }, M = function (a) { var b = document.activeElement.tagName.toLowerCase(), c = "input|textarea", d = new RegExp(b, ["i"]), f = d.exec(c); if (null == f && L(e)) { if (39 === a.keyCode) return z(a), !1; if (37 === a.keyCode) return A(a), !1 } }, N = function () { d.touch = { start: { x: 0, y: 0 }, end: { x: 0, y: 0 } }, d.viewport.bind("touchstart MSPointerDown pointerdown", O), d.viewport.on("click", ".bxslider a", function (a) { d.viewport.hasClass("click-disabled") && (a.preventDefault(), d.viewport.removeClass("click-disabled")) }) }, O = function (a) { if (d.controls.el.addClass("disabled"), d.working) a.preventDefault(), d.controls.el.removeClass("disabled"); else { d.touch.originalPos = e.position(); var b = a.originalEvent, c = "undefined" != typeof b.changedTouches ? b.changedTouches : [b]; d.touch.start.x = c[0].pageX, d.touch.start.y = c[0].pageY, d.viewport.get(0).setPointerCapture && (d.pointerId = b.pointerId, d.viewport.get(0).setPointerCapture(d.pointerId)), d.viewport.bind("touchmove MSPointerMove pointermove", Q), d.viewport.bind("touchend MSPointerUp pointerup", R), d.viewport.bind("MSPointerCancel pointercancel", P) } }, P = function (a) { t(d.touch.originalPos.left, "reset", 0), d.controls.el.removeClass("disabled"), d.viewport.unbind("MSPointerCancel pointercancel", P), d.viewport.unbind("touchmove MSPointerMove pointermove", Q), d.viewport.unbind("touchend MSPointerUp pointerup", R), d.viewport.get(0).releasePointerCapture && d.viewport.get(0).releasePointerCapture(d.pointerId) }, Q = function (a) { var b = a.originalEvent, c = "undefined" != typeof b.changedTouches ? b.changedTouches : [b], e = Math.abs(c[0].pageX - d.touch.start.x), f = Math.abs(c[0].pageY - d.touch.start.y), g = 0, h = 0; 3 * e > f && d.settings.preventDefaultSwipeX ? a.preventDefault() : 3 * f > e && d.settings.preventDefaultSwipeY && a.preventDefault(), "fade" !== d.settings.mode && d.settings.oneToOneTouch && ("horizontal" === d.settings.mode ? (h = c[0].pageX - d.touch.start.x, g = d.touch.originalPos.left + h) : (h = c[0].pageY - d.touch.start.y, g = d.touch.originalPos.top + h), t(g, "reset", 0)) }, R = function (a) { d.viewport.unbind("touchmove MSPointerMove pointermove", Q), d.controls.el.removeClass("disabled"); var b = a.originalEvent, c = "undefined" != typeof b.changedTouches ? b.changedTouches : [b], f = 0, g = 0; d.touch.end.x = c[0].pageX, d.touch.end.y = c[0].pageY, "fade" === d.settings.mode ? (g = Math.abs(d.touch.start.x - d.touch.end.x), g >= d.settings.swipeThreshold && (d.touch.start.x > d.touch.end.x ? e.goToNextSlide() : e.goToPrevSlide(), e.stopAuto())) : ("horizontal" === d.settings.mode ? (g = d.touch.end.x - d.touch.start.x, f = d.touch.originalPos.left) : (g = d.touch.end.y - d.touch.start.y, f = d.touch.originalPos.top), !d.settings.infiniteLoop && (0 === d.active.index && g > 0 || d.active.last && 0 > g) ? t(f, "reset", 200) : Math.abs(g) >= d.settings.swipeThreshold ? (0 > g ? e.goToNextSlide() : e.goToPrevSlide(), e.stopAuto()) : t(f, "reset", 200)), d.viewport.unbind("touchend MSPointerUp pointerup", R), d.viewport.get(0).releasePointerCapture && d.viewport.get(0).releasePointerCapture(d.pointerId) }, S = function (b) { if (d.initialized) if (d.working) window.setTimeout(S, 10); else { var c = a(window).width(), h = a(window).height(); (f !== c || g !== h) && (f = c, g = h, e.redrawSlider(), d.settings.onSliderResize.call(e, d.active.index)) } }, T = function (a) { var b = p(); d.settings.ariaHidden && !d.settings.ticker && (d.children.attr("aria-hidden", "true"), d.children.slice(a, a + b).attr("aria-hidden", "false")) }, U = function (a) { return 0 > a ? d.settings.infiniteLoop ? q() - 1 : d.active.index : a >= q() ? d.settings.infiniteLoop ? 0 : d.active.index : a }; return e.goToSlide = function (b, c) { var f, g, h, i, j = !0, k = 0, l = { left: 0, top: 0 }, n = null; if (d.oldIndex = d.active.index, d.active.index = U(b), !d.working && d.active.index !== d.oldIndex) { if (d.working = !0, j = d.settings.onSlideBefore.call(e, d.children.eq(d.active.index), d.oldIndex, d.active.index), "undefined" != typeof j && !j) return d.active.index = d.oldIndex, void (d.working = !1); "next" === c ? d.settings.onSlideNext.call(e, d.children.eq(d.active.index), d.oldIndex, d.active.index) || (j = !1) : "prev" === c && (d.settings.onSlidePrev.call(e, d.children.eq(d.active.index), d.oldIndex, d.active.index) || (j = !1)), d.active.last = d.active.index >= q() - 1, (d.settings.pager || d.settings.pagerCustom) && E(d.active.index), d.settings.controls && H(), "fade" === d.settings.mode ? (d.settings.adaptiveHeight && d.viewport.height() !== m() && d.viewport.animate({ height: m() }, d.settings.adaptiveHeightSpeed), d.children.filter(":visible").fadeOut(d.settings.speed).css({ zIndex: 0 }), d.children.eq(d.active.index).css("zIndex", d.settings.slideZIndex + 1).fadeIn(d.settings.speed, function () { a(this).css("zIndex", d.settings.slideZIndex), F() })) : (d.settings.adaptiveHeight && d.viewport.height() !== m() && d.viewport.animate({ height: m() }, d.settings.adaptiveHeightSpeed), !d.settings.infiniteLoop && d.carousel && d.active.last ? "horizontal" === d.settings.mode ? (n = d.children.eq(d.children.length - 1), l = n.position(), k = d.viewport.width() - n.outerWidth()) : (f = d.children.length - d.settings.minSlides, l = d.children.eq(f).position()) : d.carousel && d.active.last && "prev" === c ? (g = 1 === d.settings.moveSlides ? d.settings.maxSlides - r() : (q() - 1) * r() - (d.children.length - d.settings.maxSlides), n = e.children(".bx-clone").eq(g), l = n.position()) : "next" === c && 0 === d.active.index ? (l = e.find("> .bx-clone").eq(d.settings.maxSlides).position(), d.active.last = !1) : b >= 0 && (i = b * parseInt(r()), l = d.children.eq(i).position()), "undefined" != typeof l ? (h = "horizontal" === d.settings.mode ? -(l.left - k) : -l.top, t(h, "slide", d.settings.speed)) : d.working = !1), d.settings.ariaHidden && T(d.active.index * r()) } }, e.goToNextSlide = function () { if (d.settings.infiniteLoop || !d.active.last) { var a = parseInt(d.active.index) + 1; e.goToSlide(a, "next") } }, e.goToPrevSlide = function () { if (d.settings.infiniteLoop || 0 !== d.active.index) { var a = parseInt(d.active.index) - 1; e.goToSlide(a, "prev") } }, e.startAuto = function (a) { d.interval || (d.interval = setInterval(function () { "next" === d.settings.autoDirection ? e.goToNextSlide() : e.goToPrevSlide() }, d.settings.pause), d.settings.autoControls && a !== !0 && G("stop")) }, e.stopAuto = function (a) { d.interval && (clearInterval(d.interval), d.interval = null, d.settings.autoControls && a !== !0 && G("start")) }, e.getCurrentSlide = function () { return d.active.index }, e.getCurrentSlideElement = function () { return d.children.eq(d.active.index) }, e.getSlideElement = function (a) { return d.children.eq(a) }, e.getSlideCount = function () { return d.children.length }, e.isWorking = function () { return d.working }, e.redrawSlider = function () { d.children.add(e.find(".bx-clone")).outerWidth(o()), d.viewport.css("height", m()), d.settings.ticker || s(), d.active.last && (d.active.index = q() - 1), d.active.index >= q() && (d.active.last = !0), d.settings.pager && !d.settings.pagerCustom && (u(), E(d.active.index)), d.settings.ariaHidden && T(d.active.index * r()) }, e.destroySlider = function () { d.initialized && (d.initialized = !1, a(".bx-clone", this).remove(), d.children.each(function () { void 0 !== a(this).data("origStyle") ? a(this).attr("style", a(this).data("origStyle")) : a(this).removeAttr("style") }), void 0 !== a(this).data("origStyle") ? this.attr("style", a(this).data("origStyle")) : a(this).removeAttr("style"), a(this).unwrap().unwrap(), d.controls.el && d.controls.el.remove(), d.controls.next && d.controls.next.remove(), d.controls.prev && d.controls.prev.remove(), d.pagerEl && d.settings.controls && !d.settings.pagerCustom && d.pagerEl.remove(), a(".bx-caption", this).remove(), d.controls.autoEl && d.controls.autoEl.remove(), clearInterval(d.interval), d.settings.responsive && a(window).unbind("resize", S), d.settings.keyboardEnabled && a(document).unbind("keydown", M), a(this).removeData("bxSlider")) }, e.reloadSlider = function (b) { void 0 !== b && (c = b), e.destroySlider(), h(), a(e).data("bxSlider", this) }, h(), a(e).data("bxSlider", this), this } } }(jQuery);

/* Simple Lightbox
	By Andre Rinas, www.andreknieriem.de
	Available for use under the MIT License
*/
!function (e, t, n, i) { "use strict"; e.fn.simpleLightbox = function (i) { var i = e.extend({ overlay: !0, spinner: !0, nav: !0, navText: ["&lsaquo;", "&rsaquo;"], captions: !0, captionDelay: 0, captionSelector: "img", captionType: "attr", captionsData: "title", captionPosition: "bottom", close: !0, closeText: "×", showCounter: !0, fileExt: "png|jpg|jpeg|gif", animationSlide: !0, animationSpeed: 250, preloading: !0, enableKeyboard: !0, loop: !0, docClose: !0, swipeTolerance: 50, className: "simple-lightbox", widthRatio: .8, heightRatio: .9, disableRightClick: !1, disableScroll: !0, alertError: !0, alertErrorMessage: "Image not found, next image will be loaded" }, i), a = (t.navigator.pointerEnabled || t.navigator.msPointerEnabled, 0), o = e(), s = function () { var e = n.body || n.documentElement, e = e.style; return "" == e.WebkitTransition ? "-webkit-" : "" == e.MozTransition ? "-moz-" : "" == e.OTransition ? "-o-" : "" == e.transition ? "" : !1 }, l = !1, r = [], d = this, s = s(), p = s !== !1 ? !0 : !1, c = "simplelb", g = e("<div>").addClass("sl-overlay"), h = e("<button>").addClass("sl-close").html(i.closeText), f = e("<div>").addClass("sl-spinner").html("<div></div>"), u = e("<div>").addClass("sl-navigation").html('<button class="sl-prev">' + i.navText[0] + '</button><button class="sl-next">' + i.navText[1] + "</button>"), m = e("<div>").addClass("sl-counter").html('<span class="sl-current"></span>/<span class="sl-total"></span>'), v = !1, x = 0, b = e(), y = e("<div>").addClass("sl-caption pos-" + i.captionPosition), w = e("<div>").addClass("sl-wrapper").addClass(i.className).html('<div class="sl-image"></div>'), E = function (t) { return i.fileExt ? "a" == e(t).prop("tagName").toLowerCase() && new RegExp(".(" + i.fileExt + ")$", "i").test(e(t).attr("href")) : !0 }, T = function () { b = e(".sl-image"), i.close && h.appendTo(w), i.showCounter && d.length > 1 && (m.appendTo(w), m.find(".sl-total").text(d.length)), i.nav && u.appendTo(w), i.spinner && f.appendTo(w) }, S = function (t) { t.trigger(e.Event("show.simplelightbox")), i.disableScroll && R("hide"), w.appendTo("body"), i.overlay && g.appendTo(e("body")), v = !0, x = d.index(t), o = e("<img/>").hide().attr("src", t.attr("href")), -1 == r.indexOf(t.attr("href")) && r.push(t.attr("href")), e(".sl-image").html("").attr("style", ""), o.appendTo(e(".sl-image")), g.fadeIn("fast"), e(".sl-close").fadeIn("fast"), f.show(), u.fadeIn("fast"), e(".sl-wrapper .sl-counter .sl-current").text(x + 1), m.fadeIn("fast"), C(), i.preloading && q(), setTimeout(function () { t.trigger(e.Event("shown.simplelightbox")) }, i.animationSpeed) }, C = function (n) { if (o.length) { var a = new Image, s = e(t).width() * i.widthRatio, c = e(t).height() * i.heightRatio; a.src = o.attr("src"), e(a).bind("error", function (t) { return d.eq(x).trigger(e.Event("error.simplelightbox")), v = !1, l = !0, f.hide(), i.alertError ? (alert(i.alertErrorMessage), void D(1 == n || -1 == n ? n : 1)) : void 0 }), a.onload = function () { "undefined" != typeof n && d.eq(x).trigger(e.Event("changed.simplelightbox")).trigger(e.Event((1 === n ? "nextDone" : "prevDone") + ".simplelightbox")), -1 == r.indexOf(o.attr("src")) && r.push(o.attr("src")); var g = a.width, h = a.height; if (g > s || h > c) { var u = g / h > s / c ? g / s : h / c; g /= u, h /= u } e(".sl-image").css({ top: (e(t).height() - h) / 2 + "px", left: (e(t).width() - g) / 2 + "px" }), f.hide(), o.css({ width: g + "px", height: h + "px" }).fadeIn("fast"), l = !0; var m = "self" == i.captionSelector ? d.eq(x) : d.eq(x).find(i.captionSelector); if ("data" == i.captionType) var b = m.data(i.captionsData); else if ("text" == i.captionType) var b = m.html(); else var b = m.prop(i.captionsData); if (i.loop || (0 == x && e(".sl-prev").hide(), x >= d.length - 1 && e(".sl-next").hide(), x > 0 && x < d.length - 1 && e(".sl-prev, .sl-next").show()), 1 == d.length && e(".sl-prev, .sl-next").hide(), 1 == n || -1 == n) { var y = { opacity: 1 }; i.animationSlide && (p ? (I(0, 100 * n + "px"), setTimeout(function () { I(i.animationSpeed / 1e3, "0px"), 50 })) : y.left = parseInt(e(".sl-image").css("left")) + 100 * n + "px"), e(".sl-image").animate(y, i.animationSpeed, function () { v = !1, k(b) }) } else v = !1, k(b) } } }, k = function (t) { "" != t && "undefined" != typeof t && i.captions && y.html(t).hide().appendTo(e(".sl-image")).delay(i.captionDelay).fadeIn("fast") }, I = function (t, n) { var i = {}; i[s + "transform"] = "translateX(" + n + ")", i[s + "transition"] = s + "transform " + t + "s linear", e(".sl-image").css(i) }, q = function () { var t = 0 > x + 1 ? d.length - 1 : x + 1 >= d.length - 1 ? 0 : x + 1, n = 0 > x - 1 ? d.length - 1 : x - 1 >= d.length - 1 ? 0 : x - 1; e("<img />").attr("src", d.eq(t).attr("href")).load(function () { -1 == r.indexOf(e(this).attr("src")) && r.push(e(this).attr("src")), d.eq(x).trigger(e.Event("nextImageLoaded.simplelightbox")) }), e("<img />").attr("src", d.eq(n).attr("href")).load(function () { -1 == r.indexOf(e(this).attr("src")) && r.push(e(this).attr("src")), d.eq(x).trigger(e.Event("prevImageLoaded.simplelightbox")) }) }, D = function (t) { d.eq(x).trigger(e.Event("change.simplelightbox")).trigger(e.Event((1 === t ? "next" : "prev") + ".simplelightbox")); var n = x + t; if (!(v || (0 > n || n >= d.length) && 0 == i.loop)) { x = 0 > n ? d.length - 1 : n > d.length - 1 ? 0 : n, e(".sl-wrapper .sl-counter .sl-current").text(x + 1); var s = { opacity: 0 }; i.animationSlide && (p ? I(i.animationSpeed / 1e3, -100 * t - a + "px") : s.left = parseInt(e(".sl-image").css("left")) + -100 * t + "px"), e(".sl-image").animate(s, i.animationSpeed, function () { setTimeout(function () { var n = d.eq(x); o.attr("src", n.attr("href")), -1 == r.indexOf(n.attr("href")) && f.show(), e(".sl-caption").remove(), C(t), i.preloading && q() }, 100) }) } }, M = function () { if (!v) { var t = d.eq(x), n = !1; t.trigger(e.Event("close.simplelightbox")), e(".sl-image img, .sl-overlay, .sl-close, .sl-navigation, .sl-image .sl-caption, .sl-counter").fadeOut("fast", function () { i.disableScroll && R("show"), e(".sl-wrapper, .sl-overlay").remove(), n || t.trigger(e.Event("closed.simplelightbox")), n = !0 }), o = e(), l = !1, v = !1 } }, R = function (i) { if ("hide" == i) { var a = t.innerWidth; if (!a) { var o = n.documentElement.getBoundingClientRect(); a = o.right - Math.abs(o.left) } if (n.body.clientWidth < a) { var s = n.createElement("div"), l = parseInt(e("body").css("padding-right"), 10); s.className = "sl-scrollbar-measure", e("body").append(s); var r = s.offsetWidth - s.clientWidth; e(n.body)[0].removeChild(s), e("body").data("padding", l), r > 0 && e("body").css({ "padding-right": l + r, overflow: "hidden" }) } } else e("body").css({ "padding-right": e("body").data("padding"), overflow: "visible" }) }; T(), e(t).on("resize", C), d.on("click." + c, function (t) { if (E(this)) { if (t.preventDefault(), v) return !1; S(e(this)) } }), e(n).on("click", ".sl-close", function (e) { e.preventDefault(), l && M() }), e(n).click(function (t) { l && i.docClose && 0 == e(t.target).closest(".sl-image").length && 0 == e(t.target).closest(".sl-navigation").length && M() }), i.disableRightClick && e(n).on("contextmenu", ".sl-image img", function (e) { return !1 }), e(n).on("click", ".sl-navigation button", function (t) { t.preventDefault(), a = 0, D(e(this).hasClass("sl-next") ? 1 : -1) }), i.enableKeyboard && e(n).on("keyup." + c, function (e) { if (e.preventDefault(), a = 0, l) { var t = e.keyCode; 27 == t && M(), (37 == t || 39 == e.keyCode) && D(39 == e.keyCode ? 1 : -1) } }); var O = 0, P = 0, W = !1, X = 0; return e(n).on("touchstart mousedown pointerdown MSPointerDown", ".sl-image", function (e) { return W ? !0 : (p && (X = parseInt(b.css("left"))), W = !0, O = e.originalEvent.pageX || e.originalEvent.touches[0].pageX, !1) }).on("touchmove mousemove pointermove MSPointerMove", function (e) { return W ? (e.preventDefault(), P = e.originalEvent.pageX || e.originalEvent.touches[0].pageX, a = O - P, void (i.animationSlide && (p ? I(0, -a + "px") : b.css("left", X - a + "px")))) : !0 }).on("touchend mouseup touchcancel pointerup pointercancel MSPointerUp MSPointerCancel", function (e) { W && (W = !1, Math.abs(a) > i.swipeTolerance ? D(a > 0 ? 1 : -1) : i.animationSlide && (p ? I(i.animationSpeed / 1e3, "0px") : b.animate({ left: X + "px" }, i.animationSpeed / 2))) }), this.open = function (t) { t = t || e(this[0]), S(t) }, this.next = function () { D(1) }, this.prev = function () { D(-1) }, this.close = function () { M() }, this.destroy = function () { e(n).unbind("click." + c).unbind("keyup." + c), M(), e(".sl-overlay, .sl-wrapper").remove() }, this } }(jQuery, window, document);


/*
 * verge 1.9.1+201402130803
 * https://github.com/ryanve/verge
 * MIT License 2013 Ryan Van Etten
 */
!function (a, b, c) { "undefined" != typeof module && module.exports ? module.exports = c() : a[b] = c() }(this, "verge", function () { function a() { return { width: k(), height: l() } } function b(a, b) { var c = {}; return b = +b || 0, c.width = (c.right = a.right + b) - (c.left = a.left - b), c.height = (c.bottom = a.bottom + b) - (c.top = a.top - b), c } function c(a, c) { return a = a && !a.nodeType ? a[0] : a, a && 1 === a.nodeType ? b(a.getBoundingClientRect(), c) : !1 } function d(b) { b = null == b ? a() : 1 === b.nodeType ? c(b) : b; var d = b.height, e = b.width; return d = "function" == typeof d ? d.call(b) : d, e = "function" == typeof e ? e.call(b) : e, e / d } var e = {}, f = "undefined" != typeof window && window, g = "undefined" != typeof document && document, h = g && g.documentElement, i = f.matchMedia || f.msMatchMedia, j = i ? function (a) { return !!i.call(f, a).matches } : function () { return !1 }, k = e.viewportW = function () { var a = h.clientWidth, b = f.innerWidth; return b > a ? b : a }, l = e.viewportH = function () { var a = h.clientHeight, b = f.innerHeight; return b > a ? b : a }; return e.mq = j, e.matchMedia = i ? function () { return i.apply(f, arguments) } : function () { return {} }, e.viewport = a, e.scrollX = function () { return f.pageXOffset || h.scrollLeft }, e.scrollY = function () { return f.pageYOffset || h.scrollTop }, e.rectangle = c, e.aspect = d, e.inX = function (a, b) { var d = c(a, b); return !!d && d.right >= 0 && d.left <= k() }, e.inY = function (a, b) { var d = c(a, b); return !!d && d.bottom >= 0 && d.top <= l() }, e.inViewport = function (a, b) { var d = c(a, b); return !!d && d.bottom >= 0 && d.right >= 0 && d.top <= l() && d.left <= k() }, e });
jQuery.extend(verge);


/* perfect-scrollbar v0.6.10 */
!function t(e, n, r) { function o(l, s) { if (!n[l]) { if (!e[l]) { var a = "function" == typeof require && require; if (!s && a) return a(l, !0); if (i) return i(l, !0); var c = new Error("Cannot find module '" + l + "'"); throw c.code = "MODULE_NOT_FOUND", c } var u = n[l] = { exports: {} }; e[l][0].call(u.exports, function (t) { var n = e[l][1][t]; return o(n ? n : t) }, u, u.exports, t, e, n, r) } return n[l].exports } for (var i = "function" == typeof require && require, l = 0; l < r.length; l++) o(r[l]); return o }({ 1: [function (t, e, n) { "use strict"; function r(t) { t.fn.perfectScrollbar = function (e) { return this.each(function () { if ("object" == typeof e || "undefined" == typeof e) { var n = e; i.get(this) || o.initialize(this, n) } else { var r = e; "update" === r ? o.update(this) : "destroy" === r && o.destroy(this) } return t(this) }) } } var o = t("../main"), i = t("../plugin/instances"); if ("function" == typeof define && define.amd) define(["jquery"], r); else { var l = window.jQuery ? window.jQuery : window.$; "undefined" != typeof l && r(l) } e.exports = r }, { "../main": 7, "../plugin/instances": 18 }], 2: [function (t, e, n) { "use strict"; function r(t, e) { var n = t.className.split(" "); n.indexOf(e) < 0 && n.push(e), t.className = n.join(" ") } function o(t, e) { var n = t.className.split(" "), r = n.indexOf(e); r >= 0 && n.splice(r, 1), t.className = n.join(" ") } n.add = function (t, e) { t.classList ? t.classList.add(e) : r(t, e) }, n.remove = function (t, e) { t.classList ? t.classList.remove(e) : o(t, e) }, n.list = function (t) { return t.classList ? Array.prototype.slice.apply(t.classList) : t.className.split(" ") } }, {}], 3: [function (t, e, n) { "use strict"; function r(t, e) { return window.getComputedStyle(t)[e] } function o(t, e, n) { return "number" == typeof n && (n = n.toString() + "px"), t.style[e] = n, t } function i(t, e) { for (var n in e) { var r = e[n]; "number" == typeof r && (r = r.toString() + "px"), t.style[n] = r } return t } var l = {}; l.e = function (t, e) { var n = document.createElement(t); return n.className = e, n }, l.appendTo = function (t, e) { return e.appendChild(t), t }, l.css = function (t, e, n) { return "object" == typeof e ? i(t, e) : "undefined" == typeof n ? r(t, e) : o(t, e, n) }, l.matches = function (t, e) { return "undefined" != typeof t.matches ? t.matches(e) : "undefined" != typeof t.matchesSelector ? t.matchesSelector(e) : "undefined" != typeof t.webkitMatchesSelector ? t.webkitMatchesSelector(e) : "undefined" != typeof t.mozMatchesSelector ? t.mozMatchesSelector(e) : "undefined" != typeof t.msMatchesSelector ? t.msMatchesSelector(e) : void 0 }, l.remove = function (t) { "undefined" != typeof t.remove ? t.remove() : t.parentNode && t.parentNode.removeChild(t) }, l.queryChildren = function (t, e) { return Array.prototype.filter.call(t.childNodes, function (t) { return l.matches(t, e) }) }, e.exports = l }, {}], 4: [function (t, e, n) { "use strict"; var r = function (t) { this.element = t, this.events = {} }; r.prototype.bind = function (t, e) { "undefined" == typeof this.events[t] && (this.events[t] = []), this.events[t].push(e), this.element.addEventListener(t, e, !1) }, r.prototype.unbind = function (t, e) { var n = "undefined" != typeof e; this.events[t] = this.events[t].filter(function (r) { return n && r !== e ? !0 : (this.element.removeEventListener(t, r, !1), !1) }, this) }, r.prototype.unbindAll = function () { for (var t in this.events) this.unbind(t) }; var o = function () { this.eventElements = [] }; o.prototype.eventElement = function (t) { var e = this.eventElements.filter(function (e) { return e.element === t })[0]; return "undefined" == typeof e && (e = new r(t), this.eventElements.push(e)), e }, o.prototype.bind = function (t, e, n) { this.eventElement(t).bind(e, n) }, o.prototype.unbind = function (t, e, n) { this.eventElement(t).unbind(e, n) }, o.prototype.unbindAll = function () { for (var t = 0; t < this.eventElements.length; t++) this.eventElements[t].unbindAll() }, o.prototype.once = function (t, e, n) { var r = this.eventElement(t), o = function (t) { r.unbind(e, o), n(t) }; r.bind(e, o) }, e.exports = o }, {}], 5: [function (t, e, n) { "use strict"; e.exports = function () { function t() { return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1) } return function () { return t() + t() + "-" + t() + "-" + t() + "-" + t() + "-" + t() + t() + t() } }() }, {}], 6: [function (t, e, n) { "use strict"; var r = t("./class"), o = t("./dom"); n.toInt = function (t) { return parseInt(t, 10) || 0 }, n.clone = function (t) { if (null === t) return null; if ("object" == typeof t) { var e = {}; for (var n in t) e[n] = this.clone(t[n]); return e } return t }, n.extend = function (t, e) { var n = this.clone(t); for (var r in e) n[r] = this.clone(e[r]); return n }, n.isEditable = function (t) { return o.matches(t, "input,[contenteditable]") || o.matches(t, "select,[contenteditable]") || o.matches(t, "textarea,[contenteditable]") || o.matches(t, "button,[contenteditable]") }, n.removePsClasses = function (t) { for (var e = r.list(t), n = 0; n < e.length; n++) { var o = e[n]; 0 === o.indexOf("ps-") && r.remove(t, o) } }, n.outerWidth = function (t) { return this.toInt(o.css(t, "width")) + this.toInt(o.css(t, "paddingLeft")) + this.toInt(o.css(t, "paddingRight")) + this.toInt(o.css(t, "borderLeftWidth")) + this.toInt(o.css(t, "borderRightWidth")) }, n.startScrolling = function (t, e) { r.add(t, "ps-in-scrolling"), "undefined" != typeof e ? r.add(t, "ps-" + e) : (r.add(t, "ps-x"), r.add(t, "ps-y")) }, n.stopScrolling = function (t, e) { r.remove(t, "ps-in-scrolling"), "undefined" != typeof e ? r.remove(t, "ps-" + e) : (r.remove(t, "ps-x"), r.remove(t, "ps-y")) }, n.env = { isWebKit: "WebkitAppearance" in document.documentElement.style, supportsTouch: "ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch, supportsIePointer: null !== window.navigator.msMaxTouchPoints } }, { "./class": 2, "./dom": 3 }], 7: [function (t, e, n) { "use strict"; var r = t("./plugin/destroy"), o = t("./plugin/initialize"), i = t("./plugin/update"); e.exports = { initialize: o, update: i, destroy: r } }, { "./plugin/destroy": 9, "./plugin/initialize": 17, "./plugin/update": 21 }], 8: [function (t, e, n) { "use strict"; e.exports = { maxScrollbarLength: null, minScrollbarLength: null, scrollXMarginOffset: 0, scrollYMarginOffset: 0, stopPropagationOnClick: !0, suppressScrollX: !1, suppressScrollY: !1, swipePropagation: !0, useBothWheelAxes: !1, useKeyboard: !0, useSelectionScroll: !1, wheelPropagation: !1, wheelSpeed: 1, theme: "default" } }, {}], 9: [function (t, e, n) { "use strict"; var r = t("../lib/dom"), o = t("../lib/helper"), i = t("./instances"); e.exports = function (t) { var e = i.get(t); e && (e.event.unbindAll(), r.remove(e.scrollbarX), r.remove(e.scrollbarY), r.remove(e.scrollbarXRail), r.remove(e.scrollbarYRail), o.removePsClasses(t), i.remove(t)) } }, { "../lib/dom": 3, "../lib/helper": 6, "./instances": 18 }], 10: [function (t, e, n) { "use strict"; function r(t, e) { function n(t) { return t.getBoundingClientRect() } var r = window.Event.prototype.stopPropagation.bind; e.settings.stopPropagationOnClick && e.event.bind(e.scrollbarY, "click", r), e.event.bind(e.scrollbarYRail, "click", function (r) { var i = o.toInt(e.scrollbarYHeight / 2), a = e.railYRatio * (r.pageY - window.pageYOffset - n(e.scrollbarYRail).top - i), c = e.railYRatio * (e.railYHeight - e.scrollbarYHeight), u = a / c; 0 > u ? u = 0 : u > 1 && (u = 1), s(t, "top", (e.contentHeight - e.containerHeight) * u), l(t), r.stopPropagation() }), e.settings.stopPropagationOnClick && e.event.bind(e.scrollbarX, "click", r), e.event.bind(e.scrollbarXRail, "click", function (r) { var i = o.toInt(e.scrollbarXWidth / 2), a = e.railXRatio * (r.pageX - window.pageXOffset - n(e.scrollbarXRail).left - i), c = e.railXRatio * (e.railXWidth - e.scrollbarXWidth), u = a / c; 0 > u ? u = 0 : u > 1 && (u = 1), s(t, "left", (e.contentWidth - e.containerWidth) * u - e.negativeScrollAdjustment), l(t), r.stopPropagation() }) } var o = t("../../lib/helper"), i = t("../instances"), l = t("../update-geometry"), s = t("../update-scroll"); e.exports = function (t) { var e = i.get(t); r(t, e) } }, { "../../lib/helper": 6, "../instances": 18, "../update-geometry": 19, "../update-scroll": 20 }], 11: [function (t, e, n) { "use strict"; function r(t, e) { function n(n) { var o = r + n * e.railXRatio, i = Math.max(0, e.scrollbarXRail.getBoundingClientRect().left) + e.railXRatio * (e.railXWidth - e.scrollbarXWidth); 0 > o ? e.scrollbarXLeft = 0 : o > i ? e.scrollbarXLeft = i : e.scrollbarXLeft = o; var s = l.toInt(e.scrollbarXLeft * (e.contentWidth - e.containerWidth) / (e.containerWidth - e.railXRatio * e.scrollbarXWidth)) - e.negativeScrollAdjustment; c(t, "left", s) } var r = null, o = null, s = function (e) { n(e.pageX - o), a(t), e.stopPropagation(), e.preventDefault() }, u = function () { l.stopScrolling(t, "x"), e.event.unbind(e.ownerDocument, "mousemove", s) }; e.event.bind(e.scrollbarX, "mousedown", function (n) { o = n.pageX, r = l.toInt(i.css(e.scrollbarX, "left")) * e.railXRatio, l.startScrolling(t, "x"), e.event.bind(e.ownerDocument, "mousemove", s), e.event.once(e.ownerDocument, "mouseup", u), n.stopPropagation(), n.preventDefault() }) } function o(t, e) { function n(n) { var o = r + n * e.railYRatio, i = Math.max(0, e.scrollbarYRail.getBoundingClientRect().top) + e.railYRatio * (e.railYHeight - e.scrollbarYHeight); 0 > o ? e.scrollbarYTop = 0 : o > i ? e.scrollbarYTop = i : e.scrollbarYTop = o; var s = l.toInt(e.scrollbarYTop * (e.contentHeight - e.containerHeight) / (e.containerHeight - e.railYRatio * e.scrollbarYHeight)); c(t, "top", s) } var r = null, o = null, s = function (e) { n(e.pageY - o), a(t), e.stopPropagation(), e.preventDefault() }, u = function () { l.stopScrolling(t, "y"), e.event.unbind(e.ownerDocument, "mousemove", s) }; e.event.bind(e.scrollbarY, "mousedown", function (n) { o = n.pageY, r = l.toInt(i.css(e.scrollbarY, "top")) * e.railYRatio, l.startScrolling(t, "y"), e.event.bind(e.ownerDocument, "mousemove", s), e.event.once(e.ownerDocument, "mouseup", u), n.stopPropagation(), n.preventDefault() }) } var i = t("../../lib/dom"), l = t("../../lib/helper"), s = t("../instances"), a = t("../update-geometry"), c = t("../update-scroll"); e.exports = function (t) { var e = s.get(t); r(t, e), o(t, e) } }, { "../../lib/dom": 3, "../../lib/helper": 6, "../instances": 18, "../update-geometry": 19, "../update-scroll": 20 }], 12: [function (t, e, n) { "use strict"; function r(t, e) { function n(n, r) { var o = t.scrollTop; if (0 === n) { if (!e.scrollbarYActive) return !1; if (0 === o && r > 0 || o >= e.contentHeight - e.containerHeight && 0 > r) return !e.settings.wheelPropagation } var i = t.scrollLeft; if (0 === r) { if (!e.scrollbarXActive) return !1; if (0 === i && 0 > n || i >= e.contentWidth - e.containerWidth && n > 0) return !e.settings.wheelPropagation } return !0 } var r = !1; e.event.bind(t, "mouseenter", function () { r = !0 }), e.event.bind(t, "mouseleave", function () { r = !1 }); var l = !1; e.event.bind(e.ownerDocument, "keydown", function (c) { if (!c.isDefaultPrevented || !c.isDefaultPrevented()) { var u = i.matches(e.scrollbarX, ":focus") || i.matches(e.scrollbarY, ":focus"); if (r || u) { var d = document.activeElement ? document.activeElement : e.ownerDocument.activeElement; if (d) { for (; d.shadowRoot;) d = d.shadowRoot.activeElement; if (o.isEditable(d)) return } var p = 0, f = 0; switch (c.which) { case 37: p = -30; break; case 38: f = 30; break; case 39: p = 30; break; case 40: f = -30; break; case 33: f = 90; break; case 32: f = c.shiftKey ? 90 : -90; break; case 34: f = -90; break; case 35: f = c.ctrlKey ? -e.contentHeight : -e.containerHeight; break; case 36: f = c.ctrlKey ? t.scrollTop : e.containerHeight; break; default: return } a(t, "top", t.scrollTop - f), a(t, "left", t.scrollLeft + p), s(t), l = n(p, f), l && c.preventDefault() } } }) } var o = t("../../lib/helper"), i = t("../../lib/dom"), l = t("../instances"), s = t("../update-geometry"), a = t("../update-scroll"); e.exports = function (t) { var e = l.get(t); r(t, e) } }, { "../../lib/dom": 3, "../../lib/helper": 6, "../instances": 18, "../update-geometry": 19, "../update-scroll": 20 }], 13: [function (t, e, n) { "use strict"; function r(t, e) { function n(n, r) { var o = t.scrollTop; if (0 === n) { if (!e.scrollbarYActive) return !1; if (0 === o && r > 0 || o >= e.contentHeight - e.containerHeight && 0 > r) return !e.settings.wheelPropagation } var i = t.scrollLeft; if (0 === r) { if (!e.scrollbarXActive) return !1; if (0 === i && 0 > n || i >= e.contentWidth - e.containerWidth && n > 0) return !e.settings.wheelPropagation } return !0 } function r(t) { var e = t.deltaX, n = -1 * t.deltaY; return ("undefined" == typeof e || "undefined" == typeof n) && (e = -1 * t.wheelDeltaX / 6, n = t.wheelDeltaY / 6), t.deltaMode && 1 === t.deltaMode && (e *= 10, n *= 10), e !== e && n !== n && (e = 0, n = t.wheelDelta), [e, n] } function o(e, n) { var r = t.querySelector("textarea:hover"); if (r) { var o = r.scrollHeight - r.clientHeight; if (o > 0 && !(0 === r.scrollTop && n > 0 || r.scrollTop === o && 0 > n)) return !0; var i = r.scrollLeft - r.clientWidth; if (i > 0 && !(0 === r.scrollLeft && 0 > e || r.scrollLeft === i && e > 0)) return !0 } return !1 } function s(s) { var c = r(s), u = c[0], d = c[1]; o(u, d) || (a = !1, e.settings.useBothWheelAxes ? e.scrollbarYActive && !e.scrollbarXActive ? (d ? l(t, "top", t.scrollTop - d * e.settings.wheelSpeed) : l(t, "top", t.scrollTop + u * e.settings.wheelSpeed), a = !0) : e.scrollbarXActive && !e.scrollbarYActive && (u ? l(t, "left", t.scrollLeft + u * e.settings.wheelSpeed) : l(t, "left", t.scrollLeft - d * e.settings.wheelSpeed), a = !0) : (l(t, "top", t.scrollTop - d * e.settings.wheelSpeed), l(t, "left", t.scrollLeft + u * e.settings.wheelSpeed)), i(t), a = a || n(u, d), a && (s.stopPropagation(), s.preventDefault())) } var a = !1; "undefined" != typeof window.onwheel ? e.event.bind(t, "wheel", s) : "undefined" != typeof window.onmousewheel && e.event.bind(t, "mousewheel", s) } var o = t("../instances"), i = t("../update-geometry"), l = t("../update-scroll"); e.exports = function (t) { var e = o.get(t); r(t, e) } }, { "../instances": 18, "../update-geometry": 19, "../update-scroll": 20 }], 14: [function (t, e, n) { "use strict"; function r(t, e) { e.event.bind(t, "scroll", function () { i(t) }) } var o = t("../instances"), i = t("../update-geometry"); e.exports = function (t) { var e = o.get(t); r(t, e) } }, { "../instances": 18, "../update-geometry": 19 }], 15: [function (t, e, n) { "use strict"; function r(t, e) { function n() { var t = window.getSelection ? window.getSelection() : document.getSelection ? document.getSelection() : ""; return 0 === t.toString().length ? null : t.getRangeAt(0).commonAncestorContainer } function r() { c || (c = setInterval(function () { return i.get(t) ? (s(t, "top", t.scrollTop + u.top), s(t, "left", t.scrollLeft + u.left), void l(t)) : void clearInterval(c) }, 50)) } function a() { c && (clearInterval(c), c = null), o.stopScrolling(t) } var c = null, u = { top: 0, left: 0 }, d = !1; e.event.bind(e.ownerDocument, "selectionchange", function () { t.contains(n()) ? d = !0 : (d = !1, a()) }), e.event.bind(window, "mouseup", function () { d && (d = !1, a()) }), e.event.bind(window, "mousemove", function (e) { if (d) { var n = { x: e.pageX, y: e.pageY }, i = { left: t.offsetLeft, right: t.offsetLeft + t.offsetWidth, top: t.offsetTop, bottom: t.offsetTop + t.offsetHeight }; n.x < i.left + 3 ? (u.left = -5, o.startScrolling(t, "x")) : n.x > i.right - 3 ? (u.left = 5, o.startScrolling(t, "x")) : u.left = 0, n.y < i.top + 3 ? (i.top + 3 - n.y < 5 ? u.top = -5 : u.top = -20, o.startScrolling(t, "y")) : n.y > i.bottom - 3 ? (n.y - i.bottom + 3 < 5 ? u.top = 5 : u.top = 20, o.startScrolling(t, "y")) : u.top = 0, 0 === u.top && 0 === u.left ? a() : r() } }) } var o = t("../../lib/helper"), i = t("../instances"), l = t("../update-geometry"), s = t("../update-scroll"); e.exports = function (t) { var e = i.get(t); r(t, e) } }, { "../../lib/helper": 6, "../instances": 18, "../update-geometry": 19, "../update-scroll": 20 }], 16: [function (t, e, n) { "use strict"; function r(t, e, n, r) { function s(n, r) { var o = t.scrollTop, i = t.scrollLeft, l = Math.abs(n), s = Math.abs(r); if (s > l) { if (0 > r && o === e.contentHeight - e.containerHeight || r > 0 && 0 === o) return !e.settings.swipePropagation } else if (l > s && (0 > n && i === e.contentWidth - e.containerWidth || n > 0 && 0 === i)) return !e.settings.swipePropagation; return !0 } function a(e, n) { l(t, "top", t.scrollTop - n), l(t, "left", t.scrollLeft - e), i(t) } function c() { Y = !0 } function u() { Y = !1 } function d(t) { return t.targetTouches ? t.targetTouches[0] : t } function p(t) { return t.targetTouches && 1 === t.targetTouches.length ? !0 : t.pointerType && "mouse" !== t.pointerType && t.pointerType !== t.MSPOINTER_TYPE_MOUSE ? !0 : !1 } function f(t) { if (p(t)) { w = !0; var e = d(t); v.pageX = e.pageX, v.pageY = e.pageY, g = (new Date).getTime(), null !== y && clearInterval(y), t.stopPropagation() } } function h(t) { if (!Y && w && p(t)) { var e = d(t), n = { pageX: e.pageX, pageY: e.pageY }, r = n.pageX - v.pageX, o = n.pageY - v.pageY; a(r, o), v = n; var i = (new Date).getTime(), l = i - g; l > 0 && (m.x = r / l, m.y = o / l, g = i), s(r, o) && (t.stopPropagation(), t.preventDefault()) } } function b() { !Y && w && (w = !1, clearInterval(y), y = setInterval(function () { return o.get(t) ? Math.abs(m.x) < .01 && Math.abs(m.y) < .01 ? void clearInterval(y) : (a(30 * m.x, 30 * m.y), m.x *= .8, void (m.y *= .8)) : void clearInterval(y) }, 10)) } var v = {}, g = 0, m = {}, y = null, Y = !1, w = !1; n && (e.event.bind(window, "touchstart", c), e.event.bind(window, "touchend", u), e.event.bind(t, "touchstart", f), e.event.bind(t, "touchmove", h), e.event.bind(t, "touchend", b)), r && (window.PointerEvent ? (e.event.bind(window, "pointerdown", c), e.event.bind(window, "pointerup", u), e.event.bind(t, "pointerdown", f), e.event.bind(t, "pointermove", h), e.event.bind(t, "pointerup", b)) : window.MSPointerEvent && (e.event.bind(window, "MSPointerDown", c), e.event.bind(window, "MSPointerUp", u), e.event.bind(t, "MSPointerDown", f), e.event.bind(t, "MSPointerMove", h), e.event.bind(t, "MSPointerUp", b))) } var o = t("../instances"), i = t("../update-geometry"), l = t("../update-scroll"); e.exports = function (t, e, n) { var i = o.get(t); r(t, i, e, n) } }, { "../instances": 18, "../update-geometry": 19, "../update-scroll": 20 }], 17: [function (t, e, n) { "use strict"; var r = t("../lib/class"), o = t("../lib/helper"), i = t("./instances"), l = t("./update-geometry"), s = t("./handler/click-rail"), a = t("./handler/drag-scrollbar"), c = t("./handler/keyboard"), u = t("./handler/mouse-wheel"), d = t("./handler/native-scroll"), p = t("./handler/selection"), f = t("./handler/touch"); e.exports = function (t, e) { e = "object" == typeof e ? e : {}, r.add(t, "ps-container"); var n = i.add(t); n.settings = o.extend(n.settings, e), r.add(t, "ps-theme-" + n.settings.theme), s(t), a(t), u(t), d(t), n.settings.useSelectionScroll && p(t), (o.env.supportsTouch || o.env.supportsIePointer) && f(t, o.env.supportsTouch, o.env.supportsIePointer), n.settings.useKeyboard && c(t), l(t) } }, { "../lib/class": 2, "../lib/helper": 6, "./handler/click-rail": 10, "./handler/drag-scrollbar": 11, "./handler/keyboard": 12, "./handler/mouse-wheel": 13, "./handler/native-scroll": 14, "./handler/selection": 15, "./handler/touch": 16, "./instances": 18, "./update-geometry": 19 }], 18: [function (t, e, n) { "use strict"; function r(t) { function e() { s.add(t, "ps-focus") } function n() { s.remove(t, "ps-focus") } var r = this; r.settings = p.clone(c), r.containerWidth = null, r.containerHeight = null, r.contentWidth = null, r.contentHeight = null, r.isRtl = "rtl" === a.css(t, "direction"), r.isNegativeScroll = function () { var e = t.scrollLeft, n = null; return t.scrollLeft = -1, n = t.scrollLeft < 0, t.scrollLeft = e, n }(), r.negativeScrollAdjustment = r.isNegativeScroll ? t.scrollWidth - t.clientWidth : 0, r.event = new u, r.ownerDocument = t.ownerDocument || document, r.scrollbarXRail = a.appendTo(a.e("div", "ps-scrollbar-x-rail"), t), r.scrollbarX = a.appendTo(a.e("div", "ps-scrollbar-x"), r.scrollbarXRail), r.scrollbarX.setAttribute("tabindex", 0), r.event.bind(r.scrollbarX, "focus", e), r.event.bind(r.scrollbarX, "blur", n), r.scrollbarXActive = null, r.scrollbarXWidth = null, r.scrollbarXLeft = null, r.scrollbarXBottom = p.toInt(a.css(r.scrollbarXRail, "bottom")), r.isScrollbarXUsingBottom = r.scrollbarXBottom === r.scrollbarXBottom, r.scrollbarXTop = r.isScrollbarXUsingBottom ? null : p.toInt(a.css(r.scrollbarXRail, "top")), r.railBorderXWidth = p.toInt(a.css(r.scrollbarXRail, "borderLeftWidth")) + p.toInt(a.css(r.scrollbarXRail, "borderRightWidth")), a.css(r.scrollbarXRail, "display", "block"), r.railXMarginWidth = p.toInt(a.css(r.scrollbarXRail, "marginLeft")) + p.toInt(a.css(r.scrollbarXRail, "marginRight")), a.css(r.scrollbarXRail, "display", ""), r.railXWidth = null, r.railXRatio = null, r.scrollbarYRail = a.appendTo(a.e("div", "ps-scrollbar-y-rail"), t), r.scrollbarY = a.appendTo(a.e("div", "ps-scrollbar-y"), r.scrollbarYRail), r.scrollbarY.setAttribute("tabindex", 0), r.event.bind(r.scrollbarY, "focus", e), r.event.bind(r.scrollbarY, "blur", n), r.scrollbarYActive = null, r.scrollbarYHeight = null, r.scrollbarYTop = null, r.scrollbarYRight = p.toInt(a.css(r.scrollbarYRail, "right")), r.isScrollbarYUsingRight = r.scrollbarYRight === r.scrollbarYRight, r.scrollbarYLeft = r.isScrollbarYUsingRight ? null : p.toInt(a.css(r.scrollbarYRail, "left")), r.scrollbarYOuterWidth = r.isRtl ? p.outerWidth(r.scrollbarY) : null, r.railBorderYWidth = p.toInt(a.css(r.scrollbarYRail, "borderTopWidth")) + p.toInt(a.css(r.scrollbarYRail, "borderBottomWidth")), a.css(r.scrollbarYRail, "display", "block"), r.railYMarginHeight = p.toInt(a.css(r.scrollbarYRail, "marginTop")) + p.toInt(a.css(r.scrollbarYRail, "marginBottom")), a.css(r.scrollbarYRail, "display", ""), r.railYHeight = null, r.railYRatio = null } function o(t) { return "undefined" == typeof t.dataset ? t.getAttribute("data-ps-id") : t.dataset.psId } function i(t, e) { "undefined" == typeof t.dataset ? t.setAttribute("data-ps-id", e) : t.dataset.psId = e } function l(t) { "undefined" == typeof t.dataset ? t.removeAttribute("data-ps-id") : delete t.dataset.psId } var s = t("../lib/class"), a = t("../lib/dom"), c = t("./default-setting"), u = t("../lib/event-manager"), d = t("../lib/guid"), p = t("../lib/helper"), f = {}; n.add = function (t) { var e = d(); return i(t, e), f[e] = new r(t), f[e] }, n.remove = function (t) { delete f[o(t)], l(t) }, n.get = function (t) { return f[o(t)] } }, { "../lib/class": 2, "../lib/dom": 3, "../lib/event-manager": 4, "../lib/guid": 5, "../lib/helper": 6, "./default-setting": 8 }], 19: [function (t, e, n) { "use strict"; function r(t, e) { return t.settings.minScrollbarLength && (e = Math.max(e, t.settings.minScrollbarLength)), t.settings.maxScrollbarLength && (e = Math.min(e, t.settings.maxScrollbarLength)), e } function o(t, e) { var n = { width: e.railXWidth }; e.isRtl ? n.left = e.negativeScrollAdjustment + t.scrollLeft + e.containerWidth - e.contentWidth : n.left = t.scrollLeft, e.isScrollbarXUsingBottom ? n.bottom = e.scrollbarXBottom - t.scrollTop : n.top = e.scrollbarXTop + t.scrollTop, l.css(e.scrollbarXRail, n); var r = { top: t.scrollTop, height: e.railYHeight }; e.isScrollbarYUsingRight ? e.isRtl ? r.right = e.contentWidth - (e.negativeScrollAdjustment + t.scrollLeft) - e.scrollbarYRight - e.scrollbarYOuterWidth : r.right = e.scrollbarYRight - t.scrollLeft : e.isRtl ? r.left = e.negativeScrollAdjustment + t.scrollLeft + 2 * e.containerWidth - e.contentWidth - e.scrollbarYLeft - e.scrollbarYOuterWidth : r.left = e.scrollbarYLeft + t.scrollLeft, l.css(e.scrollbarYRail, r), l.css(e.scrollbarX, { left: e.scrollbarXLeft, width: e.scrollbarXWidth - e.railBorderXWidth }), l.css(e.scrollbarY, { top: e.scrollbarYTop, height: e.scrollbarYHeight - e.railBorderYWidth }) } var i = t("../lib/class"), l = t("../lib/dom"), s = t("../lib/helper"), a = t("./instances"), c = t("./update-scroll"); e.exports = function (t) { var e = a.get(t); e.containerWidth = t.clientWidth, e.containerHeight = t.clientHeight, e.contentWidth = t.scrollWidth, e.contentHeight = t.scrollHeight; var n; t.contains(e.scrollbarXRail) || (n = l.queryChildren(t, ".ps-scrollbar-x-rail"), n.length > 0 && n.forEach(function (t) { l.remove(t) }), l.appendTo(e.scrollbarXRail, t)), t.contains(e.scrollbarYRail) || (n = l.queryChildren(t, ".ps-scrollbar-y-rail"), n.length > 0 && n.forEach(function (t) { l.remove(t) }), l.appendTo(e.scrollbarYRail, t)), !e.settings.suppressScrollX && e.containerWidth + e.settings.scrollXMarginOffset < e.contentWidth ? (e.scrollbarXActive = !0, e.railXWidth = e.containerWidth - e.railXMarginWidth, e.railXRatio = e.containerWidth / e.railXWidth, e.scrollbarXWidth = r(e, s.toInt(e.railXWidth * e.containerWidth / e.contentWidth)), e.scrollbarXLeft = s.toInt((e.negativeScrollAdjustment + t.scrollLeft) * (e.railXWidth - e.scrollbarXWidth) / (e.contentWidth - e.containerWidth))) : e.scrollbarXActive = !1, !e.settings.suppressScrollY && e.containerHeight + e.settings.scrollYMarginOffset < e.contentHeight ? (e.scrollbarYActive = !0, e.railYHeight = e.containerHeight - e.railYMarginHeight, e.railYRatio = e.containerHeight / e.railYHeight, e.scrollbarYHeight = r(e, s.toInt(e.railYHeight * e.containerHeight / e.contentHeight)), e.scrollbarYTop = s.toInt(t.scrollTop * (e.railYHeight - e.scrollbarYHeight) / (e.contentHeight - e.containerHeight))) : e.scrollbarYActive = !1, e.scrollbarXLeft >= e.railXWidth - e.scrollbarXWidth && (e.scrollbarXLeft = e.railXWidth - e.scrollbarXWidth), e.scrollbarYTop >= e.railYHeight - e.scrollbarYHeight && (e.scrollbarYTop = e.railYHeight - e.scrollbarYHeight), o(t, e), e.scrollbarXActive ? i.add(t, "ps-active-x") : (i.remove(t, "ps-active-x"), e.scrollbarXWidth = 0, e.scrollbarXLeft = 0, c(t, "left", 0)), e.scrollbarYActive ? i.add(t, "ps-active-y") : (i.remove(t, "ps-active-y"), e.scrollbarYHeight = 0, e.scrollbarYTop = 0, c(t, "top", 0)) } }, { "../lib/class": 2, "../lib/dom": 3, "../lib/helper": 6, "./instances": 18, "./update-scroll": 20 }], 20: [function (t, e, n) { "use strict"; var r, o, i = t("./instances"), l = document.createEvent("Event"), s = document.createEvent("Event"), a = document.createEvent("Event"), c = document.createEvent("Event"), u = document.createEvent("Event"), d = document.createEvent("Event"), p = document.createEvent("Event"), f = document.createEvent("Event"), h = document.createEvent("Event"), b = document.createEvent("Event"); l.initEvent("ps-scroll-up", !0, !0), s.initEvent("ps-scroll-down", !0, !0), a.initEvent("ps-scroll-left", !0, !0), c.initEvent("ps-scroll-right", !0, !0), u.initEvent("ps-scroll-y", !0, !0), d.initEvent("ps-scroll-x", !0, !0), p.initEvent("ps-x-reach-start", !0, !0), f.initEvent("ps-x-reach-end", !0, !0), h.initEvent("ps-y-reach-start", !0, !0), b.initEvent("ps-y-reach-end", !0, !0), e.exports = function (t, e, n) { if ("undefined" == typeof t) throw "You must provide an element to the update-scroll function"; if ("undefined" == typeof e) throw "You must provide an axis to the update-scroll function"; if ("undefined" == typeof n) throw "You must provide a value to the update-scroll function"; "top" === e && 0 >= n && (t.scrollTop = n = 0, t.dispatchEvent(h)), "left" === e && 0 >= n && (t.scrollLeft = n = 0, t.dispatchEvent(p)); var v = i.get(t); "top" === e && n >= v.contentHeight - v.containerHeight && (t.scrollTop = n = v.contentHeight - v.containerHeight, t.dispatchEvent(b)), "left" === e && n >= v.contentWidth - v.containerWidth && (t.scrollLeft = n = v.contentWidth - v.containerWidth, t.dispatchEvent(f)), r || (r = t.scrollTop), o || (o = t.scrollLeft), "top" === e && r > n && t.dispatchEvent(l), "top" === e && n > r && t.dispatchEvent(s), "left" === e && o > n && t.dispatchEvent(a), "left" === e && n > o && t.dispatchEvent(c), "top" === e && (t.scrollTop = r = n, t.dispatchEvent(u)), "left" === e && (t.scrollLeft = o = n, t.dispatchEvent(d)) } }, { "./instances": 18 }], 21: [function (t, e, n) { "use strict"; var r = t("../lib/dom"), o = t("../lib/helper"), i = t("./instances"), l = t("./update-geometry"), s = t("./update-scroll"); e.exports = function (t) { var e = i.get(t); e && (e.negativeScrollAdjustment = e.isNegativeScroll ? t.scrollWidth - t.clientWidth : 0, r.css(e.scrollbarXRail, "display", "block"), r.css(e.scrollbarYRail, "display", "block"), e.railXMarginWidth = o.toInt(r.css(e.scrollbarXRail, "marginLeft")) + o.toInt(r.css(e.scrollbarXRail, "marginRight")), e.railYMarginHeight = o.toInt(r.css(e.scrollbarYRail, "marginTop")) + o.toInt(r.css(e.scrollbarYRail, "marginBottom")), r.css(e.scrollbarXRail, "display", "none"), r.css(e.scrollbarYRail, "display", "none"), l(t), s(t, "top", t.scrollTop), s(t, "left", t.scrollLeft), r.css(e.scrollbarXRail, "display", ""), r.css(e.scrollbarYRail, "display", "")) } }, { "../lib/dom": 3, "../lib/helper": 6, "./instances": 18, "./update-geometry": 19, "./update-scroll": 20 }] }, {}, [1]);

/*
 * imagesLoaded PACKAGED v4.1.0
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */

!function (t, e) { "function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", e) : "object" == typeof module && module.exports ? module.exports = e() : t.EvEmitter = e() }(this, function () { function t() { } var e = t.prototype; return e.on = function (t, e) { if (t && e) { var i = this._events = this._events || {}, n = i[t] = i[t] || []; return -1 == n.indexOf(e) && n.push(e), this } }, e.once = function (t, e) { if (t && e) { this.on(t, e); var i = this._onceEvents = this._onceEvents || {}, n = i[t] = i[t] || []; return n[e] = !0, this } }, e.off = function (t, e) { var i = this._events && this._events[t]; if (i && i.length) { var n = i.indexOf(e); return -1 != n && i.splice(n, 1), this } }, e.emitEvent = function (t, e) { var i = this._events && this._events[t]; if (i && i.length) { var n = 0, o = i[n]; e = e || []; for (var r = this._onceEvents && this._onceEvents[t]; o;) { var s = r && r[o]; s && (this.off(t, o), delete r[o]), o.apply(this, e), n += s ? 0 : 1, o = i[n] } return this } }, t }), function (t, e) { "use strict"; "function" == typeof define && define.amd ? define(["ev-emitter/ev-emitter"], function (i) { return e(t, i) }) : "object" == typeof module && module.exports ? module.exports = e(t, require("ev-emitter")) : t.imagesLoaded = e(t, t.EvEmitter) }(window, function (t, e) { function i(t, e) { for (var i in e) t[i] = e[i]; return t } function n(t) { var e = []; if (Array.isArray(t)) e = t; else if ("number" == typeof t.length) for (var i = 0; i < t.length; i++) e.push(t[i]); else e.push(t); return e } function o(t, e, r) { return this instanceof o ? ("string" == typeof t && (t = document.querySelectorAll(t)), this.elements = n(t), this.options = i({}, this.options), "function" == typeof e ? r = e : i(this.options, e), r && this.on("always", r), this.getImages(), h && (this.jqDeferred = new h.Deferred), void setTimeout(function () { this.check() }.bind(this))) : new o(t, e, r) } function r(t) { this.img = t } function s(t, e) { this.url = t, this.element = e, this.img = new Image } var h = t.jQuery, a = t.console; o.prototype = Object.create(e.prototype), o.prototype.options = {}, o.prototype.getImages = function () { this.images = [], this.elements.forEach(this.addElementImages, this) }, o.prototype.addElementImages = function (t) { "IMG" == t.nodeName && this.addImage(t), this.options.background === !0 && this.addElementBackgroundImages(t); var e = t.nodeType; if (e && d[e]) { for (var i = t.querySelectorAll("img"), n = 0; n < i.length; n++) { var o = i[n]; this.addImage(o) } if ("string" == typeof this.options.background) { var r = t.querySelectorAll(this.options.background); for (n = 0; n < r.length; n++) { var s = r[n]; this.addElementBackgroundImages(s) } } } }; var d = { 1: !0, 9: !0, 11: !0 }; return o.prototype.addElementBackgroundImages = function (t) { var e = getComputedStyle(t); if (e) for (var i = /url\((['"])?(.*?)\1\)/gi, n = i.exec(e.backgroundImage) ; null !== n;) { var o = n && n[2]; o && this.addBackground(o, t), n = i.exec(e.backgroundImage) } }, o.prototype.addImage = function (t) { var e = new r(t); this.images.push(e) }, o.prototype.addBackground = function (t, e) { var i = new s(t, e); this.images.push(i) }, o.prototype.check = function () { function t(t, i, n) { setTimeout(function () { e.progress(t, i, n) }) } var e = this; return this.progressedCount = 0, this.hasAnyBroken = !1, this.images.length ? void this.images.forEach(function (e) { e.once("progress", t), e.check() }) : void this.complete() }, o.prototype.progress = function (t, e, i) { this.progressedCount++, this.hasAnyBroken = this.hasAnyBroken || !t.isLoaded, this.emitEvent("progress", [this, t, e]), this.jqDeferred && this.jqDeferred.notify && this.jqDeferred.notify(this, t), this.progressedCount == this.images.length && this.complete(), this.options.debug && a && a.log("progress: " + i, t, e) }, o.prototype.complete = function () { var t = this.hasAnyBroken ? "fail" : "done"; if (this.isComplete = !0, this.emitEvent(t, [this]), this.emitEvent("always", [this]), this.jqDeferred) { var e = this.hasAnyBroken ? "reject" : "resolve"; this.jqDeferred[e](this) } }, r.prototype = Object.create(e.prototype), r.prototype.check = function () { var t = this.getIsImageComplete(); return t ? void this.confirm(0 !== this.img.naturalWidth, "naturalWidth") : (this.proxyImage = new Image, this.proxyImage.addEventListener("load", this), this.proxyImage.addEventListener("error", this), this.img.addEventListener("load", this), this.img.addEventListener("error", this), void (this.proxyImage.src = this.img.src)) }, r.prototype.getIsImageComplete = function () { return this.img.complete && void 0 !== this.img.naturalWidth }, r.prototype.confirm = function (t, e) { this.isLoaded = t, this.emitEvent("progress", [this, this.img, e]) }, r.prototype.handleEvent = function (t) { var e = "on" + t.type; this[e] && this[e](t) }, r.prototype.onload = function () { this.confirm(!0, "onload"), this.unbindEvents() }, r.prototype.onerror = function () { this.confirm(!1, "onerror"), this.unbindEvents() }, r.prototype.unbindEvents = function () { this.proxyImage.removeEventListener("load", this), this.proxyImage.removeEventListener("error", this), this.img.removeEventListener("load", this), this.img.removeEventListener("error", this) }, s.prototype = Object.create(r.prototype), s.prototype.check = function () { this.img.addEventListener("load", this), this.img.addEventListener("error", this), this.img.src = this.url; var t = this.getIsImageComplete(); t && (this.confirm(0 !== this.img.naturalWidth, "naturalWidth"), this.unbindEvents()) }, s.prototype.unbindEvents = function () { this.img.removeEventListener("load", this), this.img.removeEventListener("error", this) }, s.prototype.confirm = function (t, e) { this.isLoaded = t, this.emitEvent("progress", [this, this.element, e]) }, o.makeJQueryPlugin = function (e) { e = e || t.jQuery, e && (h = e, h.fn.imagesLoaded = function (t, e) { var i = new o(this, t, e); return i.jqDeferred.promise(h(this)) }) }, o.makeJQueryPlugin(), o });

// Application Scripts:

// Меню
// Анимация лого и бэкграунд-слайдер на главной странице
// Скролл контента страницы
// Галерея на странице Портфолио
// Слайдер работ Портфолио в боковой панели
// Анимация изображений при скролле
// Если браузер не знает о svg-картинках

jQuery(document).ready(function ($) {
    //Кэшируем
    var $window = $(window),
        $html = $('html'),
        $body = $('body'),
        isScrollActive = false;//флаг состояния - запущен ли плагин скролла

    $body.append('<div id="overlay" class="overlay"></div>');
    var $overlay = $('#overlay');//оверлей

    //
    // Меню
    //---------------------------------------------------------------------------------------
    var slideMenu = (function () {
        var $menu = $('.js-menu'),
            $btn = $('.js-menu-btn'),
            $chair = $('.js-chair'),
            chairActiveClass='active',
            isHome=false,
            method = {};

        if ($('.js-main-slider').length) {//если на главной странице
            isHome=true;
            var $logo = $('.logo-box__content');
            $chair = $('.logo-box__chair');
            chairActiveClass = 'animated';
        }

        method.showMenu = function () {
            $menu.addClass('active');
            $btn.addClass('active');
            method.moveLogoRight();
            $overlay.show().bind('click', method.hideMenu);
        }

        method.hideMenu = function () {
            $menu.removeClass('active');
            $btn.removeClass('active');
            method.moveLogoLeft();
            $overlay.hide().unbind('click', method.hideMenu);
        }

        method.moveLogoRight = function () {//на главной, сдвигаем лого вправо при открытии меню
            if (isHome) {
                $logo.addClass('moved');
            }
        }

        method.moveLogoLeft = function () {
            if (isHome) {
                $logo.removeClass('moved');
            }
        }

        method.animateChair = function () {
            $chair.addClass(chairActiveClass);
            setTimeout(function () { $chair.removeClass(chairActiveClass) }, 2000);
        }

        $('.header').on('click', '.js-menu-btn', function () {
            if ($btn.hasClass('active')) {
                method.hideMenu();
            } else {
                method.showMenu();
                if (isHome) {
                    var winW = verge.viewportW();
                    if (winW >= 768) {
                        setTimeout(function () { method.animateChair() }, 1000);//на главной анимируем кресло с небольшой задержкой на планшетах и выше, т.к. во время этой задержки сдвигаем кресло вправо с замедлением
                    } else {
                        method.animateChair();
                    }
                } else {
                    method.animateChair();//при открытии меню, картинка с креслом анимируется
                }
            }
        });

        $chair.on('click', method.animateChair);//будем анимировать кресло при клике

        return method;
    })();

    //
    // Анимация лого и бэкграунд-слайдер на главной странице
    //---------------------------------------------------------------------------------------
    function initHomePage() {
        var $slider = $('.js-main-slider'),
            $logo = $('.logo-box__wrapper svg'),
            $name = $logo.find('.name'),
            $design = $logo.find('.design'),
            $title = $logo.find('.title'),
            $chair = $('.logo-box__chair'),
            method = {};

        method.initSlider = function () {
            var options = {
                auto: false,
                pager: false,
                controls: false
            }
            $slider.bxSlider(options);
        }

        method.startSlider = function () {
            var options = {
                auto: true,
                pager: false,
                controls: false,
                mode: 'fade', //horizontal, vertical, fade
                pause: 9000,
            }
            $slider.reloadSlider(options);//перезагрузили с новыми опциями
            $slider.goToNextSlide();//перешли на следующий слайд
        }

        method.drawBorder = function () {//прорисовка линий
            $('.logo-box__top, .logo-box__bottom').addClass('active');
        }

        method.drawName = function () {//побуквенно прорисовываем "Григоренко"
            var time = 2000;
            $name.each(function () {
                var $el = $(this);
                setTimeout(function () { $el.addClass('active') }, time);
                time += 300;
            });
        }

        method.drawDesign = function () {//побуквенно показываем "дизайн"
            var time = 3000;
            $design.each(function () {
                var $el = $(this);
                setTimeout(function () { $el.addClass('active') }, time);
                time += 300;
            });
        }

        method.drawTitle = function () {//показываем тайтл
            setTimeout(function () { $title.addClass('active') }, 5000);
        }

        method.showChair = function () {
            setTimeout(function () { $chair.addClass('active') }, 6000);
        }

        method.animateChair = function () {
            $chair.addClass('animated');
            setTimeout(function () { $chair.removeClass('animated') }, 2000);
        }

        method.changeColor = function () {
            setTimeout(function () {
                $('.main-slider').addClass('active');//изменили цвет заливки
                $name.addClass('alt');//меняем цвет с черного на белый
                $design.addClass('alt');
                $title.addClass('alt');
                $chair.find('svg .line').addClass('alt');
                method.animateChair();//качнули кресло
            }, 7000);

            setTimeout(function () { method.startSlider(); }, 11000);//запустили слайдер
        }

        method.openMenu = function () {//если меню еще не открыто к концу анимации - откроем
            var $btn = $('.js-menu-btn');
            setTimeout(function () {
                if (!$btn.hasClass('active')) {
                    //slideMenu.showMenu();
                    $btn.trigger('click');//не используем метод, т.к. нужно качнуть кресло в конце!
                }
            }, 13000);
        }

        method.fallback = function () {//ie8
            $('.logo-box__wrapper').append('<img src="img/logo-white-big.png" alt="" />');
            $chair.append('<img src="img/armchair-white.png" alt="" />');
            $('.main-slider').addClass('active');
        }

        method.initSlider();//подключили плагин слайдера
        method.drawBorder();
        method.drawName();
        method.drawDesign();
        method.drawTitle();
        method.showChair();
        method.changeColor();

        method.openMenu();

        if ($html.hasClass('no-svg')) {//ie8
            method.fallback();
        }
    }
    if($('.js-main-slider').length){initHomePage()}

    

    //
    // Скролл контента страницы
    //---------------------------------------------------------------------------------------
    function initScroll() {
        var $scroll = $('.js-scroll'),
            winW,//будем хранить ширину окна
            rtime, //переменные для пересчета ресайза окна с задержкой delta
            timeout = false,
            delta = 200,
            method = {};

        method.initJSscroll = function () {
            $scroll.perfectScrollbar({
                wheelSpeed: 1,
                minScrollbarLength: 30
            });
            isScrollActive = true;
        }

        method.destroyJSscroll = function () {
            $scroll.perfectScrollbar('destroy');
            isScrollActive = false;
        }

        method.updateJSscroll = function () {
            $scroll.perfectScrollbar('update');
        }

        method.endResize = function () {
            if (new Date() - rtime < delta) {
                setTimeout(method.endResize, delta);
            } else {
                timeout = false;
                //ресайз окончен - пересчитываем
                winW = verge.viewportW();
                if (winW >= 992) {//если десктоп
                    if (!isScrollActive) {
                        method.initJSscroll();//если перешли с мелкого размера на десктоп - подключили плагин
                    } else {
                        method.updateJSscroll();
                    }
                } else {//если мелкий экран
                    if (isScrollActive) {//и плагин активен
                        method.destroyJSscroll();//выключаем его
                    }
                }
            }
        }
        method.startResize = function () {
            rtime = new Date();
            if (timeout === false) {
                timeout = true;
                setTimeout(method.endResize, delta);
            }
        }

        //проверка при первой загрузке страницы
        winW = verge.viewportW();
        if (winW >= 992) {
            method.initJSscroll();

            $scroll.imagesLoaded(function () {
                method.updateJSscroll(); //после загрузки всех изображений в контейнере - обновим скролл
            });
        }



        $window.bind('resize', method.startResize);//отслежиаем ресайз

        return isScrollActive; //передадим значение для функции анимации картинок при скролле
    }
    if ($('.js-scroll').length) { initScroll(); }


    //
    // Галерея на странице Портфолио
    //---------------------------------------------------------------------------------------
    function initGallery() {
        var $gallery = $('.js-gallery'),
            $gallery_el = $gallery.find('.gallery__link'),
            $slider = $('.js-slider'),
            $slider_el = $slider.find('.gallery-slider__link'),
            $slider_img = $slider.find('.gallery-slider__img'),
            isGalleryStart = false, //флаг состояния галереи
            isSliderStart=false, //флаг состояния слайдера
            method = {};

        method.startGallery = function () {
            $('.gallery__nav').show();//покажем блок со стрелками навигации
            $gallery.bxSlider({
                pager: false,
                nextSelector: '.gallery__arrow--next',
                prevSelector: '.gallery__arrow--prev',
                nextText: '<i class="icon-right"></i>',
                prevText: '<i class="icon-left"></i>',
                infiniteLoop: false,
                hideControlOnEnd:true
            });
            isGalleryStart = true;
        }


        method.initLightbox = function () {
            $slider_el.simpleLightbox({
                navText: ['<i class="icon-left"></i>', '<i class="icon-right"></i>'],
                captions: true,
                captionSelector: 'self',
                captionType: 'data',
                captionsData: 'caption',
                close: true,
                closeText: '<i class="icon-cancel"></i>',
                showCounter:true
            });
        }


        method.loadSliderImage = function (el) {//будем подгружать картинки (среднего размера) в слайдер при перемотке
            var source = el.data('src');
            if (source) {
                el.attr('src', source);
            }
        }
        
        method.startSlider = function () {//запускаем слайдер изображений
            $slider.bxSlider({
                pager: false,
                infiniteLoop: false,
                hideControlOnEnd: true,
                slideMargin:20,
                nextSelector: '.gallery-slider__arrow--next',
                prevSelector: '.gallery-slider__arrow--prev',
                nextText: '<i class="icon-right"></i>',
                prevText: '<i class="icon-left"></i>',
                onSlideBefore: function ($slideElement, oldIndex, newIndex) {//перед перемоткой
                    var $img = $slideElement.find('img');
                    method.loadSliderImage($img);//подгрузили картинку
                    var count = $slideElement.find('a').data('count');
                    if (count) {
                        $gallery_el.removeClass('current').filter('[data-count="' + count + '"]').addClass('current');//добавили активный класс превбюшке
                        var page = Math.ceil(count / 9) - 1; //определяем, на какой мы "странице"

                        if (isGalleryStart) {
                            var galleryPage = $gallery.getCurrentSlide();
                            if (galleryPage != page) {//перематываем страничку галереи, если она загружена в слайдере
                                $gallery.goToSlide(page);
                            }
                        }
                    }
                    
                }
            });
            isSliderStart = true;
            method.loadSliderImage($slider_img.eq(0));//показываем первую картинку
            $gallery_el.eq(0).addClass('current');//сделали активной первую превьюшку
        }

        method.goToTarget = function (el) {
            var target = el.data('count');
            $gallery_el.removeClass('current');
            el.addClass('current');
            if (target && isSliderStart) {
                $slider.goToSlide(target - 1);
            }
        }

        if ($gallery_el.length > 9) {//если превьюшек больше 9, запустим их в слайдере, иначе просто отобразим плиткой
            method.startGallery();
        }

        method.startSlider();//запускаем слайдер

        method.initLightbox();//подключили лайтбокс к слайдеру
        
        $gallery.on('click', '.gallery__link', function (e) {//клик по превьюшке
            e.preventDefault();
            method.goToTarget($(this));
        });

    }
    if ($('.js-gallery').length) { initGallery() }

    //
    // Слайдер работ Портфолио в боковой панели
    //---------------------------------------------------------------------------------------
    function initSideSlider() {
        var $slider = $('.js-sideslider'),
            count,
            method = {};

        method.getSliderSettings = function () {
            var setting,
                    settings1 = {
                        maxSlides: 2,
                        minSlides: 2,
                        moveSlides: 2,
                    },
                    settings2 = {
                        maxSlides: 3,
                        minSlides: 3,
                        moveSlides: 3,
                    },
                    settings3 = {
                        maxSlides: 4,
                        minSlides: 4,
                        moveSlides: 4,
                    },
                common = {
                    slideWidth: 87,
                    slideMargin: 10,
                    auto: false,
                    pager: false,
                    mode: 'vertical',
                    infiniteLoop: false,
                    hideControlOnEnd: true,
                    nextSelector: '.side-gallery__arrow--next',
                    prevSelector: '.side-gallery__arrow--prev',
                    nextText: '<i class="icon-down"></i>',
                    prevText: '<i class="icon-up"></i>',
                },
                winW = $window.width();
            if (winW < 1600) {
                setting = $.extend(settings2, common);
            }
            if (winW >= 1600) {
                setting = $.extend(settings3, common);
            }
            return setting;
        }

        method.reloadSliderSettings = function () {
            $slider.reloadSlider($.extend(method.getSliderSettings(), { startSlide: $slider.getCurrentSlide() }));
        }

        count = $slider.children('li').length;
        if (count > 4) {
            $slider.bxSlider(method.getSliderSettings());//если больше 4 элементов в списке, запускаем слайдер
        }
    }
    if ($('.js-sideslider').length) { initSideSlider() }

    //
    // Анимация изображений при скролле
    //---------------------------------------------------------------------------------------
    function scrollAnimations() {
        var $elem = $('.js-animate'),
            $page=$('.js-scroll'),
            animationClass = 'fadeInUp',
            delta,
            method = {};

        method.checkLoad = function () {
            $elem.each(function () {
                var imagePos = $(this).offset().top,
                    winH = $window.height();
                if (imagePos < winH) {
                    $(this).addClass(animationClass);
                }
            });
        }

        method.checkScroll = function (el) {
            var imagePos = el.offset().top,
                fromTop;
            if (isScrollActive) {
                fromTop = $window.outerHeight();
                delta = -100;
            } else {
                fromTop = $window.scrollTop();
                delta = 400;
            }

            if (imagePos < fromTop + delta) {
                el.addClass(animationClass);
            }
        }

        method.checkLoad();

        $page.bind('scroll', function () {
            if (isScrollActive) {//если активен плагин скролла - отслеживаем скролл блока
                $elem.each(function () {
                    method.checkScroll($(this));
                });
            }
        });

        $window.bind('scroll', function () {
            if (!isScrollActive) {//если плагин не активен - отслеживаем скролл страницы
                $elem.each(function () {
                    method.checkScroll($(this));
                });
            }
        });
        
    }
    if($('.js-animate').length){scrollAnimations()}

    //
    // Если браузер не знает о svg-картинках
    //---------------------------------------------------------------------------------------
    if (!Modernizr.svg) {
        $('img[src*="svg"]').attr('src', function () {
            return $(this).attr('src').replace('.svg', '.png');
        });
    }


});

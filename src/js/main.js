// Application Scripts:

// Меню
// Анимация лого и бэкграунд-слайдер на главной странице
// Скролл контента страницы
// Галерея на странице Портфолио
// Слайдер работ Портфолио в боковой панели
// Анимация изображений при скролле
// Если браузер не знает о svg-картинках
// Hover для тач-девайсов (на странице Портфолио)

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
                speed: 5000,
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
                hideControlOnEnd: true,
                useCSS:false
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
                showCounter: true,
                widthRatio: 1
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
                useCSS:false,
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
                    useCSS:false
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

    //
    // Hover для тач-девайсов (на странице Портфолио)
    //---------------------------------------------------------------------------------------
    function addHoverClass(){
        $('.b-grid__link').bind('touchstart touchend', function (e) {
            e.preventDefault();
            $(this).toggleClass('hover');
        });
    }
    if ($('.js-grid').length) {
        addHoverClass();
    }
});

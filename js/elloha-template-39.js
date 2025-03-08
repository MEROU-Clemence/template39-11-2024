$(document).ready(function () {
    // ****** Nav
    // Mobile Nav
    var MobNav = $('.navbar-toggler');
    MobNav.on('click', function () {
        $('.mobile-nav').toggleClass('menu-mobile-active');
        $('.navbar-toggler .btn-menu').toggleClass('d-none');
        $('.first-nav').toggleClass('first-nav-fixed');
        $('main').toggleClass('main-margin-top');
    });

    // Sous-menu mobile
    $('.clic-sub-menu').on('click', function () {
        if ($(this).children('.sub-menu').hasClass('sub-menu-active')) {
            $('.clic-sub-menu .sub-menu').removeClass('sub-menu-active');
        } else {
            $('.clic-sub-menu .sub-menu').removeClass('sub-menu-active');
            $(this).children('.sub-menu').addClass('sub-menu-active');
        }
    });

    // Sous-menu computer
    $('.clic-sub-menu-2').on('click', function () {
        $('.clic-sub-menu.clic-sub-menu-2 .sub-menu').removeClass('sub-menu-active');
    });

    // ****** Titre H1 principal, taille variable
    $(".principal-title h1").fitText(1, { minFontSize: '40px', maxFontSize: '130px' });
    $(".big-title-contain .big-title").fitText(1, { minFontSize: '40px', maxFontSize: '130px' });

    // ****** Texte presentation page Home
    if ($(".description").length > 0) {
        var $description = $(".description");
        var $seeMore2 = $("#seeMore2");
        var $seeLess2 = $("#seeLess2");

        // Check si le texte est limité, on affiche pas les boutons
        if ($description[0].scrollHeight <= $description.height()) {
            $seeMore2.hide();
            $seeLess2.hide();
        } else {
            $seeMore2.show();
            $seeLess2.hide();
        }

        // Voir plus presentation
        $seeMore2.on('click', function (e) {
            e.preventDefault();
            $description.css('height', 'auto').addClass("expanded");
            $seeMore2.hide();
            $seeLess2.show();
        });

        // Voir moins presentation
        $seeLess2.on('click', function (e) {
            e.preventDefault();
            $description.css('height', 'auto').removeClass("expanded");
            $seeMore2.show();
            $seeLess2.hide();
        });
    };

    // ****** Météo
    function updateWeatherImage() {
        // Parcourt chaque icône active du carrousel
        $('.owl-item.active .weather-icon').each(function () {
            var weatherIcon = $(this).attr('data');
            var $svgImage = $('.meteo .img-meteo');
            var baseUrl = "https://static.elloha.com/webgen/img/weather/";

            if (weatherIcon && weatherIcon.trim() !== '') {
                // Si une icône météo est définie, crée le chemin complet de l'image
                var iconPath = baseUrl + weatherIcon + '.jpeg';
                $svgImage.attr('xlink:href', iconPath);
            } else {
                // Valeur par défaut si aucune icône météo n'est définie
                var defaultIconPath = baseUrl + 'clear-day.jpeg';
                $svgImage.attr('xlink:href', defaultIconPath);
            }
        });
    }

    // Mettre à jour l'image lorsque le carrousel change de slide
    $('.slider-meteo').on('translated.owl.carousel', function () {
        updateWeatherImage();
    });

    // Module météo ajoute temps qu'il fait
    $('.weather-trad').each(function () {
        var weatherTrad = $(this).attr('data');

        // Traduction de l'icône météo pour afficher dans le weather
        var weatherTranslation;
        switch (weatherTrad) {
            case 'clear-day':
                weatherTranslation = 'Clair';
                break;
            case 'Cloudy':
                weatherTranslation = 'Nuageux';
                break;
            case 'fog':
                weatherTranslation = 'Brouillard';
                break;
            case 'partly-cloudy-day':
                weatherTranslation = 'Mi-couvert';
                break;
            case 'rain':
                weatherTranslation = 'Pluie';
                break;
            case 'sleet':
                weatherTranslation = 'Verglas';
                break;
            case 'snow':
                weatherTranslation = 'Neige';
                break;
            case 'wind':
                weatherTranslation = 'Vent';
                break;
            default:
                weatherTranslation = 'Undefined';
                break;
        }

        // Affiche la traduction dans le div .weather-trad
        $(this).text(weatherTranslation);
    });

    // ****** Voir plus SCEA
    $(".options-scea").hide();
    $(".options-scea").slice(0, 12).show();

    $("#seeMore1").on('click', function (e) {
        e.preventDefault();

        $(".options-scea:hidden").slideDown();

        $("#seeMore1").hide();
        $("#seeLess1").show();
    });

    // Voir moins SCEA
    $("#seeLess1").on('click', function (e) {
        e.preventDefault();

        $(".options-scea").not(":lt(12)").slideUp();

        $("#seeMore1").show();
        $("#seeLess1").hide();
    });

    // ****** Voir plus SCEA-details
    $(".options-scea-details").hide();
    $(".options-scea-details").slice(0, 0).show();

    $("#seeMore3").on('click', function (e) {
        e.preventDefault();

        $(".options-scea-details:hidden").slideDown();

        $("#seeMore3").hide();
        $("#seeLess3").show();
    });

    // Voir moins SCEA-details
    $("#seeLess3").on('click', function (e) {
        e.preventDefault();

        $(".options-scea-details").not(":lt(0)").slideUp();

        $("#seeMore3").show();
        $("#seeLess3").hide();
    });

    // ****** Clic description AROUND
    // Clic sur "Voir plus" 
    $(".seeMore4").on("click", function (e) {
        e.preventDefault();
        var $container = $(this).closest(".descrip-around-contain");
        var $description = $container.find(".description-around");
        $description.addClass("expanded");
        $container.find(".seeMore4").hide();
        $container.find(".seeLess4").show();
    });

    // Clic sur "Voir moins"
    $(".seeLess4").on("click", function (e) {
        e.preventDefault();
        var $container = $(this).closest(".descrip-around-contain");
        var $description = $container.find(".description-around");
        $description.removeClass("expanded");
        $container.find(".seeMore4").show();
        $container.find(".seeLess4").hide();
    });

    // ****** Clic description NEWS
    $('.infos-contain-news').each(function () {
        var $this = $(this);
        var $description = $this.find('.description-news');
        var $seeMore = $this.find('.seeMore5');
        var $seeLess = $this.find('.seeLess5');

        // Vérifier si le texte est limité ou non pour afficher les boutons si besoin
        if ($description[0].scrollHeight > $description.height()) {
            $seeMore.show();
            $seeLess.hide();
            $description.addClass("height-more");
        } else {
            $seeMore.hide();
            $seeLess.hide();
            $description.removeClass("height-more");
        }

        // Voir plus
        $seeMore.off('click').on('click', function (e) {
            e.preventDefault();
            e.stopPropagation();
            $description.addClass("is-expanded");
            $seeMore.hide();
            $seeLess.show();
        });

        // Voir moins
        $seeLess.off('click').on('click', function (e) {
            e.preventDefault();
            e.stopPropagation();
            $description.removeClass("is-expanded");
            $seeMore.show();
            $seeLess.hide();
        });
    });

    // Clics sur les liens des prix chèques cadeaux
    $('.all-prices-vouchers a').on('click', function (event) {
        event.preventDefault();

        var targetId = $(this).attr('id');

        // Trouver l'élément correspondant dans le slider
        var targetElement = $(targetId);
        if (targetElement.length) {
            var index = $('.vouchers-slider').find('.owl-item').filter(function () {
                return $(this).find(targetId).length > 0;
            }).index();

            // Si un index valide est trouvé, déplacer le slider
            if (index !== -1) {
                $('.vouchers-slider').trigger('to.owl.carousel', [index, 600]);
            } else {
                console.error("Impossible de trouver l'index dans Owl Carousel pour :", targetId);
            }
        } else {
            console.error("Cible non trouvée pour :", targetId);
        }
    });

    // Détecter le changement dans Owl Carousel pour le .active
    $('.vouchers-slider').on('changed.owl.carousel', function (event) {
        var currentIndex = event.item.index;

        // Sélectionner l'élément actif dans le slider
        var activeSlide = $(event.target).find('.owl-item').eq(currentIndex).find('.giftcard-index');

        if (activeSlide.length) {
            var activeId = activeSlide.attr('id');
            console.log("Élément actif dans le slider :", activeId);

            $('.all-prices-vouchers a').removeClass('active');

            $('.all-prices-vouchers a[href="#' + activeId + '"]').addClass('active');

        }
    });
});

$(document).ready(function () {
    $('.slider-meteo').owlCarousel({
        loop: false,
        rewind: true,
        autoplay: false,
        items: 1,
        navText: ["<i class='las la-arrow-left'></i>", "<i class='las la-arrow-right'></i>"],
        responsiveClass: true,
        dots: false,
        nav: true,
        responsive: {
            0: {
                margin: 20,
                touchDrag: true,
                mouseDrag: true,
            },
            1220: {
                margin: 42,
                touchDrag: false,
                mouseDrag: true,
            },
        }
    });
    $('.offers-slider').owlCarousel({
        loop: false,
        rewind: true,
        autoplay: false,
        navText: ["<i class='las la-arrow-left'></i>", "<i class='las la-arrow-right'></i>"],
        responsiveClass: true,
        dots: false,
        nav: true,
        responsive: {
            0: {
                items: 1,
                margin: 24,
                touchDrag: true,
                mouseDrag: true,
            },
            768: {
                items: 2,
                margin: 24,
                touchDrag: true,
                mouseDrag: true,
            },
            1220: {
                items: 3,
                margin: 40,
                touchDrag: false,
                mouseDrag: true,
            },
        }
    });
    $('.options-slider').owlCarousel({
        loop: false,
        rewind: true,
        autoplay: false,
        navText: ["<i class='las la-arrow-left'></i>", "<i class='las la-arrow-right'></i>"],
        responsiveClass: true,
        dots: false,
        nav: true,
        responsive: {
            0: {
                items: 1,
                margin: 24,
                touchDrag: true,
                mouseDrag: true,
            },
            768: {
                items: 2,
                margin: 24,
                touchDrag: true,
                mouseDrag: true,
            },
            1220: {
                items: 3,
                margin: 40,
                touchDrag: false,
                mouseDrag: true,
            },
        }
    });
    $('.special-offers-slider').owlCarousel({
        loop: false,
        rewind: true,
        autoplay: false,
        navText: ["<i class='las la-arrow-left'></i>", "<i class='las la-arrow-right'></i>"],
        responsiveClass: true,
        dots: false,
        nav: true,
        responsive: {
            0: {
                items: 1,
                margin: 24,
                touchDrag: true,
                mouseDrag: true,
            },
            768: {
                items: 2,
                margin: 24,
                touchDrag: true,
                mouseDrag: true,
            },
            1220: {
                items: 3,
                margin: 40,
                touchDrag: false,
                mouseDrag: true,
            },
        }
    });
    $('.slider-gallery').owlCarousel({
        loop: true,
        rewind: false,
        autoplay: true,
        navText: ["<i class='las la-arrow-left'></i>", "<i class='las la-arrow-right'></i>"],
        responsiveClass: true,
        dots: false,
        nav: true,
        items: 1,
        margin: 20,
        responsive: {
            0: {
                touchDrag: true,
                mouseDrag: true,
            },
            1220: {
                touchDrag: false,
                mouseDrag: true,
            },
        }
    });
    $('.giftcards-slider').owlCarousel({
        loop: false,
        rewind: true,
        autoplay: false,
        navText: ["<i class='las la-arrow-left'></i>", "<i class='las la-arrow-right'></i>"],
        responsiveClass: true,
        dots: false,
        nav: true,
        responsive: {
            0: {
                items: 1,
                margin: 24,
                touchDrag: true,
                mouseDrag: true,
            },
            768: {
                items: 2,
                margin: 24,
                touchDrag: true,
                mouseDrag: true,
            },
            1220: {
                items: 4,
                margin: 40,
                touchDrag: false,
                mouseDrag: true,
            },
        }
    });
    $('.news-slider').owlCarousel({
        loop: false,
        rewind: true,
        autoplay: false,
        navText: ["<i class='las la-arrow-left'></i>", "<i class='las la-arrow-right'></i>"],
        responsiveClass: true,
        dots: false,
        nav: true,
        responsive: {
            0: {
                items: 1,
                margin: 24,
                touchDrag: true,
                mouseDrag: true,
            },
            768: {
                items: 2,
                margin: 24,
                touchDrag: true,
                mouseDrag: true,
            },
            1220: {
                items: 4,
                margin: 40,
                touchDrag: false,
                mouseDrag: true,
            },
        }
    });
    $('.avis-slider').owlCarousel({
        loop: true,
        rewind: false,
        autoplay: false,
        navText: ["<i class='las la-arrow-left'></i>", "<i class='las la-arrow-right'></i>"],
        responsiveClass: true,
        dots: false,
        nav: true,
        items: 1,
        margin: 20,
        responsive: {
            0: {
                touchDrag: true,
                mouseDrag: true,
            },
            1220: {
                touchDrag: false,
                mouseDrag: true,
            },
        }
    });
    $('.slider-others-pages').owlCarousel({
        loop: false,
        rewind: false,
        navText: ["<i class='las la-arrow-left'></i>", "<i class='las la-arrow-right'></i>"],
        autoWidth: true,
        responsiveClass: true,
        dots: false,
        nav: false,
        responsive: {
            0: {
                autoplay: false,
                margin: 16,
                touchDrag: true,
                mouseDrag: true,
            },
            1024: {
                autoplay: true,
                margin: 24,
                touchDrag: true,
                mouseDrag: true,

            },
            1220: {
                autoplay: true,
                margin: 24,
                touchDrag: false,
                mouseDrag: true,
            },
        }
    });
    $('.slider-page-page').owlCarousel({
        loop: false,
        rewind: true,
        autoplay: true,
        items: 1,
        navText: ["<i class='las la-arrow-left'></i>", "<i class='las la-arrow-right'></i>"],
        margin: 20,
        responsiveClass: true,
        dots: false,
        nav: true,
        responsive: {
            0: {
                touchDrag: true,
                mouseDrag: true,
            },
            1220: {
                touchDrag: false,
                mouseDrag: true,
            },
        }
    });
    $('.vouchers-slider').owlCarousel({
        loop: false,
        rewind: true,
        autoplay: false,
        navText: ["<i class='las la-arrow-left'></i>", "<i class='las la-arrow-right'></i>"],
        margin: 20,
        items: 1,
        autoHeight: true,
        responsiveClass: true,
        dots: false,
        nav: false,
        responsive: {
            0: {
                touchDrag: true,
                mouseDrag: true,
            },
            1220: {
                touchDrag: false,
                mouseDrag: true,
            },
        }
    });
});
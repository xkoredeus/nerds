$(() => {
    $(window).on('load', function hidePreloader() {
        $('.preloader__wrp').fadeOut();
    });
});

$(() => {
    const teamSlider = new Swiper('.team-slider', {
        navigation: {
            nextEl: '.team .swiper-button-next',
            prevEl: '.team .swiper-button-prev',
        },
        centeredSlides: true,
        breakpoints: {
            0: {
                slidesPerView: 1,
                spaceBetween: 20,
            },
            748: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
            1200: {
                initialSlide: 1,
                slidesPerView: 3,
                spaceBetween: 30,
                scrollbar: {
                    el: '.team-slider .swiper-scrollbar',
                    hide: true,
                },
            },
        }
    });
});

$(() => {
    $(".js-select").select2({
        minimumResultsForSearch: -1,
    });
});

$(() => {
    $('.js-toggle-menu').on('click', function toggleMenu() {
        $('.header').toggleClass('show-menu');
        $('body').toggleClass('fixed');
    });
});

$(() => {
    const testimonialsSlider = new Swiper('.testimonials-slider', {
        navigation: {
            nextEl: '.testimonials-slider__wrapper .swiper-button-next',
            prevEl: '.testimonials-slider__wrapper .swiper-button-prev',
        },
        pagination: {
            el: '.testimonials-slider__wrapper .swiper-pagination',
            clickable: true,
        },
        slidesPerView: 1,
        loop: true,

        effect: 'flip',
    });
});

$(() => {
    const diffSliderTop = new Swiper('.diff-slider__top', {
        navigation: {
            nextEl: '.diff__nav--top .swiper-button-next',
            prevEl: '.diff__nav--top .swiper-button-prev',
        },
        slidesPerView: 1,
        loop: true,
        effect: 'fade',
        cubeEffect: {
            shadow: false,
            slideShadows: false,
        },
    });
    const diffSliderBottom = new Swiper('.diff-slider__bottom', {
        navigation: {
            nextEl: '.diff__nav--bottom .swiper-button-next',
            prevEl: '.diff__nav--bottom .swiper-button-prev',
        },
        slidesPerView: 1,
        loop: true,
        effect: 'fade',
    });
});

$(() => {
    let rect = $('.testimonials')[0].getBoundingClientRect();
    let mouse = {x: 0, y: 0, moved: false};

    $(".testimonials").mousemove(function(e) {
        mouse.moved = true;
        mouse.x = e.clientX - rect.left;
        mouse.y = e.clientY - rect.top;
    });

    // Ticker event will be called on every frame
    TweenLite.ticker.addEventListener('tick', function(){
        if (mouse.moved){
            parallaxIt(".testimonials__item:nth-child(1) .testimonials__image", -30);
            parallaxItTwo(".testimonials__item:nth-child(2) .testimonials__image", -100);
            parallaxIt(".testimonials__item:nth-child(3) .testimonials__image", -80);
            parallaxItTwo(".testimonials__item:nth-child(4) .testimonials__image", -35);
            parallaxIt(".testimonials__item:nth-child(5) .testimonials__image", -30);
            parallaxItTwo(".testimonials__item:nth-child(6) .testimonials__image", -50);
            parallaxIt(".testimonials__item:nth-child(7) .testimonials__image", -30);
            parallaxItTwo(".testimonials__item:nth-child(8) .testimonials__image", -70);
            parallaxIt(".testimonials__item:nth-child(9) .testimonials__image", -110);
        }
        mouse.moved = false;
    });

    function parallaxIt(target, movement) {
        TweenMax.to(target, 0.5, {
            x: (mouse.x - rect.width / 2) / rect.width * movement,
            y: (mouse.y - rect.height / 2) / rect.height * movement
        });
    }
    function parallaxItTwo(target, movement) {
        TweenMax.to(target, 1, {
            x: (mouse.x - rect.width / 2) / rect.width * movement,
            y: (mouse.y - rect.height / 2) / rect.height * movement
        });
    }

    $(window).on('resize scroll', function(){
        rect = $('.testimonials')[0].getBoundingClientRect();
    })
});
$(() => {
    $('[data-fancybox]').fancybox({
        animationDuration : 600,
        animationEffect   : 'slide-in-in',
        touch : false
    });
});

$(() => {
    $('.js-gallery-toggle').on('click', function showGalleryDescrition() {
        if (!$(this).hasClass('active')) {
            $(this).addClass('active');
        } else {
            $(this).removeClass('active');
        }
    })
});


$(document).ready(function() {

    var interleaveOffset = -.5;

    var interleaveEffect = {
    
        onProgress: function(swiper, progress){
            for (var i = 0; i < swiper.slides.length; i++){
            var slide = swiper.slides[i];
            var translate, innerTranslate;
            progress = slide.progress;
            
            if (progress > 0) {
                translate = progress * swiper.width;
                innerTranslate = translate * interleaveOffset;        
            }
            else {        
                innerTranslate = Math.abs( progress * swiper.width ) * interleaveOffset;
                translate = 0;
            }

            $(slide).css({
                transform: 'translate3d(' + translate + 'px,0,0)'
            });

            $(slide).find('.slide-inner').css({
                transform: 'translate3d(' + innerTranslate + 'px,0,0)'
            });
            }
        },

        onTouchStart: function(swiper){
            for (var i = 0; i < swiper.slides.length; i++){
            $(swiper.slides[i]).css({ transition: '' });
            }
        },

        onSetTransition: function(swiper, speed) {
            for (var i = 0; i < swiper.slides.length; i++){
            $(swiper.slides[i])
                .find('.slide-inner')
                .andSelf()
                .css({ transition: speed + 'ms' });
            }
        }
    };

    var swiperOptions = {
    loop: true,
    speed: 1000,
    grabCursor: true,
    watchSlidesProgress: true,
    mousewheelControl: true,
    autoplay: {
        delay: 5000,
        loop: true,
    },
    };

    swiperOptions = $.extend(swiperOptions, interleaveEffect);

    var swiper = new Swiper('', swiperOptions);

    /*Index Page*/
    var swiper = new Swiper('#header-slider', {
        effect: 'fade',
        pagination: {
            el: '#header-swiper-pagination',
            clickable: true,
        },
        autoplay: {
            delay: 5000,
            loop: true,
        },
    });

    var swiper = new Swiper('#news-slider', {
        pagination: {
            el: '#news-swiper-pagination',
            clickable: true,
        },
    });

    var swiper = new Swiper('#event1-slider', {
        slidesPerView: 'auto',
        spaceBetween: 30,
    });

    var swiper = new Swiper('#event2-slider', {
        pagination: {
            el: '#event2-swiper-pagination',
            clickable: true,
        },
    });

    var swiper = new Swiper('#gallery-slider', {
        navigation: {
            nextEl: '#gallery-swiper-button-next',
            prevEl: '.swiper-button-prev',
            clickable: true,
        },
    });

    var swiper = new Swiper('#welcome-slider', {
        effect: 'fade',
        pagination: {
            el: '#welcome-swiper-pagination',
            clickable: true,
        },
        autoplay: {
            delay: 5000,
            loop: true,
        },
    });

    /* Partnership */
    var swiper = new Swiper('#pearson-slider', {
        navigation: {
            nextEl: '#pearson-swiper-button-next',
            prevEl: '.swiper-button-prev',
            clickable: true,
        },
    });

    var swiper = new Swiper('#northampton-slider', {
        navigation: {
            nextEl: '#northampton-swiper-button-next',
            clickable: true,
        },
    });

    var swiper = new Swiper('#event-and-activity-slider', {
        pagination: {
            el: '#event-and-activity-swiper-pagination',
            clickable: true,
        },
    });
    
    var swiper = new Swiper('#events-slider', {
    });
    
    var swiper = new Swiper('#event-gallery-slider', {
        navigation: {
            nextEl: '#event-gallery-swiper-button-next',
            prevEl: '.swiper-button-prev',
            clickable: true,
        },
    });

    $(".sub-menu").click(function(){
        if($(this).children("img").attr("src") == "images/down.svg") {
            $(".sub-menu").children("img").attr("src", "images/down.svg");
            $(".sub-menu-collapsed").removeClass("show").addClass("hide");
            $(this).children("img").attr("src", "images/up.svg");
            $(this).next(".sub-menu-collapsed").removeClass("hide").addClass("show");
        } else {
            $(this).children("img").attr("src", "images/down.svg");
            $(this).next(".sub-menu-collapsed").removeClass("show").addClass("hide");
        }
    });

    $(".hide-menu").click(function() {
        $("#nav-content").removeClass("show");
    });

});

function changeImgDir(collapseBtn) {
    if($(collapseBtn).children("img").attr("src") == "images/down.svg") {
        $(collapseBtn).children("img").attr("src", "images/up.svg");
    } else {
        $(collapseBtn).children("img").attr("src", "images/down.svg");
    }
}
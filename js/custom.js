
$(document).ready(function() {

    /*Index Page*/
    var swiper = new Swiper('#header-slider', {
        pagination: {
            el: '#header-swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            clickable: true,
        },
    });

    var swiper = new Swiper('#news-slider', {
        pagination: {
            el: '#news-swiper-pagination',
            clickable: true,
        },
    });

    var swiper = new Swiper('#event1-slider', {});

    var swiper = new Swiper('#event2-slider', {
        pagination: {
            el: '#event2-swiper-pagination',
            clickable: true,
        },
    });

    var swiper = new Swiper('#gallery-slider', {
        navigation: {
            nextEl: '#gallery-swiper-button-next',
            clickable: true,
        },
    });

    /* Partnership */
    var swiper = new Swiper('#pearson-slider', {
        navigation: {
            nextEl: '#pearson-swiper-button-next',
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
            clickable: true,
        },
    });

    $(".sub-menu").click(function(){
        if ($(this).children().hasClass("fa-chevron-up")) {
            $(this).children().removeClass("fa-chevron-up").addClass("fa-chevron-down");
        } else {
            $(".sub-menu").children().removeClass("fa-chevron-up").addClass("fa-chevron-down");
            $(this).children().removeClass("fa-chevron-down").addClass("fa-chevron-up");
        }
    });

    
    $(".program-sub-menu").click(function() {
        var title = $(this).text();
        programmesTitle = title;
        window.location = 'programmes.html?title=' + title;
    });

    $(".hide-menu").click(function() {
        $("#nav-content").removeClass("show");
    });

});

// $.get("header.html", function(data){
//     alert(data)
//     $("#miu-header").replaceWith(data);
// });
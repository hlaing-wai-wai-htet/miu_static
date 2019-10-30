$(document).ready(function() {
    var swiper = new Swiper('.swiper-container', {
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            clickable: true,
        },
    });

    $(".sub-menu").click(function(){
        if ($(this).children().hasClass("fa-chevron-down")) {
            $(this).children().removeClass("fa-chevron-down").addClass("fa-chevron-up");
        } else {
            $(this).children().removeClass("fa-chevron-up").addClass("fa-chevron-down");
        }
    });

    $(".hide-menu").click(function() {
        $("#nav-content").removeClass("show");
    });
});
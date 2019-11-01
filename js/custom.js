
$(document).ready(function() {

    // $("header").load("header.html");

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

    $(".sub-menu").click(function(){
        if ($(this).children().hasClass("fa-chevron-down")) {
            $(this).children().removeClass("fa-chevron-down").addClass("fa-chevron-up");
        } else {
            $(this).children().removeClass("fa-chevron-up").addClass("fa-chevron-down");
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

// var subMenu = document.querySelectorAll('.program-sub-menu');

// for (var i = 0; i < subMenu.length; i++) {
//     subMenu[i].addEventListener('click', function(event) {

//         location.href="programmes.html";
//         this.programmesTitle = 'hi';
//     });
// }

// document.addEventListener("emit",function(e) {
//                 console.log(e.detail);
//                 $("#program-title").text(e.detail);
//             }); 

// // function replace_submenu() {
// //     debugger;
// $(this).attr("href", "programmes.html");
// //     var title = $(this).text();
// //     $("#program-title").text(title);
// // }

// $.get("header.html", function(data){
//     alert(data)
//     $("#miu-header").replaceWith(data);
// });
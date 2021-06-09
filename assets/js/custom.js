$(window).on("load", function() {
    $(".js-mega-menu").HSMegaMenu({
        event: "hover",
        pageContainer: $(".container"),
        breakpoint: 992,
        hideTimeOut: 0
    })
}),
$(document).ready(function(){
    $.HSCore.components.HSHeader.init($("#header"));

    // Sticky Header
    var win = $(this);
    var winWdt = win.width();
    var winHgt = win.height();
    var headHgt = $('.header-section nav').height();

    $(window).on('load scroll', function(){
        if (winWdt > 991) {
            $(window).scroll(function (e) {
                var scroll = $(window).scrollTop();
                if (scroll >= 10) {
                    $('.header-section').addClass("fix-header");
                } else {
                    $('.header-section').removeClass("fix-header");
                }
            });
        }
    })

    $('.navbar-toggler').on('click', function(){
        $('body').toggleClass('navbar-show');
    })

    // Back To Top Button
    var backButton = $('.back-to-top');
    $(window).scroll(function() {
        if ($(window).scrollTop() > 600) {
          backButton.addClass('visible');
        } else {
          backButton.removeClass('visible');
        }
    });
    backButton.on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({scrollTop:0}, 1000);
    });

    // AOS animation 
    AOS.init({
        easing: 'ease-in-out-back',
        duration: 1200,
        disable: false,
        once: true
    });
});

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

      $(document).ready(function(){

        $('#searchbar').focus();

        $('#donate-buttons').on('click', '.btn-blue', function(e) {
          e.preventDefault();
          $('.active').removeClass('active');
          $('#other-input').hide().siblings('#other').show();
          $(this).filter('.btn-blue').addClass("active");
          var value = $(this).data('impact');
          $(this).closest('div').find('p').text("" + value);
          $('#other-input').find('input').val('');  
        });
          
        $('.btn-green').on('click', function() {
          var dollar;
          var input = $('#other-input').find('input').val();
          if ( !input ) {
            dollar = $('.active').data('dollars');
           } else if ( $.trim(input) === '' || isNaN(input)) {
            // empty space leaves value = 'undefined'. 
            // Have to fix $.trim(input) == '' above so that it works.
            console.log('Yes');
            dollar = "Please enter a number."; 
          } else {
            dollar = input;
          }
          $('#price').text(""+dollar);
        });

        $('#other').on('click', function(e) {
          e.preventDefault(); 
          var buttons = $(this).parent('#donate-buttons');
          buttons.find('.active').removeClass('active');
          var other = $(this).hide().siblings('#other-input');
          other.show();
          other.find('input').focus();
          var pText = buttons.siblings('p');
          pText.text("Thank you!");
          var oValue = other.find('input');
          oValue.keyup(function() {
            if ( oValue.val() > 50 ) {
              pText.text("Thank you!" + " You\'re donation covers housing and counseling services for " + oValue.val()/25 + " people.");
            } else {
              pText.text("Thank you!");
            }
          });
        }); 

      });

(function() {
  'use strict';
  window.addEventListener('load', function() {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
})();

$("#showForm").change(function() {
   $("#duties").toggle();
});

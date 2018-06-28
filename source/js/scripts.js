/*****************
jQuery
*****************/

$(document).ready(function () {
  var stickyTop = $('.page-content').offset().top;
  //WordsRotator
  wordsRotator();
  //Parallax effect
  $(window).scroll(function() {
    parallax();
    //Logo fadeOut
    if ($(this).scrollTop() > 250) {
      $('.header-logo').css('opacity', '0')
    }
    else {
      $('.header-logo').css('opacity', '1')
    };

    //Fading In Nav
    if ($(this).scrollTop() >= stickyTop) {
      $('#nav').removeClass('hide');
    }
    else {
      $('#nav').addClass('hide');
    };

  });

  function parallax() {
    var wScroll = $(window).scrollTop();
    $('.parallax__layer__0').css('background-position', 'center '+(-wScroll*0.02)+'px');
    $('.parallax__layer__1').css('background-position', 'center '+(-wScroll*0.1)+'px');
    $('.parallax__layer__2').css('background-position', 'center '+(-wScroll*0.2)+'px');
    $('.parallax__layer__3').css('background-position', 'center '+(-wScroll*0.5)+'px');
  };

  function wordsRotator() {
    var words = [
      'Strategie',
      'Konzeption',
      'Umsetzung',
      'SEO',
      'Social Media Integration'
    ], i=0;

    setInterval(function() {
      $('#myWords').fadeOut(function(){
        $(this).html(words[i=(i+1)%words.length]).fadeIn();
      });
      }, 3000);
    };

  //open contact form by clicking buttons with class of open-contact
  $('.open-contact').click(function(){
    $('.contact-bg').fadeIn(500);
    //$('.contact-box').delay(200).slideDown(250);
    $('.contact-box').css('display', 'block');
    $('.contact-box').delay(150).animate({top: '-=10%', opacity: '1', duration: '100'});
  });

  //close contact form by clicking close-button and outside form
  $('.close-contact').click(function(){
    $('.contact-box').animate({top: '+=10%', opacity: '0', duration: '100'}, function() {
      //waiting for animation to finish then setting display: none
      $('.contact-box').css('display', 'none');
    });
    $('.contact-bg').fadeOut(500);
  });

  // Smooth scrolling
  $('.downArrow').click(function(e){

    e.preventDefault();
    $('body,html').animate({
      scrollTop: $('#products').offset().top
    })
  });


});

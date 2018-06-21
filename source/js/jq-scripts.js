$(document).ready(function () {
  //open contact form by clicking buttons with class of open-contact
  $('.open-contact').click(function(){
    $('.contact-bg').fadeIn(500);
    //$('.contact-box').delay(200).slideDown(250);
    $('.contact-box').css('display', 'block');
    $('.contact-box').delay(150).animate({top: '-=10%', opacity: '1', duration: '100'});
  });

  //close contaact form by clicking close-button and outside form
  $('.close-contact').click(function(){
    $('.contact-box').animate({top: '+=10%', opacity: '0', duration: '100'}, function() {
      //waiting for animation to finish then setting display: none
      $('.contact-box').css('display', 'none');
    });
    $('.contact-bg').fadeOut(500);
  });
});

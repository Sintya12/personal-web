$(document).ready(function() {
  $(window).scroll(function() {
    console.log($(window).scrollTop());
    if ($(window).scrollTop() > 500) {
      $('.navbar').addClass('solid');
    }else{
      $('.navbar').removeClass('solid');
    }
  });
});

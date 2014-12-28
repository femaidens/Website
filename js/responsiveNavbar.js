$(window).scroll(function() {
  if ($(document).scrollTop() > 50) {
    $('nav').addClass('shrink');
  } else {
    $('nav').removeClass('shrink');
  }
});

var collapsedMenuIsOpen = false;
var collapsedMenuWasOpen = false;

$(window).resize(function() {
  if ($('.navbar-collapse').hasClass('in')) {
    collapsedMenuIsOpen = true;
  }
  else {
    collapsedMenuIsOpen = false;
  }
  if ($(window).width() > 750 && collapsedMenuIsOpen) {
    $('.navbar-collapse').removeClass('in');
    collapsedMenuWasOpen = true;
  }
  if ($(window).width() < 750 && collapsedMenuWasOpen) {
    $('.navbar-collapse').addClass('in');
    collapsedMenuWasOpen = false;
  }
});
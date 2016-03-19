

var  tn = $(".topnav");
    mns = "main-nav-scrolled";
    sld = $('#slider').height();

$(window).scroll(function() {
  if( $(this).scrollTop() > sld ) {
    tn.addClass(mns);
  } else {
    tn.removeClass(mns);
  }
});
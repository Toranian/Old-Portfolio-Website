// Code by Isaac Morrow

//toggles the navigation bar for mobile.
function toggleNav() {
  var navbar = document.querySelector("#navbar");
  var menu = document.querySelector("#menu");
  var backgroundimage = document.querySelector("#backgroundimage");

  menu.classList.toggle("change");
  navbar.classList.toggle("movenav");
}

// changes the styling after the image is scrolled past.
$(document).scroll(function() {
    var currentscroll = $(document).scrollTop();
    var distance = $("#about").offset().top;

    if (currentscroll + 10 > distance) {
      $(".nav-link").addClass("nav-link-new");
      $("#chevron").hide();
      $("nav").addClass("navbar-new");
    }

    else {
      $(".nav-link").removeClass("nav-link-new");
      $("#chevron").show();
      $("nav").removeClass("navbar-new");
    }

})

// smooth scrolling.
$(function() {
  $('a[href^="#"]').on('click', function (e) {
    e.preventDefault();

    var targetEle = this.hash;
    var $targetEle = $(targetEle);

    $('html, body').stop().animate({
      'scrollTop': $targetEle.offset().top
    }, 1000, 'swing', function () {
      window.location.hash = targetEle;
    });
  });
});

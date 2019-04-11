// function toggleNav() {
//   var element = document.getElementById("navbar");
//   if (element.style.display === "none") {
//     element.style.display = "block";
//     // element.style.transform = "translateX(100px)"
//   }
//   else {
//     element.style.display = "none";
//     // element.style.transform = "translateX(-100px)"
//
//   }
// }
function toggleNav() {
  var navbar = document.querySelector("#navbar");
  var menu = document.querySelector("#menu");
  var backgroundimage = document.querySelector("#backgroundimage");

  // backgroundimage.classList.toggle("blur")
  menu.classList.toggle("change");
  navbar.classList.toggle("movenav");
}

$(document).scroll(function() {
    var currentscroll = $(document).scrollTop();
    var distance = $("#about").offset().top;
    var screen_width = $(window.width());

    if (currentscroll + 20 > distance && screen_width >= 1100) {
      $(".nav-link").css({
        "border-bottom":"2px solid black",
        "border-top":"none",
        "color":"black",
      })

      $(".nav-link:hover").css({
        "background-color":"rgba(0, 0, 0, 0.3)"
      })

      $("#chevron").css({
        "border-right":"2px solid black"
      })
    }

    else {
      $(".nav-link").css({
        "border-bottom":"2px solid white",
        "border-top":"2px solid white",
        "color":"white"
      })

      $("#chevron").css({
        "border-right":"2px solid black"
      })


    }

})


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

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
    if (currentscroll > distance) {
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


// $(function() {
// });

// $(document).scroll(function() {
//   var progress = $(document).scrollTop();
//   if (progress >= 1080) {
//     $("nav-link").css("border-bottom":"2px black solid");
//     console.log("past 1080pixels");
//   }
//   console.log(progress)
// })


// $(document).scroll(function() {
//     console.log($(document).scrollTop());
// })

// var viewableOffset = $("#home").offset().top - $(window).scrollTop();

// var distance = $("#home").offset().top;
// console.log(distance)



// $('a[href^="#"]').on('click', function (e) {
//   e.preventDefault();

//   var targetEle = this.hash;
//   var $targetEle = $(targetEle);

//   $('html, body').stop().animate({
//       'scrollTop': $targetEle.offset().top
//   }, 800, 'swing', function () {
//       window.location.hash = targetEle;
//   });
// });

// $('#home').click(function () {
//   $("html, body").animate({ scrollTop: 0 }, 600);
//   return false;
// });



// console.log("Large display settings.")

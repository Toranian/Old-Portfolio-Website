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
  var navbar = document.querySelector("#navbar")
  var menu = document.querySelector("#menu")
  var backgroundimage = document.querySelector("#backgroundimage")

  // backgroundimage.classList.toggle("blur")
  menu.classList.toggle("change");
  navbar.classList.toggle("movenav")
  console.log("clicked.")
}

// $(document).scroll(function() {
//   var progress = ($(document).scrollTop());
//   if (progess >= 1080) {
//     document.querySelector("nav ul li a").style = {
//       color: black;
//     }
//   }
// })

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

$('#home').click(function () {
  $("html, body").animate({ scrollTop: 0 }, 600);
  return false;
});

// console.log("Large display settings.")

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

// console.log("Large display settings.")

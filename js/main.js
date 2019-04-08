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

function toggleNav(element) {
  element.classList.toggle("change");
  navbar = document.classList.toggle("movenav")
  console.log("clicked.")
}

// console.log("Large display settings.")

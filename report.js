// NAVBAR SCROLLED
var navbar = document.querySelector("#navbar");
window.onscroll = function () {
  if (window.scrollY > 90) {
    navbar.setAttribute("class", "scrolled");
  } else {
    navbar.removeAttribute("class", "scrolled");
  }
};
// BRIGNTNESS
var light = document.querySelector("#lightbtn");
var click = 0;
light.addEventListener("click", lightFunction);
function lightFunction() {
  click++;
  var body = document.querySelector("body");
  if (click % 2 == 1) {
    body.style.backgroundColor = "black";
    document.getElementById("farooque").style.backgroundColor = "#2e2e2e";
    document.getElementById("skills").style.backgroundColor = "#2e2e2e";
    document.getElementById("footer").style.backgroundColor = "#2e2e2e";
    var lightIcon = document.querySelector("#lightbtn");
    lightIcon.innerHTML = '<i class="fa-solid fa-sun"></i>';
  } else {
    body.style.backgroundColor = "white";
    document.getElementById("farooque").style.backgroundColor = "#007266";
    document.getElementById("skills").style.backgroundColor = "#007266";
    document.getElementById("footer").style.backgroundColor = "#007266";
    var lightIcon = document.querySelector("#lightbtn");
    lightIcon.innerHTML = '<i class="fa-solid fa-moon"></i>';
  }
}
// NAVBAR MEDIA QUERY

var togglebtn = document.querySelector(".nav-toggle");
var toggleClick = 0;
togglebtn.addEventListener("click", toggleFunction);
function toggleFunction() {
  document.querySelector(".nav-links").classList.toggle("nav-linksGo");
  // var navLinks = document.querySelector(".nav-links");
  // toggleClick++;
  // if (toggleClick % 2 == 1) {
  //   navLinks.style.display = "block";
  // } else {
  //   navLinks.style.display = "none";
  // }
}

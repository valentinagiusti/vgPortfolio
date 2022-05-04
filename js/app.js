const navbar = document.querySelector("#navbar-page");
const loader = document.querySelector("#loader");

window.onscroll = function () {
  // pageYOffset or scrollY
  if (window.pageYOffset > 0) {
    navbar.classList.add("bg-dark");
  } else {
    navbar.classList.remove("bg-dark");
  }
};

window.addEventListener("load", function () {
  loader.style.display = "none";
});

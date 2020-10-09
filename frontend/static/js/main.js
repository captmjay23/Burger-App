window.addEventListener("DOMContentLoaded", function () {
  /* Nav Menu */
  const burgerToggler = document.querySelector("#icon-toggler");
  const navContainer = document.querySelector(".navbar-nav");
  const navIconLine = document.querySelectorAll(".line");
  burgerToggler.addEventListener("click", function () {
    if (navContainer.classList.contains("hide-nav")) {
      // SHow Nav When Icon Is Clicked
      navContainer.classList.remove("hide-nav");
      navContainer.classList.add("show-nav");

      // Icon Effect When Click
      navIconLine.forEach(function (line) {
        line.classList.add("burger-icon-effect");
      });
    } else {
      // SHow Nav When Icon Is Clicked
      navContainer.classList.add("hide-nav");
      navContainer.classList.remove("show-nav");

      // Close Icon effect When Click
      navIconLine.forEach(function (line) {
        line.classList.remove("burger-icon-effect");
      });
    }
  });
});

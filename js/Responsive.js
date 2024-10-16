let hamberGurNav = document.querySelector("nav");
let headerIcons = document.querySelector(".header__icon");
let menuBtnIcon = document.querySelector(".header__icon i");

headerIcons.addEventListener("click", () => {
  if (menuBtnIcon.classList.contains("fa-bars")) {
    hamberGurNav.style.left = "0";
    menuBtnIcon.classList.remove("fa-bars");
    menuBtnIcon.classList.add("fa-times");
  } else {
    hamberGurNav.style.left = "80rem";
    menuBtnIcon.classList.remove("fa-times");
    menuBtnIcon.classList.add("fa-bars");
  }
});

const darkMode = document.querySelector(".nav__light");
const modeIcon = document.querySelector(".material-symbols-outlined");
const navLink = document.querySelector(".nav__link");
const body = document.querySelector("body");

darkMode.addEventListener("click", () => {
  if (body.classList.toggle("dark__body")) {
    body.style.color = "white";
    body.style.transition = "all 300ms linear";
    navLink.style.color = "white";
  } else {
    body.style.color = "black";
    navLink.style.color = "black";
  }
  //   body.classList.toggle("dark__body");
});

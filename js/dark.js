const darkMode = document.querySelector(".nav__light");
const modeIcon = document.querySelector(".material-symbols-outlined");
const body = document.querySelector("body");

darkMode.addEventListener("click", () => {
    if (body.classList.toggle("dark__body")) {
      modeIcon.textContent = "dark_mode";
        body.style.transition = "all 300ms linear";
  }else {
    modeIcon.textContent = "light_mode";
  }
});

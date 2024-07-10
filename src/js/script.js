window.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger"),
    menu = document.querySelector(".menu"),
    closeBtn = document.querySelector(".menu__close");

  hamburger.addEventListener("click", () => {
    menu.classList.toggle("menu-active");
    hamburger.classList.toggle("hamburger-active");
  });
  closeBtn.addEventListener("click", () => {
    menu.classList.remove("menu-active");
  });
});

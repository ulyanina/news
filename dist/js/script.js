window.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger"),
    menu = document.querySelector(".menu__row"),
    closeBtn = document.querySelector(".menu__close");

  hamburger.addEventListener("click", () => {
     menu.classList.toggle("menu__row-active");
     hamburger.classList.toggle("hamburger-active")
  });
  closeBtn.addEventListener("click", () => {
    menu.classList.remove("menu-active");
  });
});

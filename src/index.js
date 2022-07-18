const burgerBtn = document.querySelector(".mobile-header-burger-btn");
const mobileMenu = document.querySelector(".mobile-header-menu-container");
const mobileClose = document.querySelector(".mobile-header-close-button");
const baseHeaderContainer = document.querySelector(".base-header-container");
const heroTitleEl = document.querySelector(".hero-title");

const openBurgerBtn = (event) => {
    event.preventDefault();
    mobileMenu.style.display = "block";
    heroTitleEl.style.opacity = "0";
    mobileMenu.style.transform = "translateY(0%)";
    console.log(mobileClose);
}
const closeMobileMenu = (event) => {
    event.preventDefault();
    mobileMenu.style.transform = "translateY(-150%)"
    baseHeaderContainer.style.display = "flex";
    heroTitleEl.style.opacity = "1";
    console.log(baseHeaderContainer);
}
burgerBtn.addEventListener('click', openBurgerBtn);


mobileClose.addEventListener('click', closeMobileMenu);
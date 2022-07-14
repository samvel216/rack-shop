const burgerBtn = document.querySelector(".mobile-header-burger-btn");
const mobileMenu = document.querySelector(".mobile-header-menu-container");
const mobileClose = document.querySelector(".mobile-header-close-button");
const baseHeaderContainer = document.querySelector(".base-header-container");
console.log(mobileMenu);
const openBurgerBtn = (event) => {
    event.preventDefault();
    mobileMenu.style.display = "block";
    baseHeaderContainer.style.display = "none"
}
const closeMobileMenu = (event) => {
    event.preventDefault();
    mobileMenu.style.display = "none"
    baseHeaderContainer.style.display = "flex";
}
burgerBtn.addEventListener('click', openBurgerBtn);
mobileClose.addEventListener('click', closeMobileMenu);
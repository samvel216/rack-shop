const burgerBtn = document.querySelector(".mobile-header-burger-btn");
const mobileMenu = document.querySelector(".mobile-header-menu-container");
const mobileClose = document.querySelector(".mobile-header-close-button");
const baseHeaderContainer = document.querySelector(".base-header-container");
const heroTitleEl = document.querySelector(".hero-title");
const productCardBtnEl = document.querySelector(".product-card-btn1");
const productCardInfoContainerEl = document.querySelector(".product-card-info-container");
const headerEl = document.querySelector(".header");
const productCloseContainerEl = document.querySelector(".product-close-container");
const screenWidth = window.screen.width;


const closeMobileMenu = (event) => {
    event.preventDefault();
    baseHeaderContainer.classList.remove("is-active");
    mobileMenu.style.transform = "translateY(-150%)"
     baseHeaderContainer.style.display = "flex";

}
const openBurgerBtn = (event) => {
    event.preventDefault();
    // baseHeaderContainer.classList.add("is-active"); 
    let yOffset = window.pageYOffset;
    console.log(yOffset);
    if (yOffset > 30) {
        window.scrollBy(
            {top: -yOffset,
            behavior : "smooth"}
        );
        mobileMenu.style.transform = "translateY(0%)";
    } else {
        mobileMenu.style.transform = "translateY(0%)";
    }
}
productCloseContainerEl.addEventListener('click', (event) => {
    event.preventDefault();
    productCardInfoContainerEl.style.transform = "translateX(-150%)";
})
burgerBtn.addEventListener('click', openBurgerBtn);
mobileClose.addEventListener('click', closeMobileMenu);
const openModalWindow = (event) => {
    event.preventDefault();
    productCardInfoContainerEl.style.transform = "translateY(-10%)";
    // productCardInfoContainerEl.style.width = `${screenWidth}px`;
    console.log(screenWidth);
}
window.addEventListener('scroll', (event) => {
    event.preventDefault();
  let yOffset = window.pageYOffset;
  if (yOffset > 30) {
    mobileMenu.style.transform = "translateY(-150%)" 
  }
  if (yOffset > 360) {
    headerEl.style.transform = "translateY(-100%)";
  }
  if (yOffset < 360) {
    headerEl.style.transform = "translateY(0%)";
  }
})
productCardBtnEl.addEventListener('click', openModalWindow);




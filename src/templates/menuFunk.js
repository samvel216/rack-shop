const baseHeaderContainer = document.querySelector(".base-header-container");
const mobileMenu = document.querySelector(".mobile-header-menu-container");

const closeMobileMenu = (event) => {
    event.preventDefault();
    baseHeaderContainer.classList.remove("is-active");
    mobileMenu.style.transform = "translateY(-150%)"
     baseHeaderContainer.style.display = "flex";

}
const openBurgerBtn = (event) => {
    event.preventDefault();
     baseHeaderContainer.classList.add("is-active"); 
    let yOffset = window.pageYOffset;
    console.log(yOffset);
    if (yOffset > 30) {
        window.scrollBy(
            {top: -yOffset}
        );
        mobileMenu.style.transform = "translateY(0%)";
    } else {
        mobileMenu.style.transform = "translateY(0%)";
    }
}
export {closeMobileMenu, openBurgerBtn};
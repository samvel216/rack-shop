const mobileMenu = document.querySelector(".mobile-header-menu-container");
const headerEl = document.querySelector(".header");

export default scroll = (event) => {
    event.preventDefault();
  let yOffset = window.pageYOffset;
  if (yOffset > 30) {
    mobileMenu.style.transform = "translateY(-150%)";
  }
  if (yOffset > 360) {
    headerEl.style.transform = "translateY(-100%)";
  }
  if (yOffset < 360) {
    headerEl.style.transform = "translateY(0%)";
  }
}
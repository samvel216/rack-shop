var burgerBtn=document.querySelector(".mobile-header-burger-btn"),mobileMenu=document.querySelector(".mobile-header-menu-container"),mobileClose=document.querySelector(".mobile-header-close-button"),baseHeaderContainer=document.querySelector(".base-header-container"),heroTitleEl=document.querySelector(".hero-title"),productCardBtnEl=document.querySelector(".product-card-btn1"),productCardInfoContainerEl=document.querySelector(".product-card-info-container"),headerEl=document.querySelector(".header"),productCloseContainerEl=document.querySelector(".product-close-container"),screenWidth=window.screen.width,closeMobileMenu=function(e){e.preventDefault(),baseHeaderContainer.classList.remove("is-active"),mobileMenu.style.transform="translateY(-150%)",baseHeaderContainer.style.display="flex"},openBurgerBtn=function(e){e.preventDefault();var t=window.pageYOffset;console.log(t),t>30?(window.scrollBy({top:-t,behavior:"smooth"}),mobileMenu.style.transform="translateY(0%)"):mobileMenu.style.transform="translateY(0%)"};productCloseContainerEl.addEventListener("click",(function(e){e.preventDefault(),productCardInfoContainerEl.style.transform="translateX(-150%)"})),burgerBtn.addEventListener("click",openBurgerBtn),mobileClose.addEventListener("click",closeMobileMenu);var openModalWindow=function(e){e.preventDefault(),productCardInfoContainerEl.style.transform="translateY(-10%)",console.log(screenWidth)};window.addEventListener("scroll",(function(e){e.preventDefault();var t=window.pageYOffset;t>30&&(mobileMenu.style.transform="translateY(-150%)"),t>360&&(headerEl.style.transform="translateY(-100%)"),t<360&&(headerEl.style.transform="translateY(0%)")})),productCardBtnEl.addEventListener("click",openModalWindow);
//# sourceMappingURL=index.99ef32c1.js.map

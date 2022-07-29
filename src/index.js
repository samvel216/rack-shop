import  {popularModalCardMassive, boiledModalCardMassive,friedModalCardMassive, mainTitleMassive} from './templates/informationMassive';
import scroll from './templates/scrollFunk';
import renderProductCard from './templates/renderProductCardFunk';
import idChoise from './templates/idChoiseFunk';
import {openModalWindow, popularModalCardChoise,closeModalContainer} from './templates/modalFunk';
import {closeMobileMenu, openBurgerBtn} from './templates/menuFunk';
import {choiseProductSize} from './templates/choiseProductSize';
const mobileClose = document.querySelector(".mobile-header-close-button");
const productCloseContainerEl = document.querySelector(".product-close-container");
const burgerBtn = document.querySelector(".mobile-header-burger-btn")
const productMainTitleEl = document.querySelector(".product-main-title");
const productPopularListEl = document.querySelector(".product-popular-list");
const allProductCardContainerEl = document.querySelectorAll(".product-card-container");
const arrowRightIconEl = document.querySelector(".arrow-right-icon");
const arrowLeftIconEl = document.querySelector(".arrow-left-icon");
const rightArrowMainTitleEl = document.querySelector(".right-arrow-main-title");
const leftArrowMainTitleEl = document.querySelector(".left-arrow-main-title");
const productSizeContainerEl = document.querySelector(".product-size-container");
window.addEventListener('scroll', scroll)
console.log(productMainTitleEl.id);
productMainTitleEl.id = 'title-1';
burgerBtn.addEventListener('click', openBurgerBtn);
mobileClose.addEventListener('click', closeMobileMenu);
productSizeContainerEl.addEventListener('click',choiseProductSize);
const mainTitleChoise = (titleId) => {
 for(const mainTitle of mainTitleMassive) {
  if (titleId === mainTitle.id) {
    productMainTitleEl.id = mainTitle.id;
    productMainTitleEl.textContent = mainTitle.title;
    rightArrowMainTitleEl.id = mainTitle.id;
    leftArrowMainTitleEl.id = mainTitle.id;
  }
 }
}

const previousMainTitle = (event) => {
  event.preventDefault(); 
  const resultIdChoise = idChoise(event.currentTarget.id.split(""), '-');
  mainTitleChoise(resultIdChoise);
  renderProductCard(resultIdChoise,popularModalCardMassive,boiledModalCardMassive,friedModalCardMassive, allProductCardContainerEl)
}

const nextMainTitle = (event) => {
  event.preventDefault();  
  const resultIdChoise = idChoise(event.currentTarget.id.split(""), '+');
  mainTitleChoise(resultIdChoise)
  renderProductCard(resultIdChoise,popularModalCardMassive,boiledModalCardMassive,friedModalCardMassive, allProductCardContainerEl)
}

rightArrowMainTitleEl.addEventListener('click', nextMainTitle)
leftArrowMainTitleEl.addEventListener('click', previousMainTitle)
const previousModalWindow = (event) => { 
  event.preventDefault(); 
  const resultIdChoise = idChoise(event.currentTarget.id.split(""), '-');
  const modalId = productMainTitleEl.id;
  popularModalCardChoise(resultIdChoise,modalId);
}

const nextModalWindow = (event) => {
    event.preventDefault();  
    const resultIdChoise = idChoise(event.currentTarget.id.split(""), '+');
    const modalId = productMainTitleEl.id;
    popularModalCardChoise(resultIdChoise,modalId);
}

arrowRightIconEl.addEventListener('click', nextModalWindow);
arrowLeftIconEl.addEventListener('click', previousModalWindow);
productPopularListEl.addEventListener('click', openModalWindow);
productCloseContainerEl.addEventListener('click', closeModalContainer);





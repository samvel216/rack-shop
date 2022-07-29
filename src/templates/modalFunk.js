import  {popularModalCardMassive, boiledModalCardMassive,friedModalCardMassive, mainTitleMassive} from './informationMassive';
const productCardInfoContainerEl = document.querySelector(".product-card-info-container");
const productCardInfoTextEl = document.querySelector(".product-card-info-text");
const productModalCardTitleEl = document.querySelector(".product-modal-card-title");
const productInfoImgEl = document.querySelector(".product-info-img");
const arrowRightIconEl = document.querySelector(".arrow-right-icon");
const arrowLeftIconEl = document.querySelector(".arrow-left-icon");


const screenWidth = window.screen.width;

const popularModalCardChoise = (id, modalId) => {
  if (modalId === 'title-1') {
    currentModalMassive = popularModalCardMassive;
    console.log('dsds');
   }
   if (modalId === 'title-2') {
       currentModalMassive = boiledModalCardMassive;
   }
   if (modalId === 'title-3') {
       currentModalMassive = friedModalCardMassive;
   }
    for (const modalMassive of currentModalMassive) {
      if (id === modalMassive.id) {
        productCardInfoTextEl.textContent = modalMassive.description;
        productModalCardTitleEl.textContent = modalMassive.title;
        productInfoImgEl.src = modalMassive.img;
        arrowRightIconEl.id = modalMassive.id;
        arrowLeftIconEl.id = modalMassive.id;
      }
    }
  }

const openModalWindow = (event) => {
    event.preventDefault();
    if (event.target.nodeName !== "BUTTON") {
      return;
    }
    popularModalCardChoise(event.target.id);
    productCardInfoContainerEl.style.transform = "translateX(-50%)";
    productCardInfoContainerEl.style.width = `${screenWidth}px`;
    console.log(screenWidth);
}

const closeModalContainer = (event) => {
  event.preventDefault();
  console.log('dsdsd');
  productCardInfoContainerEl.style.transform = "translateX(-250%)";
}

export {openModalWindow, popularModalCardChoise,closeModalContainer};
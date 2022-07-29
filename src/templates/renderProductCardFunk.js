export default renderProductCard = (id,popularModalCardMassive,boiledModalCardMassive,friedModalCardMassive, allProductCardContainerEl) => {
    if (id === 'title-1') {
     currentModalMassive = popularModalCardMassive;
    }
    if (id === 'title-2') {
        currentModalMassive = boiledModalCardMassive;
    }
    if (id === 'title-3') {
        currentModalMassive = friedModalCardMassive;
    }
    for (const ProductCardContainer of allProductCardContainerEl) {
        ProductCardContainer.innerHTML = "";
    }
    let i = 0;
     for (const ProductCardContainer of allProductCardContainerEl) {
        ProductCardContainer.innerHTML = `<img src="${currentModalMassive[i].img}" alt="" class="product-card-img">
       <div class="product-card-text-container">
           <h4 class="product-card-title">${currentModalMassive[i].title}</h4>
           <button class="product-card-btn" id="${currentModalMassive[i].id}">Подробнее</button>
       </div>`    
       i += 1;
      } 
 }
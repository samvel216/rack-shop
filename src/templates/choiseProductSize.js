
const producTsizeMEl = document.querySelector(".product-size-m");
const producTsizeLEl = document.querySelector(".product-size-l");
const producTsizeXLEl = document.querySelector(".product-size-xl");
const productPriceEl = document.querySelector(".product-price");

const choiseProductSize = (event) => {
    event.preventDefault();
    if (event.target.nodeName !== "DIV") {
        return;
      }
      console.log(event.target);
}
export {choiseProductSize};
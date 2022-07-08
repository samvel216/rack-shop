const heroListImgEl = document.querySelector(".hero-list-img");
console.log(heroListImgEl);
const dhfdjf = '../images/dsdsdsd.jpg';
const numberMassive = [1,2,3,4];

const sources = [
    "../src/images/dsdsdsd.jpg",
    "../src/images/upload-16208490460.jpg",
    "../src/images/krasnyj-kalifornijskij-rak-vneshnij-vid.jpg",
    "../src/images/вуеппек.png"
];

const pics = [];
for(var i = 0; i < sources.length; i+=1) {
    var pic = new Image();
    pic.src = sources[i];
    pics[i] = pic;
}




const renderHeroList = () => {
 const markup = numberMassive.map((element) => 
 `<li class="item">

     <img src="${pics[0].src}" alt="">

</li>`).join("");
heroListImgEl.insertAdjacentHTML("beforeend", markup);
console.log(pics[0].src);
}
renderHeroList();
export default heroListImgEl;
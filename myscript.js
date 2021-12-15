const items = [
  "img/01.jpg",
  "img/02.jpg",
  "img/03.jpg",
  "img/04.jpg",
  "img/05.jpg",
];

const title = ["Svezia", "Svizzera", "Gran Bretagna", "Germania", "Paradise"];

const text = [
  "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.",
  "Lorem ipsum",
  "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
  "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,",
  "Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,",
];

// let itemsContent = "";
// let elementActive = 0;
// for (let i=0; i< items.length; i++){
//     itemsContent += `
//     <div class= "item" id="item-${i}"
//         <img src "${items[i]}">
//     </div>`;
// };

let sliderImages = document.querySelectorAll(".slide");
    arrowUp = document.querySelector(".arrow-up");
    arrowDown = document.querySelector(".arrow-down");
    current = items;
// nascondo le immagini
function reset(){
    for(let i = 0; i < sliderImages.length; i++){
        sliderImages[i].style.display= "none"; 
    }
};
// parti da qui
function startSlide(){
    reset();
    sliderImages[0].style.display= "block";
};
// precedente
function slideU(){
    reset();
    sliderImages[current - 1].style.display = "block";
    current--;
};
arrowUp.addEventListener("click", function(){
    if(current ===0){
        current = sliderImages.length;
    }
    slideU();
});
// prossimo
function slideD(){
    reset();
    sliderImages[current + 1].style.display = "block";
    current++;
};
arrowUp.addEventListener("click", function(){
    if(current === sliderImages.length -1){
        current = -1;
    }
    slideD();
});



startSlide();
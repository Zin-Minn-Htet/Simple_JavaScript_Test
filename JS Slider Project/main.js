// DOM Selector

const images = Array.from(document.querySelectorAll(".img-container img"));
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

// Add Event Lister

prev.addEventListener("click",prevFun);
next.addEventListener("click",nextFUn);

// Functions
let index = 0;

function prevFun(){
    images[index].classList.remove("active");
    if(index === 0){
        index = images.length -1;
        images[index].classList.add("active");
    }else{
        index --;
        images[index].classList.add("active")
    }
}

function nextFUn(){
    images[index].classList.remove("active");
    if(index === images.length -1){
        index = 0 ;
        images[index].classList.add("active");
    }else{
        index ++;
        images[index].classList.add("active")
    }
}
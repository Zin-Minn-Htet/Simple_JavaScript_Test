const display = document.querySelector(".res-text");
const copy = document.querySelector(".copy");
const range = document.querySelector("#range");
const rangeRes = document.querySelector(".range-res");
const numInput = document.querySelector("#number");
const charInput = document.querySelector("#special-char");
const generate = document.querySelector(".generate");

let stronger = `qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM!@#$%^&*1234567890`;
let middle = `qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM1234567890`;
let strong = `qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM!@#$%^&*`;
let weak = `qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM`;

generate.addEventListener("click",createPw);

function createPw(){
    let length = range.value;
    let numCheck = numInput.checked ;
    let charCheck = charInput.checked ;
    let newPw = "";

    if(numCheck && charCheck){
        for(let i=0; i< length; i++){
            newPw += stronger[Math.floor(Math.random() * stronger.length)]
        }
    }else if(numCheck){
        for(let i=0; i< length; i++){
            newPw += middle[Math.floor(Math.random() * middle.length)]
        }
    }else if(charCheck){
        for(let i=0; i< length; i++){
            newPw += strong[Math.floor(Math.random() * strong.length)]
        }
    }else {
        for(let i=0; i< length; i++){
            newPw += weak[Math.floor(Math.random() * weak.length)]
        }
    }

    display.value = newPw;
}

// Range Res

range.addEventListener("click",()=>{
    rangeRes.innerHTML = range.value;
})

// Copy 

copy.addEventListener("click",()=>{
    display.select();
    navigator.clipboard.writeText(display.value);
    alert("Copy Successfully!!")
})


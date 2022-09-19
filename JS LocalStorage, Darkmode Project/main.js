// DOM Selector

const toggle = document.querySelector("#toggle-btn");
const icon = document.querySelector("#toggle_icon");

toggle.addEventListener("click",darkmodeToggle);

let darkmode = localStorage.getItem("darkmode");

// Check Condation

if(darkmode === "good"){
    darkmodeOn();
}

// Darkmode Toggle

function darkmodeToggle(){
    darkmode = localStorage.getItem("darkmode");
    if(darkmode === "good"){
        darkmodeOff();
    }
    else{
        darkmodeOn();
    }
}

// Functions

function darkmodeOff(){
    document.body.classList.remove('dark');
    localStorage.setItem("darkmode","null");
    icon.className = "bx bx-sun"
}
function darkmodeOn(){
    document.body.classList.add('dark');
    localStorage.setItem("darkmode","good");
    icon.className = "bx bx-moon"
}
let bx = document.querySelector(".bx");

bx.addEventListener('click',(e)=>{
  const input = document.querySelector("#pw");
  if(input.type === "password"){
    input.type = "text";
    e.target.className = 'bx bx-hide'
  }else{
    input.type = "password";
    e.target.className = 'bx bx-show'
  }
})
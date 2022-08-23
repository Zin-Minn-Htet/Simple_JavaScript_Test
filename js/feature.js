var circle = document.getElementById("circle");
var upBtn = document.getElementById("upBtn");
var downBtn = document.getElementById("downBtn");

var roteValue = circle.style.transform;
var rotateSum ;

upBtn.onclick=function(){
    rotateSum=roteValue + "rotate(-90deg)";
    circle.style.transform = rotateSum;
    roteValue = rotateSum;
}
downBtn.onclick=function(){
    rotateSum=roteValue + "rotate(90deg)";
    circle.style.transform = rotateSum;
    roteValue = rotateSum;
}
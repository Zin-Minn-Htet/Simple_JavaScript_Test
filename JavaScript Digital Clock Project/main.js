let box = document.querySelector(".box");
const months = [
    "January",
    "Febuary",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ]
  
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ]
  

function running(){
    const date = new Date();
    
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();

    let day = date.getDate();
    let month=months[date.getMonth()];
    let year = date.getFullYear();
    let week = days[date.getDay()];

    if(hh===0){hh = 12}
    if(hh>12) {hh -= 12} 
    if(hh<10) {hh = '0'+hh} 
    if(mm<10) {mm = '0'+mm} 
    if(ss<10) {ss = '0'+ss} 

    time =  hh+":"+mm+":"+ss;
    DD = day+','+month+','+year+','+week;

    box.innerHTML = `${time}<br><span>${DD}</span>`
};

setInterval(running,1000)


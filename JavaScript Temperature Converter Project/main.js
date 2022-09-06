function toCel () {
    let f = Number( document.querySelector("#input").value) ;
    
    let c = (5/9)*(f-32) ;

    document.querySelector("#result").innerHTML = c.toFixed(2) +' C';

    document.querySelector("#input").value = '' ;

} 

function toFeh () {
    let c = Number(document.querySelector("#input").value );

    let f = 32 + (9/5)*c;

    document.querySelector("#result").innerHTML = f.toFixed(2) + ' F';

    document.querySelector("#input").value = '' ;

}
let homeEl = document.getElementById("home-el")
let guestEl = document.getElementById("guest-el")

let homeEll = 0;
let guestEll = 0;

function home1(){
    homeEll++
    homeEl.innerText = homeEll;
    console.log(homeEll);
}
function home2(){
    homeEll += 2
    homeEl.innerText = homeEll;
    console.log(homeEll);
}
function home3(){
    homeEll += 3
    homeEl.innerText = homeEll;
    console.log(homeEll);
}

function guest1(){
    guestEll++
    guestEl.innerText = guestEll;
    console.log(guestEll);
}
function guest2(){
    guestEll += 2
    guestEl.innerText = guestEll;
    console.log(guestEll);
}
function guest3(){
    guestEll += 3
    guestEl.innerText = guestEll;
    console.log(guestEll);
}

function newGame(){
    homeEll = 0;
    guestEll = 0;
    guestEl.innerText = guestEll;
    homeEl.innerText = homeEll;
    console.log("reset")
}
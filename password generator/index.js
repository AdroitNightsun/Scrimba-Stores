const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let genBtn = document.getElementById("gen-btn-el");
let field1 = document.getElementById("clip-1");
let field2 = document.getElementById("clip-2");

function generate(){
    field1.textContent=""
    field2.textContent=""
    for(let i = 0; i < 12; i++){
        let rando = Math.floor(Math.random()*characters.length)
        field1.textContent += characters[rando]
    }
    for(let i = 0; i < 12; i++){
        let rando = Math.floor(Math.random()*characters.length)
        field2.textContent += characters[rando]
    }
}

function copyText() {
    navigator.clipboard.writeText(field1.textContent);
    // alert("Copied!");
}
function copyText2() {
    navigator.clipboard.writeText(field2.textContent);
    // alert("Copied!");
}
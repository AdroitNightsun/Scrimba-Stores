 /*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
let inputEl = document.getElementById("input-el")
let buttEl = document.getElementById("main-btn")
let con2El = document.getElementById("con-2")

function length(grub){
    let feets = grub * 3.281;
    let meters = grub / 3.281;
    return {feets: feets, meters: meters};
}
function volume(grub){
    let gallons = grub * 0.264;
    let liters = grub / 0.264;
    return {gallons: gallons, liters: liters};
}
function mass(grub){
    let pounds = grub * 2.204;
    let kilograms = grub / 2.204;
    return {kilograms: kilograms, pounds: pounds};
}
buttEl.addEventListener("click", function(){
    if(inputEl.value === ""){
        alert("empty")
        return;
    }else{
        let result1 = length(inputEl.value)
        let result2 = volume(inputEl.value)
        let result3 = mass(inputEl.value)
        con2El.innerHTML = (`<div class="context" >
                <h2>Length (Meter/Feet)</h2>
                <p id="con-1">${inputEl.value} meters = ${result1.feets.toFixed(2)} feets | ${inputEl.value} feets = ${result1.meters.toFixed(2)} meters</p>
            </div>
            
            <div class="context" >
                <h2>Volume (Liter/Gallon)</h2>
                <p id="con-2">${inputEl.value} liters = ${result2.gallons.toFixed(2)} gallons | ${inputEl.value} gallons = ${result2.liters.toFixed(2)} liters</p>
            </div>
            <div class="context" >
                <h2>Mass (Kilogram/Pound)</h2>
                <p id="con-3">${inputEl.value} kilos = ${result3.pounds.toFixed(2)} pounds | ${inputEl.value} pounds = ${result3.kilograms.toFixed(2)} kilos</p>
            </div>`)
    }
    
})

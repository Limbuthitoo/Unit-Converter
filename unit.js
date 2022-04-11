const filterInput = document.querySelector(".main #metric-el") ;
// document.getElementById("metric-el").textContent = filterInput.toFixed(3);
var mtofeet = 3.28084;
var feettom = 0.3048;
var ltogallon = 0.264172;
var gallontol = 3.78541;
var ktopound = 2.20462;
var poundtok = 0.453592;
let change;
console.log(change);



var lengthEl = document.getElementById("length-el");
var volumeEl = document.getElementById("volume-el");
var massEl = document.getElementById("mass-el");
const checkBtn = document.querySelector(".btn button");
filterInput.addEventListener("keyup",()=> {
    change = filterInput.value.replace(/[^0-9]/gi,"");
});
checkBtn.addEventListener("click", () => {
    var meter2Feet = (change * mtofeet).toFixed(3);
    var feet2Meter = (change * feettom).toFixed(3);
    var liter2Gallon = (change * ltogallon).toFixed(3);
    var gallon2liter = (change * gallontol).toFixed(3);
    var kilo2Pound = (change * ktopound).toFixed(3);
    var pound2Kilo = (change * poundtok).toFixed(3);
    lengthEl.textContent = change +" meters "+ " = " + meter2Feet + " feets " + " | " + change +" feets " + " = " + feet2Meter + " meters "
    volumeEl.textContent = change + " liters " + " = " + liter2Gallon + " gallons " + " | " + change + " gallons " +" = " + gallon2liter + " liters "
    massEl.textContent = change + " kilos " + " = " + kilo2Pound + " pounds " + " | " + change + " pounds " +" = " + pound2Kilo + " kilos "
});

// lengthEl.textContent = filterInput.toFixed(3) +" meters "+ " = " + meter2Feet.toFixed(3) + " feets " + " | " + filterInput.toFixed(3) +" feets " + " = " + feet2Meter.toFixed(3) + " meters "
// volumeEl.textContent = filterInput.toFixed(3) + " liters " + " = " + liter2Gallon.toFixed(3) + " gallons " + " | " + filterInput.toFixed(3) + " gallons " + gallon2liter.toFixed(3) + " liters "
// massEl.textContent = filterInput.toFixed(3) + " kilos " + " = " + kilo2Pound.toFixed(3) + " pounds " + " | " + filterInput.toFixed(3) + " pounds " + pound2Kilo.toFixed(3) + " kilos "

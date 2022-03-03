var change = 150.23956 ;
document.getElementById("metric-el").textContent = change.toFixed(3);
var mtofeet = 3.28084;
var feettom = 0.3048;
var ltogallon = 0.264172;
var gallontol = 3.78541;
var ktopound = 2.20462;
var poundtok = 0.453592;

var meter2Feet = change * mtofeet;
var feet2Meter = change * feettom;
var liter2Gallon = change * ltogallon;
var gallon2liter = change * gallontol;
var kilo2Pound = change * ktopound;
var pound2Kilo = change * poundtok;

var lengthEl = document.getElementById("length-el");
var volumeEl = document.getElementById("volume-el");
var massEl = document.getElementById("mass-el");

lengthEl.textContent = change.toFixed(3) +" meters "+ " = " + meter2Feet.toFixed(3) + " feets " + " | " + change.toFixed(3) +" feets " + " = " + feet2Meter.toFixed(3) + " meters "
volumeEl.textContent = change.toFixed(3) + " liters " + " = " + liter2Gallon.toFixed(3) + " gallons " + " | " + change.toFixed(3) + " gallons " + gallon2liter.toFixed(3) + " liters "
massEl.textContent = change.toFixed(3) + " kilos " + " = " + kilo2Pound.toFixed(3) + " pounds " + " | " + change.toFixed(3) + " pounds " + pound2Kilo.toFixed(3) + " kilos "

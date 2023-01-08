
const btn = document.getElementById("btn");
let unit = document.getElementById("unit");
const lengthConverter = document.getElementById("meter-converter");
const volumeConverter = document.getElementById("liter-converter");
const massConverter = document.getElementById("kilograms-converter");




btn.addEventListener("click", function(){
	convertLength();
	convertVolume();
	convertMass();
	
})

function fixedNum (num){
	return num.toFixed(3);
}

function convertLength () {
    let value = unit.value;  
	let toFeet = fixedNum(value * 3.281);
	let toMeter = fixedNum(value / 3.281);
	let result = ` ${value} meters = ${toFeet} feet | ${value} feet = ${toMeter} meters`;
	lengthConverter.textContent =result;
}

function convertVolume () {
	let value = unit.value
	let toLiter = fixedNum( value * 3.785);
	let toGallon = fixedNum(value / 3.785);
	let result = ` ${value} liters = ${toGallon} gallons | ${value} gallons = ${toLiter} liters`;
	volumeConverter.textContent = result;
}

function convertMass() {
	let value = unit.value
	let toPound = fixedNum(value * 2.205);
	let toKilo = fixedNum(value / 2.205);
	let result = ` ${value} kilos = ${toPound} pounds | ${value} pounds = ${toKilo} kilos`;
	massConverter.textContent = result;
}
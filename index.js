/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/ 

/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const inputEl = document.getElementById("input-el")
const buttonEl = document.getElementById("btn")
const textOne = document.getElementById("textOne")
const textTwo = document.getElementById("textTwo")
const textThree = document.getElementById("textThree")

buttonEl.addEventListener("click", function(){
    const value = Number(inputEl.value);
     
    if (!isNaN(value) && value > 0) {
        
     textOne.innerHTML = `
     ${inputEl.value} meters = ${(inputEl.value * 3.281).toFixed(3)} feet | ${inputEl.value} feet = ${(inputEl.value * 3.281).toFixed(3)} meters
     `
     textTwo.innerHTML = `
     ${inputEl.value} liters = ${(inputEl.value * 0.264).toFixed(3)} galoons | ${inputEl.value} galoons = ${(inputEl.value * 3281).toFixed(3)} liters
     `
     textThree.innerHTML = `
     ${inputEl.value} kilos = ${(inputEl.value * 2.204).toFixed(3)} pounds | ${inputEl.value} pounds = ${(inputEl.value * 2.204).toFixed(3)} kilos
     `
     
    }
    }) 


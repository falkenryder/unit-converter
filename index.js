let length = document.getElementById("length");
let volume = document.getElementById("volume");
let mass = document.getElementById("mass");

let unitConverter = () => {
    let userInputInt = document.getElementById("user-input").value;  
    length.textContent = `${userInputInt} metres = ${(userInputInt * 3.28084).toFixed(3)} feet | ${userInputInt} feet = ${(userInputInt / 3.28084).toFixed(3)} metres`;
    volume.textContent = `${userInputInt} litres = ${(userInputInt * 0.264172).toFixed(3)} gallons | ${userInputInt} gallons = ${(userInputInt / 0.264172).toFixed(3)} litres`;
    mass.textContent = `${userInputInt} kilograms = ${(userInputInt * 2.204623).toFixed(3)} pounds | ${userInputInt} pounds = ${(userInputInt / 2.204623).toFixed(3)} kilograms`;
};

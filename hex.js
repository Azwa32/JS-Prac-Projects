const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];    // initialise object
const btn = document.getElementById('btn');                                  // initialise variable 
const color = document.querySelector('.color');                              // initialise variable

btn.addEventListener('click', function() {                                   // event listener for the button
    let hexColor ="#";                                                       // start of hex string
    for(let i = 0; i<6 ; i++) {                                              // loop to run randomisation for each integer in the hex string
        hexColor += hex[getRandomNumber()];                                  
}       

color.textContent = hexColor;                                                // set the "color" class to the text of the colors integer
document.body.style.backgroundColor = hexColor;                              // set the page backround color to the item in the colors table
console.log(hexColor);                                                       // I wanted to have the hex color show in console so i added this
});

function getRandomNumber() {                                                 // function to get randon number
    return Math.floor(Math.random() * hex.length);                           // returns random number
}
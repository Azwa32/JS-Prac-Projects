const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];   // initialise object
const btn = document.getElementById('btn');                        // initialise variable
const color = document.querySelector(".color");                    // initialise variable
var randomNumber = 0                                               // initialise variable 
var oldNumber = 0                                                  // initialise variable

btn.addEventListener('click', function(){                          // event listener for the button
    //get random number between 0 - 3
    oldNumber = randomNumber;                                      // keep track of the previous color before it's changed 
    randomNumber = getRandomWithOneExclusion();                    // assign random # to the function below
    console.log(randomNumber);                                     // write the color integer to the console

    document.body.style.backgroundColor = colors[randomNumber];    // set the page backround color to the item in the colors table
    color.textContent = colors[randomNumber];                      // set the "color" class to the text of the colors integer
});

// function getRandomNumber(){                                             
//     return Math.floor(Math.random() *colors.length);
// }

// I didn't like how the original tutorial allowed for the same random number to be selected consecutively so 
// I changed it so it would exclude the currently selected color below...

function getRandomWithOneExclusion(lengthOfArray,indexToExclude){ // randomise function that allows one exclusion
    indexToExclude = oldNumber;                                   // assign index to be excluded
    lengthOfArray = colors.length;                                // assign array length
    var rand = null;                                              // an integer                                  
      while(rand === null || rand === indexToExclude){            // loop will only run once
         rand = Math.round(Math.random() * (lengthOfArray - 1));  // assign the rand variable to the correct integer
      }
    return rand;                                                  // commit the rand variable
}



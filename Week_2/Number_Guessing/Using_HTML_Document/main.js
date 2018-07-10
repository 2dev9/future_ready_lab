/*eslint-env browser*/
var target = 0;
var totalGuesses = 1;

function getBounds(){
    var low = document.getElementById("low").value;

    var high = document.getElementById("high").value;
    
    target =  Math.floor(Math.random() * (high - low) + low);
    
}

function makeGuess(){
    var guess = document.getElementById("guess").value;
    if(guess != target){
        totalGuesses++;
        if(target < guess)
           alert("The correct number is lower than " + guess)
        else
            alert("The correct number is higher than " + guess);
    }
    else
        alert("The correct number was " + target + ". It took " +totalGuesses+ " tries to guess this");
}
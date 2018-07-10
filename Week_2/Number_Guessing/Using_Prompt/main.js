/*eslint-env browser*/
function playGame(){
    alert("First enter a low number, then a high number. Then, guess a random number between them.");

    //get the low and high bounds
    //uses parseInt() to make sure we have numbers not strings
    var from = parseInt(prompt("Enter the lower bound, a number between 0 and 1000"));
    
    //validated the lower bound
    while(from < 0 || from >= 1000 || isNaN(from)){
        from = parseInt(prompt("The lower bound must a number between 0 and 1000"));
    }

    var to = parseInt(prompt("Enter the higher bound between " + from + " and 1000"));
    
    //validated the higher bound
    while(to < from || to > 1000 || isNaN(to)){
        to = parseInt(prompt("The higher bound must be greater than " +from + "up to 1000"));
    }

    //get an integer between [from, to]
    //Math.random() returns decimals, used Math.round() to get whole number
    var target = Math.round(Math.random() * (to - from) + from);

    var currentGuess = parseInt(prompt("Guess a number between " + from + " and " + to));

    var totalGuesses = 1;

    //loop until user guesses correct number
    var  guessIsInvalid = isNaN(currentGuess) || currentGuess > to || currentGuess < from;
    
    while(guessIsInvalid || currentGuess != target){
        
        //check that guess is valid
        if(!guessIsInvalid){
            //if guess is valid compare to target number
            if (currentGuess < target){
                currentGuess = parseInt(prompt("Enter a higher number than" +currentGuess));

                totalGuesses++;
            }else if (currentGuess > target){
                currentGuess = parseInt(prompt("Enter a lower number number than " + currentGuess));

                totalGuesses++
            }
        }else{
            
            //if guess is invalid, force user to validate guess
            currentGuess = parseInt(prompt("Enter a number between " + from + " and " + to));
        }
    }

    alert("It took " +totalGuesses + " tries to guess the correct number." );
}

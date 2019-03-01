// Note that this is not the DRY version, namely the random generator intializer could be made into a function once and called when needed--which is six times
$(document).ready(function() {
    // initial game variables 
    var userTotal = 0;
    var wins = 0;
    var losses = 0;

    // display game variables values on page
    $('#total').text(userTotal);
    $('#wins').text(wins);
    $('#losses').text(losses);

    // create a random number for game target between 19 and 120 using the Math.random function with the form being: (Math.random() * ((upperbound - lowerbound) + 1) + lowerbound)
    var targerNumber = Math.floor(Math.random()*((120-19)+1) + 19);
    // display random num on page
    $('#target-num').text(targerNumber);

    // initiate an empty array to hold value for the 4 gems
    var gemValues = [];
    // generate random value for the 4 gems 
    while (gemValues.length < 4){
        var randomNum = Math.floor(Math.random()*((12-1)+1)+ 1);
        if(gemValues.indexOf(randomNum) === -1) {
            gemValues.push(randomNum)
        }
    }

    $('#alert-message').text(' ');

    // event lister for button click and create large game function
    $('button').on('click', function(){
        $('#alert-message').text(' '); //clears win or loose message

        // create a temp var selectedBtn to hold string value of selected gem button and then add that to value to userTotal after turning the string reperesentation of the number to a number using the parseInt function
        var selectedBtn = $(this).data('index'); 
        userTotal += gemValues[parseInt(selectedBtn)]; 

        // Conditional sees if running total gem guesses is greater than game target and if so, adds to losses and displays into html id losses 
        if(userTotal>targerNumber) {
            losses++;
            $('#losses').text(losses);

            // following from loss above--reset game target number var to new random number
            targerNumber = Math.floor(Math.random()*(120-19+1)+ 19);

            // display game target at html id 
            $('#target-num').text(targerNumber);

            // reset running total of gem guesses and display at html id
            userTotal = 0;
            $('#total').text(userTotal);

            //re-initialize all gem values to zero
            gemValues = [];

          // generate random value for the 4 gems 
            while (gemValues.length < 4){
                var randomNum = Math.floor(Math.random()*((12-1)+1)+ 1);

                // checking new random number against stored gem values to see if it matches any and if it doesn't this comparison returns index as "-1" which is non-existant (indexes run from 0 to 3 here)-- saying it doesn't match any stored values and  pushes it into the end of the array.
                if(gemValues.indexOf(randomNum) === -1) {
                    gemValues.push(randomNum)
                }
            }

            //Finally--alerting the user he has lost and to play again
            $('#alert-message').text('you lose! play again.');
        }

        //Else conditional branch checks if gem button total equals the game target and if so--the user wins and the stats update, game target number is displayed, user is notified of win, and all variables reinitialize.  
        else if(userTotal === targerNumber) {
            wins++;
            $('#wins').text(wins);

            targerNumber = Math.floor(Math.random()*(120-19+1)+ 19);
            
            $('#target-num').text(targerNumber);

            // reset gem button guess total
            userTotal = 0;
            $('#total').text(userTotal);

            gemValues = [];
            // generate random value for the 4 gems
            while (gemValues.length < 4){
                var randomNum = Math.floor(Math.random()*((12-1)+1)+ 1);
                if(gemValues.indexOf(randomNum) === -1) {
                    gemValues.push(randomNum)
                }
            }

            $('#alert-message').text('you win! play again.');
        }

        $('#total').text(userTotal);
    })


    /*
    CrystalsCollector Game

    ---------------
    HTML 
    ---------------
    1. create area for target number to be displayed
        1.1. give class for styling
    2. create area for total to be displayed
        2.1. give class for styling
    3. create 4 buttons for user to click
        3.1. give each button a data attr (0-3)
        3.2. give class for styling
    4. create message area for alerts to be displayed
        4.1. give class for styling
    5. create area for wins to be displayed
        5.1. give class for styling
    6. create area for losses to be displayed
        6.1. give class for styling


    ---------------
    Javascript
    ---------------
    1. generate a random "target" number between 19 - 120
        1.1. store in a variable
        1.2. dispaly on screen

    2. generate 4 random number "gem values" between 1 - 12
        2.1. store in a variable (array)

    3. create variables for win, losses, userTotal
        3.1. dispaly on screen

    4. create a event listen for a click of any button

    5. check that the usersTotal is less than target 

    6. get the data attribute of the clicked button
        6.1. store in a variable
        6.2. using the the value of the attribute as an index get the value from gem values array
        6.3. add the value to the user total
        6.4. check that value is less than target
        6.5. update total on screen 
    */
});


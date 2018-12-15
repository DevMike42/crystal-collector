// pseudo code

// Game with 4 CRYSTALS
// Each CRYSTAL should add a specific number to the TOTAL (when clicked)
// Each CRYSTAL's number should be hidden from the user
// When clicked, the TOTAL score should be updated

// At the start of each round, computer generates a 
// new RANDOM number between (19-120)

// The player WINS if their total score matches the 
// computer's number
// The player LOSES if their total score goes over
// the comuter's number

// At the end of each ROUND, the game should reset
// and the computer choses a NEW random number as
// well as NEW hidden CRYSTAL values

// The app should display the # of the player's WINS and 
// LOSSES (DO NOT USE REFRESH AS A MEANS OF STARTING A 
// NEW GAME)

// ====================================================================

$(document).ready(function () {

    // Computer generates random number 
    var computerNum = Math.floor(Math.random() * (120 - 19 + 1) + 19);
    console.log("Random # = " + computerNum);

    $('#goal').text(computerNum);

    // Crystal values
    var crystal1 = Math.floor(Math.random() * (20 - 1 + 1) +1);
    var crystal2 = Math.floor(Math.random() * (20 - 1 + 1) +1);
    var crystal3 = Math.floor(Math.random() * (20 - 1 + 1) +1);
    var crystal4 = Math.floor(Math.random() * (20 - 1 + 1) +1);

    console.log(crystal1);
    console.log(crystal2);
    console.log(crystal3);
    console.log(crystal4);

    // Computer TOTAL & User's accruing TOTAL
    var computerNum = 0;
    var userTotal = 0;

    // Game counters
    var winCount = 0;
    var lossCount = 0;

    // reset function
    function reset () {
        computerNum = Math.floor(Math.random() * (120 - 19 + 1) + 19);
        console.log("New Random # = " + computerNum);
        crystal1 = Math.floor(Math.random() * (20 - 1 + 1) +1);
        crystal2 = Math.floor(Math.random() * (20 - 1 + 1) +1);
        crystal3 = Math.floor(Math.random() * (20 - 1 + 1) +1);
        crystal4 = Math.floor(Math.random() * (20 - 1 + 1) +1);
        userTotal = 0;
        $('#sum').text(userTotal);
    }

    // win function
    function win () {
        alert ('You won!');
        winCount++;
        $('#sum').text(winCount);
        reset ();
    }

});






    // Reset userTotal back to 0


 




    // Make sure gameCounters don't reset to 0

// --------------------------------------------------------------------
// collection ()

// Listenst for CRYSTAL button clicks



    // Listen for button clicks on CRYSTALS

    // Adds value of clicked CRYSTAL to userTotal

// --------------------------------------------------------------------


// totalChecker () * Possibly within collection ()

    // Checks if userTotal = computerNum

// --------------------------------------------------------------------


// roundComplete () * Possibly within totalChecker ()

    // If userTotal > computerNum then...

        // update lossCount

        // run startGame ()

    // If usterTotal = computerNum then...

        // update winCount

        // run startGame ()

    // else if

        // run collection ()



// MAIN PROCESS 
// ====================================================================


// startGame ()

    // collection ()

    // totalChecker ()

    // roundComplete ()
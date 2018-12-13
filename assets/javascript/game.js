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


// GLOBAL VARRIABLES
// ====================================================================

// Computer TOTAL & User's accruing TOTAL
var computerNum = '';
var userTotal = '';

// Crystal values
var crystal1 = '';
var crystal2 = '';
var crystal3 = '';
var crystal4 = '';

// Game counters
var winCount = 0;
var lossCount = 0;


// FUNCTIONS
// ====================================================================


// startGame () 

    // Reset userTotal back to 0

    // Computer generates random number / Resets random number

    // Generates new random values for all 4 CRYSTALS

    // Make sure gameCounters don't reset to 0

// --------------------------------------------------------------------


// collection ()

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
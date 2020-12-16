/*
// Players name function
var playerName = window.prompt("What is your robot's name?");
// Display the name back to the user
//window.alert(playerName);
// Display the name of at the console 
console.log(playerName);
console.log("This logs a string, good for leaving yourself a message");
// this will do math and log 20
console.log(10 + 10);
// what is this?
console.log("Our robot's name is " + playerName);
var playerName = "Tony the Robot";
// Tony the Robot is ready for battle!
console.log("Tony the Robot" + " is ready for battle!");
// "Tony the Robot is ready for battle!"
console.log(playerName + " is ready for battle!");
// "Your robot, Tony the Robot, has won!
console.log("Your robot, " + playerName + ", has won!");
*/

//Welcome the player 
// Moved to the for loop of our game counter
//window.alert("Welcome to Robot Gladiators!");

// function to generate a random numeric value
var randomNumber = function(min, max) {
    // add arguments to be used for the lower
    // math.random() * 21 is becuase we ant to generate a random number but cant be too low.
    //var value = Math.floor(Math.random() * 21) + 40;
    var value = Math.floor(Math.random() * (max - min + 1) + min);

return value;
};


// Players information

var playerName = window.prompt("What is your robot's name?");
var playerHealth =  100; // Default is 100
var playerAttack = 10;
var playerMoney = 10;
var gameStatus = 0; // 0 is game enabled

// You can also log multiple values at once like this
console.log(playerName, playerAttack, playerHealth);

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
// var enemyHealth = 20; // Default is 50
var enemyHealth = randomNumber(40, 60); // nearest round number between a random number 0-20.xxxx and sum the result by 40.
var enemyAttack = 10;

// This creates a function named "fight"
var fight = function(enemyName) {

    // While enemy robot alive, fight
    while(enemyHealth  > 0 && playerHealth > 0) {
        // Would you like to fight or skip
        var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");


        
        // if player choses to fight, then fight
        //Remove if statement as SKIP will break from the loop
        if (promptFight === "fight" || promptFight === "FIGHT") {

            //Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable
            // Alert players that they are starting the round
            window.alert("Robots Fight!");
            

            // generate random damage value based on player's attack power
            var damage = randomNumber(playerAttack - 3, playerAttack);

            // Show how much attack power is done.
            window.alert(playerName + " attacks " + "with an attack power of " + damage);
            //enemyHealth =  enemyHealth - playerAttack;
            enemyHealth = Math.max(0, enemyHealth - damage); // window.math(), enemyHealth variable will not be less than 0.

            // Log a resulting message to the console so we know that it worked.
            console.log (
                playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
            );

            // check enemy's health
            if (enemyHealth <= 0) {
                window.alert(enemyName + " has died!");
                // Reward player with money for destroying robot
                playerMoney = playerMoney + 20;

                // leave while() loop since enemy is dead
                break;
            } 
            else {
                window.alert(enemyName + " still has " + enemyHealth + " health left.");
            }
        
        
    

            // generate random damage value based on enemy's attack power
            var damage = randomNumber(enemyAttack - 3, enemyAttack);

            // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.
            window.alert(enemyName + " attacks " + "with an attack power of " + enemyAttack);

            playerHealth = Math.max(0, playerHealth - damage); // window.math(), playerHealth variable will not be less than 0.
        
            // Log a resulting message to the console so we know that it worked.
            console.log(
                enemyName + " attacked " + playerName + ". " + playerName + " now has " + enemyHealth + " health remaining."
            );
            // check player's health
            if (playerHealth <= 0) {
            window.alert(playerName + " has died!");
            break;
            } else {
            window.alert(playerName + " still has " + playerHealth + " health left.");
            }

        }

        
            // if player choses to skip
            if (promptFight === "skip" || promptFight === "SKIP") {
                // confirm player wants to skip
                var confirmSkip = window.confirm("Are you sure you'd like to quit?");
            
                // if yes (true), leave fight
                if (confirmSkip) {
                window.alert(playerName + " has decided to skip this fight. Goodbye!");
                // subtract money from playerMoney for skipping
                //playerMoney = playerMoney - 2;
                playerMoney = Math.max(0, playerMoney - 10); // playerMoney - 10 math() will not allow money to dip to negative numbers.
                console.log("player money", playerMoney)
                // Break out of the while loop - next robot will come.
                break;
                }
            }
    
        

    }
}



// Call the fight function and pass enemyName argument 
// Function to start a new game 
var startGame = function() {

    // reset player stats
    playerHealth = 100; // 100 health is the default
    playerAttack = 10;
    playerMoney = 5;
    //debugger;
    for(var i = 0; i < enemyNames.length; i++) {
        // check if gameStatus === 1 to exit

        if (gameStatus === 0) {

            //Welcome the player 
            if (playerHealth > 0) {
                // let player know what round they are in, remember that arrays start at 0 so it needs to have 1 added to it
                window.alert("Welcome to Robot Gladiators! Round " + (i + 1));

                // pick new enemy to fight based on the index of the enemyNames array
                var pickedEnemyName = enemyNames[i];

                // reset enemyHealth before starting new fight
                enemyHealth = 50;

                // use debugger to pause script from running and check what's going on at that moment in the code
                // debugger;

                // pass the pickedEnemyName variable's value into the fight function, where it will assume the value of the enemyName parameter
                fight(pickedEnemyName);

                // if we're not at the last enemy in the array
                // if player is still alive and we're not at the last enemy in the array
                if (playerHealth > 0 && i < enemyNames.length - 1) {
                    // ask if player wants to use the store before next round
                    var storeConfirm = window.confirm("The fight is over, visit the store before the next round?");
                    // if yes, take them to the store() function
                    if (storeConfirm) {
                        shop();
                    }
                
                } else {
                    //This is causing our game to show robot lost twice.
                    //window.alert("You have lost your robot in battle! Game Over!");
                    debugger;
                    //break;
                    continue; // exit the if statment and go to end game.
                    
                }
            }

            // after the loop ends, player is either out of health or enemies to fight, so run the endGame function
            endGame();
        }
    }
}   

// function to end the entire game
var endGame = function() {
    // if player is still alive, player wins!
    if (playerHealth > 0) {
      window.alert("Great job, you've survived the game! You now have a score/money of " + playerMoney + ".");
    } 
    else {
      window.alert("You have lost your robot in battle! Game Over!");
    }
   
    // ask player if they'd like to play again
    var playAgainConfirm = window.confirm("Would you like to play again?");

    if (playAgainConfirm) {
        // restart the game
        startGame();
        } 
    else {
        window.alert("Thank you for playing Robot Gladiators! Come back soon!");
        gameStatus = 1;
        } 

    
}

var shop = function() {
    // ask player what they'd like to do
    var shopOptionPrompt = window.prompt(
    "Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: 'refill', 'upgrade', or 'leave' to make a choice."
    );

    // use switch to carry out action
    switch (shopOptionPrompt) {
        case "REFILL": // new case
        case "refill":
            if (playerMoney >= 7) {
              window.alert("Refilling player's health by 20 for 7 dollars.");
          
              // increase health and decrease money
              playerHealth = playerHealth + 20;
              playerMoney = playerMoney - 7;
            }
            else {
              window.alert("You don't have enough money!");
            }
            break;

            case "UPGRADE": // new case
            case "upgrade":
            if (playerMoney >= 7) {
              window.alert("Upgrading player's attack by 6 for 7 dollars.");
          
             // increase attack and decrease money
              playerAttack = playerAttack + 6;
              playerMoney = playerMoney - 7;
            }
            else {
              window.alert("You don't have enough money!");
            }
            break;
        
        case "LEAVE": // new case
        case "leave":           
            window.alert("Leaving the store.");
            // do nothing, so function will end
            break;
        
        default:
            window.alert("You did not pick a valid option. Try again.");
            // call shop() again to force player to pick a valid option
            shop();
            break;
    };
}





//debugger;
    // start the game when the page loads
    //debugger;
if (gameStatus === 0) {
    startGame();
}


// prints 100
//console.log(Math.max(10, 20, 100));

// prints 0
//console.log(Math.max(0, -50));
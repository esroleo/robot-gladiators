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

// Players information

var playerName = window.prompt("What is your robot's name?");
var playerHealth =  10; // Default is 100
var playerAttack = 10;
var playerMoney = 10;

// You can also log multiple values at once like this
console.log(playerName, playerAttack, playerHealth);

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 20; // Default is 50
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
            window.alert(playerName + " attacks " + "with an attack power of " + playerAttack);
            enemyHealth =  enemyHealth - playerAttack;

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
        
        
            // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.
            window.alert(enemyName + " attacks " + "with an attack power of " + enemyAttack);
            playerHealth = playerHealth - enemyAttack;
        
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
                playerMoney = playerMoney - 2;
                console.log("player money", playerMoney)
                // Break out of the while loop - next robot will come.
                break;
                }
            }
    
        

    }
}



// Call the fight function and pass enemyName argument 
for(var i = 0; i < enemyNames.length; i++) {
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
    } else {
          window.alert("You have lost your robot in battle! Game Over!");
          break;
        }
}



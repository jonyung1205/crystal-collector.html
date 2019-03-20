// Functioning the game
$(document).ready(function () {

  // Random number shown at the start of the game should be between 19 - 120
  var ComputerRandom = Math.floor(Math.random() * 102) + 19

  // Establishing a target number 
  $("#targetNumber").text(ComputerRandom);

  // Each item should have a random hidden value between 1 - 12
  var randomNum1 = Math.floor(Math.random() * 12) + 1;
  var randomNum2 = Math.floor(Math.random() * 12) + 1;
  var randomNum3 = Math.floor(Math.random() * 12) + 1;
  var randomNum4 = Math.floor(Math.random() * 12) + 1;

  // Variables for Total, Wins and Losses
  var Total = 0;
  var wins = 0;
  var losses = 0;

  // User clicks a crystal and then add specific amount of points to the player's total score

  // Ruby button click event
  $(".ruby").on("click", function () {
    console.log("old total = " + Total);
    Total += randomNum1;
    console.log("new total = " + Total);
    $("#totalScore").text(Total);
    if (Total === ComputerRandom) {
      console.log("you win");
      wins++;
      $("#wins").text(wins);
      reset();
    } 
    else if (Total < ComputerRandom) {
      console.log("click another crystal");
    }
    else if (Total > ComputerRandom) {
      console.log("you lose");
      losses++;
      $("#losses").text(losses);
      reset();
    }
  });

  // Topaz button click event
  $(".topaz").on("click", function () {
    console.log("old total = " + Total);
    Total += randomNum2;
    console.log("new total = " + Total);
    $("#totalScore").text(Total);
    if (Total === ComputerRandom) {
      console.log("you win");
      wins++;
      $("#wins").text(wins);
      reset();
    } 
    else if (Total < ComputerRandom) {
      console.log("click another crystal");
    }
    else if (Total > ComputerRandom) {
      console.log("you lose");
      losses++;
      $("#losses").text(losses);
      reset();
    }
  });

  // Emerald button click event
  $(".emerald").on("click", function () {
    console.log("old total = " + Total);
    Total += randomNum3;
    console.log("new total = " + Total);
    $("#totalScore").text(Total);
    if (Total === ComputerRandom) {
      console.log("you win");
      wins++;
      $("#wins").text(wins);
      reset();
    } 
    else if (Total < ComputerRandom) {
      console.log("click another crystal");
    }
    else if (Total > ComputerRandom) {
      console.log("you lose");
      losses++;
      $("#losses").text(losses);
      reset();
    }
  });

  // Sapphire button click event
  $(".sapphire").on("click", function () {
    console.log("old total = " + Total);
    Total += randomNum4;
    console.log("new total = " + Total);
    $("#totalScore").text(Total);
    if (Total === ComputerRandom) {
      console.log("you win");
      wins++;
      $("#wins").text(wins);
      reset();
    } 
    else if (Total < ComputerRandom) {
      console.log("click another crystal");
    }
    else if (Total > ComputerRandom) {
      console.log("you lose");
      losses++;
      $("#losses").text(losses);
      reset();
    }
  });

  // Resetting the game
  function reset() {
    ComputerRandom = Math.floor(Math.random() * 102) + 19
    console.log("old total = " + Total);
    $("#targetNumber").text(ComputerRandom);
    randomNum1 = Math.floor(Math.random() * 12) + 1;
    randomNum2 = Math.floor(Math.random() * 12) + 1;
    randomNum3 = Math.floor(Math.random() * 12) + 1;
    randomNum4 = Math.floor(Math.random() * 12) + 1;
    Total = 0;
    $("#totalScore").text(Total);
  }
});


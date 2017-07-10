$(document).ready(function() {
    var wins = 0;
    var losses = 0;
    var targetNumber;
    var totalScore = 0;

    //Start a new game
    initialize();

    $("div[value]").click(function() {
        //Gets the value of the value attribute on each crystal;
        var value = $(this).attr("value");
        var intValue = parseInt(value);

        //Adds the value of the crystal to the total score
        totalScore += intValue;

        //Update the page
        updateAllElements();

        // If you go over the target number you lose
        if (totalScore > targetNumber) {
            alert("You lose");
            losses++;
            initialize();
            return;
        }
        // If you match the target number you win
        if (totalScore == targetNumber) {
            alert("You win");
            wins++;
            initialize();
            return;
        }
    });

    //Starts a new game
    function initialize() {
        targetNumber = random(19, 120);
        totalScore = 0;
        setCrystalValues();
        updateAllElements();
    }

    function setCrystalValues() {
        var crystals = $("div[value]").get();

        //Loop through all the divs with the value attribute and set its value to a random number between 1,12
        for (var i = 0; i < crystals.length; i++) {
            $(crystals[i]).attr("value", random(1, 12));
        }
    }

    //returns a random number between min and max
    function random(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    //updates the HTML page
    function updateAllElements() {
        updateHTMLElement("wins", "Wins " + wins);
        updateHTMLElement("losses", "Losses " + losses);
        updateHTMLElement("targetScore", "Target Score<br>" + targetNumber);
        updateHTMLElement("totalScore", "Total Score<br>" + totalScore);
    }

    function updateHTMLElement(elementId, elementValue) {
        $("#" + elementId).html(elementValue);
    }
});
$(document).ready(function() {
    var wins = 0;
    var losses = 0;
    var targetNumber;
    var totalScore = 0;

    initialize();

    $("div[value]").click(function() {
        var value = $(this).attr("value");
        var intValue = parseInt(value);

        totalScore += intValue;

        if (totalScore > targetNumber) {
            alert("You lose");
            losses++;
            initialize();
            return;
        }
        if (totalScore == targetNumber) {
            alert("You win");
            wins++;
            initialize();
            return;
        }

        updateAllElements();
    });

    function initialize() {
        targetNumber = randomTargetValue();
        totalScore = 0;
        setCrystalValues();
        updateAllElements();
    }

    function setCrystalValues() {
        var crystals = $("div[value]").get();

        for (var i = 0; i < crystals.length; i++) {
            $(crystals[i]).attr("value", randomCrystalValue());
        }
    }

    function randomCrystalValue() {
        return randomHelper(1, 12);
    }

    function randomTargetValue() {
        return randomHelper(19, 120);
    }

    function randomHelper(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

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
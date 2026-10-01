// Get the display
let display = document.getElementById("display");


// =========================
// ADD VALUE
// =========================

function addToDisplay(value) {

    display.value = display.value + value;

    document.getElementById("message").innerHTML =
        "😊 Keep going🌟";
}

// =========================
// CLEAR DISPLAY
// =========================

function clearDisplay() {

    display.value = "";

    document.getElementById("message").innerHTML =
        "🧹 Clean start! Let's calculate! 🧮";
}

// =========================
// DELETE LAST CHARACTER
// =========================

function deleteNumber() {

    display.value =
        display.value.slice(0, -1);

    document.getElementById("message").innerHTML =
        "⬅️ One step back! 😊";
}

// =========================
// CALCULATE
// =========================

function calculate() {

    try {

        // Get the expression
        let expression = display.value;


        // Convert calculator symbols
        // into JavaScript operators

        expression = expression.replace(/×/g, "*");

        expression = expression.replace(/÷/g, "/");

        expression = expression.replace(/−/g, "-");


        // Convert percentage
        // Example: 50% = 0.5

        expression = expression.replace(
            /(\d+(\.\d+)?)%/g,
            "($1/100)"
        );


        // Calculate the answer
        let answer = eval(expression);


        // Check for invalid result
        if (!Number.isFinite(answer)) {

            throw new Error("Invalid calculation");

        }


        // Show answer
        display.value = answer;


        // Success message
        document.getElementById("message").innerHTML =
            "🎉 Excellent! You got the answer! ⭐";

    }

    catch (error) {

        // Show error
        display.value = "Error";


        document.getElementById("message").innerHTML =
            "😅 Oops! Please check your numbers LOL!";
    }
}
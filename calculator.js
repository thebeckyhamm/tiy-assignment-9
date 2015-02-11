var displayNumber = 0;
var firstNumber; // holds first number in equation
var secondNumber; // holds second number in equation
var operators = ["*", "/", "+", "-"];
var operator; 
var displayArea;


var addButtons = function() {
    var numberPadBtns = "123/456*789-0.=+".split("");
    var numberPad = $(".number-pad").empty();
    numberPadBtns.forEach(function(number) {
        var btn = $("<a href=\"#\" class=\"btn\"></a>");
        btn.text(number);
        btn.data("name", number);
        numberPad.append(btn);
    });
};


var evaluateButtonPress = function(btn) {
    if (btn === "clear") { // reset everything
        displayNumber = 0;
        firstNumber = undefined;
        secondNumber = undefined;
        operator = undefined;

        displayArea.empty().text(displayNumber);
    }

    else if (btn <= 9) {
        if (firstNumber === undefined) { // if there is no number so far
            displayNumber = btn; // make display's number equal to button value
            firstNumber = displayNumber; // make first number equal to display number
            console.log("the first number is " + firstNumber);
        }

        else if (firstNumber !== undefined && operator === undefined) { 
        // if there is a number but no operator:
            displayNumber += btn; // concatenate number to display's number
            firstNumber = displayNumber; 
            console.log("the first number is " + firstNumber);
        }

        else if (secondNumber === undefined) {
            // if there IS a firstnumber and there is an 
            // operator, move on to the second number.
            // if the second number hasn't been set then:
            displayNumber = [];  // remove what's in the display
            displayNumber += btn; // add the btn value to the display
            secondNumber = displayNumber; // set the second number
            console.log("the second number is " + secondNumber);
        }

        else {
            // if there's already a first and second number and operator,
            // then add to second number
            displayNumber += btn;
            secondNumber = displayNumber;
            console.log("the second number is " + secondNumber);
        }
        // display the number you get to the user
        displayArea.empty().text(displayNumber);

    }

    // if btn is equal to any of the operators
    else if (_.contains(operators, btn)) {
        operator = btn; // set the operator to the value
        $(".operators span").removeClass("red");  // remove any existing classes          
        $(".operators [data-name='" + btn + "']").addClass("red"); // add to btn's class
        console.log("the operator is: " + operator);
    }

    // if equals is clicked
    else if (btn === "=") {
        $(".operators span").removeClass("red"); // remove the red class

        if (operator === "/") {
            displayNumber = firstNumber / secondNumber;
        }

        else if (operator === "*") {
            displayNumber = firstNumber * secondNumber;
        }

        else if (operator === "-") {
            displayNumber = firstNumber - secondNumber;
        }

        else if (operator === "+") {
            displayNumber = parseFloat(firstNumber) + parseFloat(secondNumber);
        }

        // if the answer is really long, then truncate it
        if (displayNumber.toString().length > 9) {
            displayArea.text(displayNumber.toFixed(6));
        }

        else {
            displayArea.empty().text(displayNumber);   
        }

        // reset everything except first number
        // set first number equal to the new display number (the total)
        operator = undefined;
        firstNumber = displayNumber;
        secondNumber = undefined;
        
        console.log("the total is " + displayNumber);
        console.log("the firstNumber is " + firstNumber);
        console.log("the operator is " + operator);
        console.log("the secondNumber is " + secondNumber);



    }

    else if (btn === ".") {
        // if there's nothing for the first number, add a 0 before
        if (firstNumber === undefined) {
            displayNumber = "0" + btn;
            firstNumber = displayNumber;
        }

        // if we have a first number but no operator yet, then concat
        else if (firstNumber !== undefined && operator === undefined) {
            displayNumber += btn;
            firstNumber = displayNumber;
        }

        else if (secondNumber === undefined) {
            displayNumber = []; 
            displayNumber = "0.";
            secondNumber = displayNumber;
        }

        else {
            displayNumber += btn;
            secondNumber = displayNumber;
        }    

        console.log("we added a period");
        displayArea.empty().text(displayNumber);
    
    }
};




$(function() {
    displayArea = $(".display-numbers span");
    addButtons();


    $(".number-pad").on("click", "a", function(event){
        event.preventDefault();
        var elem = event.currentTarget;
        var btn = $(elem).data("name");
        console.log(btn);

        evaluateButtonPress(btn);


    });

    $(".btn-purple").on("click", function(event){
        event.preventDefault();
        var elem = event.currentTarget;
        var btn = $(elem).data("name");
        console.log(btn);

        evaluateButtonPress(btn);


    });

});
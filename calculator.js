
// press button
// if button is number, then store 1st number and display
// if button is operator, then flag operator as true
// if button is another number, then check operator.
    //if operator is true, then store second number and display
    // if operator is false, then concat number to 1st number 
// if equals, then 1st number operator 2nd number


// if operator is not undefined ; combine operatorFlag and operator
    var displayNumber = 0;
    var firstNumber;
    var secondNumber;
    var operatorFlag = false;
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
    if (btn === "clear") {
        displayNumber = 0;
        firstNumber = undefined;
        secondNumber = undefined;
        operator = undefined;

        displayArea.empty().text(displayNumber);
    }

    else if (btn <= 9) {

        if (firstNumber === undefined) {
            displayNumber = btn; // add number to display's number
            firstNumber = displayNumber; 
            console.log("the first number is " + firstNumber);
        }

        else if (firstNumber !== undefined && operator === undefined) {
            displayNumber += btn; // add number to display's number
            firstNumber = displayNumber; 
            console.log("the first number is " + firstNumber);
        }

        else if (secondNumber === undefined) {
            displayNumber = []; 
            displayNumber += btn;
            secondNumber = displayNumber;
            console.log("the second number is " + secondNumber);
        }

        else {
            displayNumber += btn;
            secondNumber = displayNumber;
            console.log("the second number is " + secondNumber);
        }
        displayArea.text(displayNumber);
    }

    else if (_.contains(operators, btn)) {
        operator = btn;
        $(".operators span").removeClass("red");            
        $(".operators [data-name='" + btn + "']").addClass("red");
        console.log("the operator is: " + operator);
    }

    // else if (btn === "equals") { // NEED TO MAKE THIS DO ALL OPERATIONS
    //     $(".operators span").removeClass("red");            
    //     if (operator === "/") {
    //         displayNumber = firstNumber / secondNumber;
    //         firstNumber = displayNumber;

    //         displayArea.text(displayNumber);
    //         console.log("the total is " + displayNumber);

    //     }
    //     else if (operator === "*") {
    //         displayNumber = firstNumber * secondNumber;
    //         firstNumber = displayNumber;
    //         displayArea.text(displayNumber);
    //         console.log("the total is " + displayNumber);

    //     }
    //     if (operator === "-") {
    //         displayNumber = firstNumber - secondNumber;
    //         firstNumber = displayNumber;
    //         displayArea.text(displayNumber);
    //         console.log("the total is " + displayNumber);

    //     }
    //     if (operator === "+") {
    //         displayNumber = parseFloat(firstNumber) + parseFloat(secondNumber);
    //         firstNumber = displayNumber;
    //         console.log(firstNumber, secondNumber, displayNumber);
    //         displayArea.text(displayNumber);
    //         console.log("the total is " + displayNumber);

    //     }



    // }

    // else if (btn === "period") {
    //     var period = ".";

    //     if (firstNumber === undefined) {
    //         displayNumber = "0" + period;
    //         firstNumber = displayNumber;
    //         console.log("the first number is " + firstNumber);
    //         displayArea.text(displayNumber);
    //     }
    //     else if (firstNumber !== undefined && operatorFlag === false) {
    //         displayNumber += period;
    //         firstNumber = displayNumber;
    //         console.log("the first number is " + firstNumber);
    //         displayArea.text(displayNumber);

    //     }
    //     else {
    //         displayNumber = []; 
    //         displayNumber += period;
    //         secondNumber = displayNumber;
    //         displayArea.empty().text(displayNumber);
    //         console.log("the second number is " + secondNumber);
    //     }        
    // }
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
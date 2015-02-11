
// press button
// if button is number, then store 1st number and display
// if button is operator, then flag operator as true
// if button is another number, then check operator.
    //if operator is true, then store second number and display
    // if operator is false, then concat number to 1st number 
// if equals, then 1st number operator 2nd number


// if operator is not undefined ; combine operatorFlag and operator


$(function() {


    var displayNumber = [];
    var firstNumber;
    var secondNumber;
    var operatorFlag = false;
    var operators = ["multiply", "divide", "add", "subtract"];
    var operator;


    // var isOperator = function(item) {
    //     operators.forEach(function(item){
    //         if (item === "divide") {
    //             operatorFlag = true;
    //         }
    //         else if (item === "multiply") {
    //             operatorFlag = true;
    //         }
    //         else if (item === "add") {
    //             operatorFlag = true;
    //         }
    //         else if (item === "subtract") {
    //             operatorFlag = true;
    //         }
    //     });
    //     return operatorFlag;
    //     console.log("operator flag is " + operatorFlag);
    // };

    $(".number-pad").on("click", "a", function(event){
        event.preventDefault();
        var btnValue = event.currentTarget;
        var btnName = $(btnValue).data("name");
        console.log(btnName);


        //isOperator(btnValue);
        if (btnName === "clear") {
            $(displayNumber).empty();
            $(firstNumber).empty();
            $(secondNumber).empty();
        }
        else if (btnName === "divide") {
            operatorFlag = true;
            operator = "/";
            $(".operators span").removeClass("red");            
            $(".operators [data-name='divide']").addClass("red");
        }
        else if (btnName === "multiply") {
            operatorFlag = true;
            operator = "*";
            $(".operators span").removeClass("red");            
            $(".operators [data-name='multiply']").addClass("red");
        }
        else if (btnName === "add") {
            operatorFlag = true;
            operator = "+";
            $(".operators span").removeClass("red");            
            $(".operators [data-name='add']").addClass("red");

        }
        else if (btnName === "subtract") {
            operatorFlag = true;
            operator = "-";
            $(".operators span").removeClass("red");            
            $(".operators [data-name='subtract']").addClass("red");

        }
        else if (btnName === "equals") { // NEED TO MAKE THIS DO ALL OPERATIONS
            $(".operators span").removeClass("red");            
            if (operator === "/") {
                displayNumber = firstNumber / secondNumber;
                firstNumber = displayNumber;
                $(".display-numbers span").text(displayNumber.toFixed(6));
                console.log("the total is " + displayNumber);

            }
            else if (operator === "*") {
                displayNumber = firstNumber * secondNumber;
                firstNumber = displayNumber;
                $(".display-numbers span").text(displayNumber.toFixed(6));
                console.log("the total is " + displayNumber);

            }
            if (operator === "-") {
                displayNumber = firstNumber - secondNumber;
                firstNumber = displayNumber;
                $(".display-numbers span").text(displayNumber.toFixed(6));
                console.log("the total is " + displayNumber);

            }
            if (operator === "+") {
                displayNumber = parseFloat(firstNumber) + parseFloat(secondNumber);
                firstNumber = displayNumber;
                console.log(firstNumber, secondNumber, displayNumber);
                $(".display-numbers span").text(displayNumber.toFixed(6));
                console.log("the total is " + displayNumber);

            }



        }
        else if (typeof btnName === "number") {

            if (firstNumber === undefined) {
                displayNumber += btnName;
                firstNumber = displayNumber;
                console.log("the first number is " + firstNumber);
                $(".display-numbers span").text(displayNumber);

            }
            else if (firstNumber !== undefined && operatorFlag === false) {
                displayNumber += btnName;
                firstNumber = displayNumber;
                console.log("the first number is " + firstNumber);
                $(".display-numbers span").text(displayNumber);

            }
            else {
                displayNumber = []; 
                displayNumber += btnName;
                secondNumber = displayNumber;
                $(".display-numbers span").empty().text(displayNumber);
                console.log("the second number is " + secondNumber);
            }

        }
        else if (btnName === "period") {
            var period = ".";

            if (firstNumber === undefined) {
                displayNumber = "0" + period;
                firstNumber = displayNumber;
                console.log("the first number is " + firstNumber);
                $(".display-numbers span").text(displayNumber);
            }
            else if (firstNumber !== undefined && operatorFlag === false) {
                displayNumber += period;
                firstNumber = displayNumber;
                console.log("the first number is " + firstNumber);
                $(".display-numbers span").text(displayNumber);

            }
            else {
                displayNumber = []; 
                displayNumber += period;
                secondNumber = displayNumber;
                $(".display-numbers span").empty().text(displayNumber);
                console.log("the second number is " + secondNumber);
            }        
        }



    });

});
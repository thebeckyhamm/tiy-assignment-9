var addButtons = function() {
    var buttons = "123/456*789-0.=+".split("");

    buttons.forEach(function(button) {
        button = "<a href='#' class='btn btn-number'>" + button + "</a>";
        $(".number-pad").append(button);
    });

};

$(function() {
    addButtons();
});
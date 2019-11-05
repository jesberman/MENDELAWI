function menuFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}


$(document).ready(function () {
    // Navbar Instructions
    $(".nav-collections-share").mouseover(function () {
        $("#nav-collections-div").removeClass("hide");
        $("#nav-collections-div").addClass("show");

    });
    $(".nav-collections-share").mouseout(function () {
        $("#nav-collections-div").removeClass("show");
        $("#nav-collections-div").addClass("hide");
    });


});


var detailOneClicked = false;
var detailTwoClicked = false;
var detailThreeClicked = false;


$("#detail1").click(function () {
    // detailOneClicked = true;
    // detailTwoClicked = false;
    // detailThreeClicked = false;
    // if (detailOneClicked === true) {
        $('#detail4').css('background-image',
            'url("assets/images/looks/look4a.jpg")');


    // }

});

$("#detail2").click(function () {
        $('#detail4').css('background-image',
            'url("assets/images/looks/look4b.jpg")');

});

$("#detail3").click(function () {
    $('#detail4').css('background-image',
        'url("assets/images/looks/look4c.jpg")');

});
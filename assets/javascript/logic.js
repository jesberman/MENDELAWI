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

    // Client requested removing dropdowns for the About, Contact, and Blog
    //sections, so we are commenting them out for now.  If client's wishes change
    //later, we can un-comment them out

    // $(".nav-about-share").mouseover(function () {
    //     $("#nav-about-div").removeClass("hide");
    //     $("#nav-about-div").addClass("show");
    // });
    // $(".nav-about-share").mouseout(function () {
    //     $("#nav-about-div").removeClass("show");
    //     $("#nav-about-div").addClass("hide");
    // });

    // $(".nav-contact-share").mouseover(function () {
    //     $("#nav-contact-div").removeClass("hide");
    //     $("#nav-contact-div").addClass("show");
    // });
    // $(".nav-contact-share").mouseout(function () {
    //     $("#nav-contact-div").removeClass("show");
    //     $("#nav-contact-div").addClass("hide");
    // });

    // $(".nav-blog-share").mouseover(function () {
    //     $("#nav-blog-div").removeClass("hide");
    //     $("#nav-blog-div").addClass("show");
    // });
    // $(".nav-blog-share").mouseout(function () {
    //     $("#nav-blog-div").removeClass("show");
    //     $("#nav-blog-div").addClass("hide");
    // });

    //Index Page Image Instructions
    $("#box-image-1").mouseover(function () {
        $("#box-image-1").addClass("box-image-active");
    });

    $("#box-image-1").mouseout(function () {
        $("#box-image-1").removeClass("box-image-active");
    });

    $("#box-image-2").mouseover(function () {
        $("#box-image-2").addClass("box-image-active");
    });

    $("#box-image-2").mouseout(function () {
        $("#box-image-2").removeClass("box-image-active");
    });

    $("#box-image-3").mouseover(function () {
        $("#box-image-3").addClass("box-image-active");
    });

    $("#box-image-3").mouseout(function () {
        $("#box-image-3").removeClass("box-image-active");
    });

    $("#box-image-4").mouseover(function () {
        $("#box-image-4").addClass("box-image-active");
    });

    $("#box-image-4").mouseout(function () {
        $("#box-image-4").removeClass("box-image-active");
    });

    //Original Collections Page Image Instructions
    $("#picture1").mouseover(function () {
        $("#picture1").addClass("picture-active");
        $("#picture-text1").removeClass("picture-text-inactive");
        $("#picture-text1").addClass("picture-text-active");
    });

    $("#picture1").mouseout(function () {
        $("#picture1").removeClass("picture-active");
        $("#picture-text1").addClass("picture-text-inactive");
        $("#picture-text1").removeClass("picture-text-active");
    });

    $("#picture2").mouseover(function () {
        $("#picture2").addClass("picture-active");
        $("#picture-text2").removeClass("picture-text-inactive");
        $("#picture-text2").addClass("picture-text-active");
    });

    $("#picture2").mouseout(function () {
        $("#picture2").removeClass("picture-active");
        $("#picture-text2").addClass("picture-text-inactive");
        $("#picture-text2").removeClass("picture-text-active");
    });   
    
    $("#picture3").mouseover(function () {
        $("#picture3").addClass("picture-active");
        $("#picture-text3").addClass("picture-text-active");
        $("#picture-text3").removeClass("picture-text-inactive");
    });

    $("#picture3").mouseout(function () {
        $("#picture3").removeClass("picture-active");
        $("#picture-text3").addClass("picture-text-inactive");
        $("#picture-text3").removeClass("picture-text-active");
    });    
    
    $("#picture4").mouseover(function () {
        $("#picture4").addClass("picture-active");
        $("#picture-text4").addClass("picture-text-active");
        $("#picture-text4").removeClass("picture-text-inactive");
    });

    $("#picture4").mouseout(function () {
        $("#picture4").removeClass("picture-active");
        $("#picture-text4").addClass("picture-text-inactive");
        $("#picture-text4").removeClass("picture-text-active");
    });

    $("#picture5").mouseover(function () {
        $("#picture5").addClass("picture-active");
        $("#picture-text5").addClass("picture-text-active");
        $("#picture-text5").removeClass("picture-text-inactive");
    });
    
    $("#picture5").mouseout(function () {
        $("#picture5").removeClass("picture-active");
        $("#picture-text5").addClass("picture-text-inactive");
        $("#picture-text5").removeClass("picture-text-active");
    });

    $("#picture6").mouseover(function () {
        $("#picture6").addClass("picture-active");
        $("#picture-text6").addClass("picture-text-active");
        $("#picture-text6").removeClass("picture-text-inactive");
    });

    $("#picture6").mouseout(function () {
        $("#picture6").removeClass("picture-active");
        $("#picture-text6").addClass("picture-text-inactive");
        $("#picture-text6").removeClass("picture-text-active");
    });
    $("#picture7").mouseover(function () {
        $("#picture7").addClass("picture-active");
        $("#picture-text7").addClass("picture-text-active");
        $("#picture-text7").removeClass("picture-text-inactive");
    });

    $("#picture7").mouseout(function () {
        $("#picture7").removeClass("picture-active");
        $("#picture-text7").addClass("picture-text-inactive");
        $("#picture-text7").removeClass("picture-text-active");
    });
    $("#picture8").mouseover(function () {
        $("#picture8").addClass("picture-active");
        $("#picture-text8").addClass("picture-text-active");
        $("#picture-text8").removeClass("picture-text-inactive");
    });
    $("#picture8").mouseout(function () {
        $("#picture8").removeClass("picture-active");
        $("#picture-text8").addClass("picture-text-inactive");
        $("#picture-text8").removeClass("picture-text-active");
    });
    $("#picture9").mouseover(function () {
        $("#picture9").addClass("picture-active");
        $("#picture-text9").addClass("picture-text-active");
        $("#picture-text9").removeClass("picture-text-inactive");
    });
    $("#picture9").mouseout(function () {
        $("#picture9").removeClass("picture-active");
        $("#picture-text9").addClass("picture-text-inactive");
        $("#picture-text9").removeClass("picture-text-active");
    });
      
    $("#picture10").mouseover(function () {
        $("#picture10").addClass("picture-active");
        $("#picture-text10").addClass("picture-text-active");
        $("#picture-text10").removeClass("picture-text-inactive");
    });

    $("#picture10").mouseout(function () {
        $("#picture10").removeClass("picture-active");
        $("#picture-text10").addClass("picture-text-inactive");
        $("#picture-text10").removeClass("picture-text-active");
    });
});

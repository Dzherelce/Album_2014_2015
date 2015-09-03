/*

 *= require jquery.min


 */

$(document).ready(function() {

    setTimeout( function() { $("#help").fadeOut(2000)}, 2500);

    var currentImage = 0;
    var imgArray = $("#photodisplay img").map(function() {
        return $(this).attr("src");
    });


    var changeBG = function(index) {
        var bg = "url(" + imgArray[index] + ")";
        $('#photodisplay').fadeOut('slow',
                                   function() {
                                       $(this).css("background-image",
                                                   bg).fadeIn('fast')
                                   }
                                  )};

    $('#next').on('click', function(e) {
        currentImage++;
        if (currentImage > imgArray.length -1 ) {
            currentImage = 0;
        }
        changeBG(currentImage);
    });


    $("#prev").click(function() {
        currentImage--;
        if (currentImage < 0 ) {
            currentImage = imgArray.length -1;
        }
        changeBG(currentImage);
    });



    function leftArrowPressed() {
        $('#prev').click();
    }

    function rightArrowPressed() {
        $('#next').click();
    }

    document.onkeydown = function(evt) {
        evt = evt || window.event;
        switch (evt.keyCode) {
        case 37:
            leftArrowPressed();
            break;
        case 32: // space
            rightArrowPressed();
            break;
        case 39:
            rightArrowPressed();
            break;
        }
    };

});

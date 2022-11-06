$(document).ready(function() {
    $('#car1-btn').click(function() {
        $('#car1').toggle();
    })
    $('#car2-btn').click(function() {
        $('#car2').toggle();
    })
    $('#car3-btn').click(function() {
        $('#car3').toggle();
    })


    $('.start').click(function() {
        var CWidth = $('#car1').width();
        var RaceTrackWidth = $(window).width() - (CWidth + 100);

        var car1_time = Math.floor((Math.random() * 5000) + 1);
        var car2_time = Math.floor((Math.random() * 5000) + 1);
        var car3_time = Math.floor((Math.random() * 5000) + 1);


        $('#car1').animate({ left: RaceTrackWidth }, car1_time);
        $('#car2').animate({ left: RaceTrackWidth }, car2_time);
        $('#car3').animate({ left: RaceTrackWidth }, car3_time);

    })

    $(".stop").click(function() {
        $('#car1').css('display', 'none');
        $('#car2').css('display', 'none');
        $('#car3').css('display', 'none');

    })


    $("#f").click(function() {
        $(".ap_pr").append("<input type='text' id='i1' value='Hello'><br><br>");
    })
    $("#input").click(function() {
        data = 'dynamic';
        $("#i1").val(data);
    })
    $("#at").click(function() {
        $("#txt").append(" <b>Appended text</b>.");
    });
    $("#al").click(function() {
        $("#lst").append("<li>Appended Item</li>");
    });
    $("#pt").click(function() {
        $("#txt").prepend(" <b>Prepended text</b>.");
    });
    $("#pl").click(function() {
        $("#lst").prepend("<li>Prepended Item</li>");
    });
    $("#rl").click(function() {
        location.reload(true);
    });


    $("#gc").click(function() {
        const randomColor = Math.floor(Math.random() * 16777215).toString(16);
        var color = "#" + randomColor;
        $(".trapezoid").css("border-bottom-color", color);
    });
    $("#bc").click(function() {
        const randomColor = Math.floor(Math.random() * 16777215).toString(16);
        var color = "#" + randomColor;
        $(".rectangle").css("background-color", color);
    });
    $("#ti").click(function() {
        $(".circle").css("width", "+=10");
        $(".circle").css("height", "+=10");
    });
    $("#td").click(function() {
        $(".circle").css("width", "-=10");
        $(".circle").css("height", "-=10");
    });
    $("#rl1").click(function() {
        location.reload(true);
    });
})
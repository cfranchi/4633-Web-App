$(function() {
    $("#saved_matches_div").load("./home/savedmatches/savedMatchesView.html"); 
});

$(document).ready(function() {
    $.ajax({
        url: './home/savedmatches/savedMatchesController.php',
        type: 'post',
        data: {
            username: username
        },
        success: function(response) {

        }
    });
});
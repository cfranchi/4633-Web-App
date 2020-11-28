$(function() {
    $("#search_box_div").load("./home/search/searchbox/searchBoxView.html"); 
});

$(document).ready(function() {
    $("#search_box_div").on('click', '#search_team_button', function () {
        var team1 = $("#team1").val().trim();
            $.ajax({
                url: 'https://4633testapi.azurewebsites.net/getScheduleByTeam.php',
                type: 'post',
                data: {
                    team1: team1
                },
                success: function(response) {
                    saveResults(response, displayResults(response, "search_results_table", () => {
                    })
                    );
                }
            }); 
    });
});
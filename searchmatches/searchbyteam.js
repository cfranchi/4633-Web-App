$(document).ready(function() {
    $("#search_team_button").click(function() {
        var team1 = $("#team1").val().trim();
        if (team1 != ""){
            $.ajax({
                url: 'https://4633testapi.azurewebsites.net/getScheduleByTeam.php',
                type: 'post',
                data: {
                    team1: team1
                },
                success: function(response) {
                    if (response == 0) {
                        $("#search_results_div").html(response);
                    } else {
                        alert("timeout occured!");
                    }
                }
            });
        }
    });
});
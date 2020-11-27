$(document).ready(function() {
    $("#search_team_button").click(function() {
        var team1 = $("#team1").val().trim();
            $.ajax({
                url: 'https://4633testapi.azurewebsites.net/getScheduleByTeam.php',
                type: 'post',
                data: {
                    team1: team1
                },
                success: function(response) {
                    response = [{"test" : "test1"}];
                    var tbl=$("<table/>").attr("id","search_results_table");
                    $("#search_results_div").append(tbl);
                    for(var i = 0; i < response.length; i++)
                        {
                            var tr="<tr>";
                            var td1="<td>" + response[i]["team1"] + "</td>";
                            var td2="<td>" + response[i]["team2"] + "</td>";
                            var td3="<td>" + response[i]["location"] + "</td>";
                            var td4="<td>" + response[i]["date"] + "</td></tr>";
                            $("#search_results_table").append(tr + td1 + td2 + td3 + td4); 
                        }
                }
            });
    });
});

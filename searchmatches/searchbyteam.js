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
                    $("#search_results_div").html("");
                    var data = $.parseJSON(response);
                    var tbl=$("<table/>").attr("id","search_results_table");
                    $("#search_results_div").append(tbl);
                    for(var i = 0; i < data.length; i++)
                        {
                            var tr="<tr>";
                            var td1="<td>" + data[i]["team1"] + "</td>";
                            var td2="<td>" + data[i]["team2"] + "</td>";
                            var td3="<td>" + data[i]["location"] + "</td>";
                            var td4="<td>" + data[i]["date"] + "</td></tr>";
                            $("#search_results_table").append(tr + td1 + td2 + td3 + td4); 
                        }
                }
            });
    });
});
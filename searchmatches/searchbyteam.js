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
                    var tbl = $("<table/>").attr("id","search_results_table");
                    $("#search_results_div").append(tbl);
                    var tr = "<tr>";
                    var th0 = "<th></th>";
                    var th1 = "<th>Team</th>";
                    var th2 = "<th>Opponent</th>";
                    var th3 = "<th>Location</th>";
                    var th4 = "<th>Date</th></tr>";
                    $("#search_results_table").append(tr + th0 + th1 + th2 + th3 + th4); 
                    for(var i = 0; i < data.length; i++)
                        {
                            var tr = "<tr>";
                            var check = "<td><input type='checkbox' id='check_" + i + "'/></td>";
                            var td1 = "<td>" + data[i]["team1"] + "</td>";
                            var td2 = "<td>" + data[i]["team2"] + "</td>";
                            var td3 = "<td>" + data[i]["location"] + "</td>";
                            var td4 = "<td>" + data[i]["date"] + "</td></tr>";
                            $("#search_results_table").append(tr + check + td1 + td2 + td3 + td4); 
                        }
                }
            });
    });
});
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
            var data = $.parseJSON(response);
            tableName = "saved_matches_table";
            displayResults(tableName, 
                (tableName) => {
                    for (var i = 0; i < data.length; i++) {
                        var tr = "<tr>";
                        var td0 = "<td></td>";
                        var td1 = "<td>" + data[i]["team1"] + "</td>";
                        var td2 = "<td>" + data[i]["team2"] + "</td>";
                        var td3 = "<td>" + data[i]["location"] + "</td>";
                        var td4 = "<td>" + data[i]["date"] + "</td></tr>";
                        $("#" + tableName).append(tr +td0 + td1 + td2 + td3 + td4); 
                    }
                }
            );
        }
    });
});
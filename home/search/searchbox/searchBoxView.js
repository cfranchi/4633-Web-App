$(function() {
    $("#search_box_div").load("./home/search/searchbox/searchBoxView.html"); 
});

$(document).ready(function() {
    $("#search_box_div").on('click', '#search_Bundesliga_button', function () {
        var team1 = $("#Bundesliga").val().trim();
        $.ajax({
            url: 'https://4633testapi.azurewebsites.net/getScheduleByTeam.php',
            type: 'post',
            data: {
                team1: team1
            },
            success: function(response) {
                var data = $.parseJSON(response);
                var save_button_arr = [];
                tableName = "search_results_table";
                saveResults(response, displayResults(tableName, 
                    (tableName) => {
                        for (var i = 0; i < data.length; i++) {
                            var tr = "<tr>";
                            var save_button = "<td><button id='add_button_" + i + "'>save</button></td>";
                            var td1 = "<td>" + data[i]["team1"] + "</td>";
                            var td2 = "<td>" + data[i]["team2"] + "</td>";
                            var td3 = "<td>" + data[i]["location"] + "</td>";
                            var td4 = "<td>" + data[i]["date"] + "</td></tr>";
                            save_button_arr.push(save_button);
                            $("#" + tableName).append(tr + save_button + td1 + td2 + td3 + td4); 
                        }
                        return save_button_arr;
                    })
                );
            }
        }); 
    });
    $("#search_box_div").on('click', '#search_location_button', function () {
        var location = $("#location").val().trim();
        $.ajax({
            url: 'https://4633testapi.azurewebsites.net/getScheduleByLocation.php',
            type: 'post',
            data: {
                location: location
            },
            success: function(response) {
                var data = $.parseJSON(response);
                var save_button_arr = [];
                tableName = "search_results_table";
                saveResults(response, displayResults(tableName, 
                    (tableName) => {
                        for (var i = 0; i < data.length; i++) {
                            var tr = "<tr>";
                            var save_button = "<td><button id='add_button_" + i + "'>save</button></td>";
                            var td1 = "<td>" + data[i]["team1"] + "</td>";
                            var td2 = "<td>" + data[i]["team2"] + "</td>";
                            var td3 = "<td>" + data[i]["location"] + "</td>";
                            var td4 = "<td>" + data[i]["date"] + "</td></tr>";
                            save_button_arr.push(save_button);
                            $("#" + tableName).append(tr + save_button + td1 + td2 + td3 + td4); 
                        }
                        return save_button_arr;
                    })
                );
            }
        }); 
    });
    $("#search_box_div").on('click', '#search_month_button', function () {
        var month = $("#month").val().trim();
        $.ajax({
            url: 'https://4633testapi.azurewebsites.net/getScheduleByMonth.php',
            type: 'post',
            data: {
                month: month
            },
            success: function(response) {
                var data = $.parseJSON(response);
                var save_button_arr = [];
                tableName = "search_results_table";
                saveResults(response, displayResults(tableName, 
                    (tableName) => {
                        for (var i = 0; i < data.length; i++) {
                            var tr = "<tr>";
                            var save_button = "<td><button id='add_button_" + i + "'>save</button></td>";
                            var td1 = "<td>" + data[i]["team1"] + "</td>";
                            var td2 = "<td>" + data[i]["team2"] + "</td>";
                            var td3 = "<td>" + data[i]["location"] + "</td>";
                            var td4 = "<td>" + data[i]["date"] + "</td></tr>";
                            save_button_arr.push(save_button);
                            $("#" + tableName).append(tr + save_button + td1 + td2 + td3 + td4); 
                        }
                        return save_button_arr;
                    })
                );
            }
        }); 
    });
});
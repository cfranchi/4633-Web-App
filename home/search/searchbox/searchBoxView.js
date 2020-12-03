$(function() {
    $("#search_box_div").load("./home/search/searchbox/searchBoxView.html"); 
});

$(document).ready(function() {
    $("#search_box_div").on('click', '#search_league_button', function () {
        var league = $("#Select_League").val().trim();
        $.ajax({
            url: 'https://4633testapi.azurewebsites.net/getScheduleByLeague.php',
            type: 'post',
            data: {
                league: league
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
                            $("#add_button_" + i).on('click', function() {
                                console.log("working?");
                                i = i - 1;
                                var team1 = data[i]["team1"];
                                var team2 = data[i]["team2"];
                                var location = data[i]["location"];
                                var date = data[i]["date"];
                                $.ajax({
                                    url: './home/search/searchresults/searchResultsController.php',
                                    type: 'post',
                                    data: {
                                        username: username,
                                        team1: team1,
                                        team2: team2,
                                        location: location,
                                        date: date
                                    },
                                    success: function(response) {
                                        if (response == 0) {
                                            alert("match saved");
                                        } else {
                                            alert("error occured!");
                                        }
                                    }
                                });
                            });
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
    $("#search_box_div").on('click', '#search_Ligue_1_button', function () {
        var team1 = $("#Ligue_1").val().trim();
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
    $("#search_box_div").on('click', '#search_La_Liga_button', function () {
        var team1 = $("#La_Liga").val().trim();
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
    $("#search_box_div").on('click', '#search_Europa_League_button', function () {
        var team1 = $("#Europa_League").val().trim();
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
    $("#search_box_div").on('click', '#search_Champions_League_button', function () {
        var team1 = $("#Champions_League").val().trim();
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
    $("#search_box_div").on('click', '#search_English_Premier_League_button', function () {
        var team1 = $("#English_Premier_League").val().trim();
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
        var month = $("#Select_Month").val().trim();
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

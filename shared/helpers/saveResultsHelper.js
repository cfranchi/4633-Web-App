function saveResults(response, save_button_arr) {
    var data = $.parseJSON(response);
    for (var i = 0; i < save_button_arr.length; i++) {
        console.log("closure");
        $("#add_button_" + i).click = function (num) {
            return function () {
                var team1 = data[num]["team1"];
                var team2 = data[num]["team2"];
                var location = data[num]["location"];
                var date = data[num]["date"];
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
            };
        }(i);


        /*$("#add_button_" + i).click(function() {
            console.log("i am button " + i);
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
        });*/
    }
}
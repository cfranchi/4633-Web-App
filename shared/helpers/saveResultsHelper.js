function saveResults(response, save_button_arr) {
    var data = $.parseJSON(response);
    for (var i = 0; i < save_button_arr.length; i++) {
            $("#add_button_" + i).click(function() {
            var j = 0;
            console.log(save_button_arr[j]);
            while (save_button_arr[j] != $("#add_button_" + i)) {
                j = j + 1;
            }
            console.log(j);
            var team1 = data[j]["team1"];
            var team2 = data[j]["team2"];
            var location = data[j]["location"];
            var date = data[j]["date"];
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
    }
}

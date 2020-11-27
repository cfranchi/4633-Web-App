function saveResults(response, save_button_arr) {
    var data = $.parseJSON(response);
    for (var i = 0; i < save_button_arr.length; i++) {
        $("#add_button_" + i).click(function() {
            i = i - 1;
            var team1 = data[i]["team1"];
            var team2 = data[i]["team2"];
            var location = data[i]["location"];
            var date = data[i]["date"];
            console.log(username, team1, team2, location, date);
            /*$.ajax({
                url: 'savematch.php',
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
                        $("#registration_success_message").attr("hidden", false)
                    } else {
                        alert("username already exists or timeout occured!");
                    }
                }
            });*/
        });
        console.log(i);
    }
}
function displayResults(response) {
    $("#search_results_table_div").html("");
    var data = $.parseJSON(response);
    var tbl = $("<table/>").attr("id","search_results_table");
    var save_button_arr = [];
    $("#search_results_table_div").append(tbl);
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
            var save_button = "<td><button id='add_button_" + i + "'>save</button></td>";
            var td1 = "<td>" + data[i]["team1"] + "</td>";
            var td2 = "<td>" + data[i]["team2"] + "</td>";
            var td3 = "<td>" + data[i]["location"] + "</td>";
            var td4 = "<td>" + data[i]["date"] + "</td></tr>";
            save_button_arr.push(save_button);
            $("#search_results_table").append(tr + save_button + td1 + td2 + td3 + td4); 
        }
    return save_button_arr;
}
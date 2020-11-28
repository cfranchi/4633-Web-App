function displayResults(response, tableName, callback = () => {}) {
    $("#" + tableName + "_div").html("");
    var data = $.parseJSON(response);
    var tbl = $("<table/>").attr("id", tableName);
    var save_button_arr = [];
    $("#" + tableName + "_div").append(tbl);
    var tr = "<tr>";
    var th0 = "<th></th>";
    var th1 = "<th>Team</th>";
    var th2 = "<th>Opponent</th>";
    var th3 = "<th>Location</th>";
    var th4 = "<th>Date</th></tr>";
    $("#" + tableName).append(tr + th0 + th1 + th2 + th3 + th4); 
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
    callback();
}
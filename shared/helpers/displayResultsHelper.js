function displayResults(tableName, callback = () => {}) {
    $("#" + tableName + "_div").html("");
    var tbl = $("<table/>").attr("id", tableName);
    $("#" + tableName + "_div").append(tbl);
    var tr = "<tr>";
    var th0 = "<th></th>";
    var th1 = "<th>Team</th>";
    var th2 = "<th>Opponent</th>";
    var th3 = "<th>Stadium</th>";
    var th4 = "<th>Date</th></tr>";
    $("#" + tableName).append(tr + th0 + th1 + th2 + th3 + th4); 
    return callback(tableName);
}
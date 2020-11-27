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
                    var list = response;
                    var cols = [];               
                    for (var i = 0; i < list.length; i++) { 
                        for (var k in list[i]) { 
                            if (cols.indexOf(k) === -1) {  
                                cols.push(k); 
                            } 
                        } 
                    }
                    var table = document.createElement("table"); 
                    var tr = table.insertRow(-1); 
                    for (var i = 0; i < cols.length; i++) { 
                        var theader = document.createElement("th"); 
                        theader.innerHTML = cols[i]; 
                        tr.appendChild(theader); 
                    } 
                    for (var i = 0; i < list.length; i++) { 
                        trow = table.insertRow(-1); 
                        for (var j = 0; j < cols.length; j++) { 
                            var cell = trow.insertCell(-1); 
                            cell.innerHTML = list[i][cols[j]]; 
                        } 
                    } 
                    var el = document.getElementById("table"); 
                    el.innerHTML = ""; 
                    el.appendChild(table);
                }
            });
    });
});
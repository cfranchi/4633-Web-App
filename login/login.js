$(document).ready(function() {
    $("#login_button").click(function() {
        var username = $("#username").val().trim();
        var password = $("#password").val().trim();
        if (username != "" && password != "" ){
            $.ajax({
                url: './login.php',
                type: 'post',
                data: {
                    username: username,
                    password: password
                },
                success: function(response) {
                    if (response == 0) {
                        $("#login_div").remove();
                        $("#main_div").load("./home/home.php");
                    } else if (response == 1) {
                        alert("incorrect username or password");
                    } else {
                        alert("unknown error occured");
                    }
                }
            });
        }
    });
});
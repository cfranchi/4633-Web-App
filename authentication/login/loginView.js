var username;

$(function() {
    $("#login_div").load("./authentication/login/loginView.html"); 
});

$(document).ready(function() {
    $("#login_div").on('click', '#login_button', function () {
        username = $("#username").val().trim();
        var password = $("#password").val().trim();
        if (username != "" && password != "" ){
            $.ajax({
                url: './login/login.php',
                type: 'post',
                data: {
                    username: username,
                    password: password
                },
                success: function(response) {
                    if (response == 0) {
                        $("#login_div").remove();
                        $("#main_div").load("./home/homeView.html");
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
function na1Demo() {
    debugger;
    na1Get('http://localhost:3000/people/', function(data) {
        debugger;
        console.log("success");

        var data = JSON.parse(data);

        data.users.forEach(function(user){
            console.log("username: " + user.username);
        })
    }, function(data){
        console.log("error");
    });
}

// basically a simple version of $.get
function na1Get(url, success, error){
    var request = new XMLHttpRequest();
    request.open('GET', url, true);

    request.onload = function() {
        if (request.status >= 200 && request.status < 400) {
            var resp = request.responseText;
            success(resp);
        } else {
            error();
        }
    };

    request.onerror = function() {
        error();
    };

    request.send();
}
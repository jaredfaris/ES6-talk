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
function na1Demo2() {
    debugger;
    na1Get('http://localhost:3000/json/', (data) => {
        debugger;
        console.log("success");

        var data = JSON.parse(data);

        data.users.forEach((user) => console.log("username: " + user.username));

    }, (data) => {
        console.log("error");
    });
}
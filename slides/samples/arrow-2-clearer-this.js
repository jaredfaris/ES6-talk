function arrow2Demo2() {
    this.userId = 2;

    debugger;

    this.writePersonDetails = function(person){
        console.log("Username: " + person.username);
        console.log("Email: " + person.email);
    };

    // ajax method defined in arrow-1-long-functions.js
    na1Get('http://localhost:3000/person/' + this.userId, (data) => {
        debugger;

        // What is going to happen here?
        var data = JSON.parse(data);
        this.writePersonDetails(data);

    }, function(data){
        console.log("error");
    });
}

document.getElementById("arrowButton2clearer").addEventListener("click", arrow2Demo2);
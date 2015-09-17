// uses promiseGet from promises-1-ajax.js

function promiseDemo2() {
    this.userId = 2;

    debugger;

    this.writePersonDetails = function(person){
        console.log("Username: " + person.username);
        console.log("Email: " + person.email);
    };

    var myPromise = promiseGet('http://localhost:3000/person/' + this.userId);

    myPromise.then((data) => {
            // What is going to happen here?
            var data = JSON.parse(data);
            this.writePersonDetails(data);
        }).catch((data) => {
            console.log("error");
        });

    setTimeout(() => {
        console.log("Attaching a 'then' now.");
        debugger; // look at the status of the promise

        myPromise.then(() => {
            console.log("Hi");
        })
    },3000)
}

document.getElementById("promiseButton2").addEventListener("click", promiseDemo2);
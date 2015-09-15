'use strict';

// basically a simple version of $.get
function promiseGet(url, success, error){
    debugger;

    var promise = new Promise(function(resolve, reject){
        var request = new XMLHttpRequest();
        request.open('GET', url, true);

        request.send();

        request.onload = function() {
            if (this.status === 200){
                resolve(this.response);
            } else {
                reject(this.statusText);
            }
        };
        request.onerror = function() {
            reject(this.statusText);
        };
    });

    return promise;
}

function promiseDemo1() {
    this.userId = 2;

    debugger;

    this.writePersonDetails = function(person){
        console.log("Username: " + person.username);
        console.log("Email: " + person.email);
    };

    promiseGet('http://localhost:3000/person/' + this.userId)
        .then((data) => {
            debugger;

            // What is going to happen here?
            var data = JSON.parse(data);
            this.writePersonDetails(data);
        }).catch((data) => {
            console.log("error");
        });
}

document.getElementById("promiseButton1").addEventListener("click", promiseDemo1);
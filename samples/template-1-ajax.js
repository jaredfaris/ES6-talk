'use strict';

function template1Demo(){
    // uses method from promises-1-ajax.js

    promiseGet('http://localhost:3000/people/')
        .then((data) => {
            debugger;

            data = JSON.parse(data);

            data.users.forEach((user) => {
                console.log(`User ${user.username} has email address ${user.email}.`);
            })
        });
}
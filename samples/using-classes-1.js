"use strict";

class Profile {
    constructor(emailAddress) {
        this.emailAddress = emailAddress;
    }

    changeEmail(newAddress){
        this.emailAddress = newAddress;
    }
}

function usingClasses1() {
    debugger;

    var userProfile = new Profile("jsmith@example.org");

    console.log(userProfile.emailAddress);

    userProfile.changeEmail("bob@example.org");

    console.log(userProfile.emailAddress);
}
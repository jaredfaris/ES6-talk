"use strict";

// the class "Profile" was defined in using-classes-1

class RealMemberProfile extends Profile {
    constructor(emailAddress, memberId) {
        super(emailAddress);
        this._memberId = memberId;
    }

    changeEmail(newAddress){
        super.changeEmail(newAddress.replace("org","com"));
    }

    get memberId() {
        return this._memberId;
    }
}

function usingClasses5() {
    debugger;

    var myMemberProfile = new RealMemberProfile("test@example.org", 23456);

    // What will be logged?
    console.log(myMemberProfile.emailAddress);
    console.log(myMemberProfile.memberId);

    debugger;
    myMemberProfile.changeEmail("allen@example.org");

    // Now what will be logged?
    console.log(myMemberProfile.emailAddress);
}
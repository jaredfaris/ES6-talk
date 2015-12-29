"use strict";

// the class "Profile" was defined in using-classes-1

class FakeMemberProfile extends Profile {
    get memberId() {
        return 12345;
    }
}

function usingClasses4() {
    debugger;

    var myMemberProfile = new FakeMemberProfile("test@example.org");

    // What will be logged?

    console.log(myMemberProfile.emailAddress);
    console.log(myMemberProfile.memberId);

}
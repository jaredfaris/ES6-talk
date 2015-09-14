"use strict"

// RealMemberProfile was defined in using-classes-5-super.js

function usingClasses8() {
    debugger;

    var user1 = new RealMemberProfile("example@example.org", 1);
    var user2 = new RealMemberProfile("test@example.org", 2);

    console.log("Do the prototypes match?  " + (user1.__proto__ === user2.__proto__));

    console.log("User2 memberId: " + user2.memberId);

    // let's mess with the prototype ("super class")
    var prototypeReference = Object.getPrototypeOf(user2);
    Object.defineProperty(prototypeReference, "memberId", {
        get: function myProperty() {
            return "FooBar";
        }
    });

    console.log("User1 memberId: " + user1.memberId);
    console.log("User2 memberId: " + user2.memberId);
}
"use strict"

function usingClasses7a() {
    // Does not work
    debugger;

    var m = new MyHoistingClass1();

    class MyHoistingClass1 {
        constructor () {
            console.log("MyHoistingClass1 created")
        }
    }
}

function usingClasses7b() {
    // Works
    debugger;

    var m = new MyHoistingClass2();
}

class MyHoistingClass2 {
    constructor () {
        console.log("MyHoistingClass2 created")
    }
}
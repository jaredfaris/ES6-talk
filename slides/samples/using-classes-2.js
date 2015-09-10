"use strict";

class MyClass {
    constructor(foo) {
        this.foo = foo;
    }
}

function usingClasses2() {
    debugger

    console.log(typeof MyClass);

    // this isn't going to work
    MyClass();
}
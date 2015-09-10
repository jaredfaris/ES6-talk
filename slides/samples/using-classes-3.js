"use strict";

class MyComplexClass {
    constructor () {
        this._myPseudoPrivateVar = "foo";
    }
    get myProp() {
        return this._myPseudoPrivateVar;
    }
    set myProp(value) {
        this._myPseudoPrivateVar = "setter_" + value;
    }
}

function usingClasses3() {
    debugger;

    var mcc = new MyComplexClass();

    console.log(mcc.myProp);

    mcc.myProp = "bar";

    console.log(mcc.myProp);
}
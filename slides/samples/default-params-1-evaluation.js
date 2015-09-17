'use strict'


function defaultParamsDemo2() {
    debugger;

    function stringConcat(value, myString = ""){
        // notice the value of myString the second time through
        myString += value;
        return myString;
    }

    console.log(stringConcat("Foo"));
    debugger;
    console.log(stringConcat("Bar"));
}
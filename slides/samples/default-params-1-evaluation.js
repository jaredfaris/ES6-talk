'use strict'

function defaultParamsDemo1() {
    debugger;

    var myString = "";

    function stringConcat(value, string = ""){
        string += value;
        return string;
    }

    console.log(stringConcat("Foo", myString));
    console.log(stringConcat("Bar", myString));
}

function defaultParamsDemo2() {
    debugger;

    function stringConcat(value, string = ""){
        string += value;
        return string;
    }

    console.log(stringConcat("Foo"));
    console.log(stringConcat("Bar"));
}
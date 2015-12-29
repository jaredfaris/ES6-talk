'use strict'


function defaultParamsDemo2() {
    debugger;

    function stringConcat(firstWord, secondWord = ""){
        // notice the value of myString the second time through
        secondWord += firstWord;
        return secondWord;
    }

    console.log(stringConcat("Foo"));
    debugger;
    console.log(stringConcat("Bar"));
}
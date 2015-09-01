function letHoistingDemo1() {
    "use strict";
    debugger;
    // What will get logged?

    console.log(myVar);
    console.log(myLet);

    var myVar = 5;
    let myLet = 10;
}
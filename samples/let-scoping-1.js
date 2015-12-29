function letScopingDemo1() {
    "use strict";
    debugger;
    // What do you think this logs?
    // What will i be?

    var i = 5;

    for (let i = 0; i< 10; i++ ){
        let myVar = i;
    }

    console.log(myVar);
}
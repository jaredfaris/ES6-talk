function constantScopeDemo2() {
    "use strict"
    const MY_CONST = 7;
    debugger;

    // what will be logged?

    var childFunction = function() {
        console.log(MY_CONST); // This errors in IE
        const MY_CONST = 5;
        console.log(MY_CONST); // This is never called in IE due to an error
    };

    try {
        childFunction();
    } catch(err){
        // do nothing
    }
    console.log(MY_CONST);

    // With "use strict", it doesn't see this as a conflict
    if(true){
        const MY_CONST = 99;
        console.log(MY_CONST);
    }
}
function functionScopingDemo1() {
    debugger;
    // What do you think this logs?


    var i = 5;

    for (var i = 0; i< 10; i++ ){
        var myVar = i;
    }

    console.log(myVar);
}
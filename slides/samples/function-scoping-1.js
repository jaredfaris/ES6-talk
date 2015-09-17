function functionScopingDemo1() {
    debugger;
    // What do you think this logs?

    for (var i = 0; i< 10; i++ ){
        var j = 5;
    }

    console.log(j);
}
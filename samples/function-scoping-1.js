function functionScopingDemo1() {
    debugger;
    // What do you think this logs?

    for (var i = 0; i< 3; i++ ){
        var j = i;
    }

    console.log(j);
}
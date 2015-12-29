function functionScopingDemo2() {
    debugger;
    // What will i be?
    // What do you think this logs?

    var numbers = [0,1,2,3,4,5,6,7,8,9]
    var i = 5;

    numbers.forEach(function(number) {
        i = number;
        var myVar = number;
    })

    console.log(myVar);
}
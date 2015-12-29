function variableScopingDemo1() {
    // myText gets hoisted here

    debugger;

    setTimeout(function(){
        console.log(myText);
    }, 1000);

    var myText = "I'm a string!";
}


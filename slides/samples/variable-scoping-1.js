function variableScopingDemo1() {
    // myText gets hoisted here

    debugger

    setTimeout(function(){
        alert(myText);
    }, 1000);

    var myText = "I'm a string!";
}
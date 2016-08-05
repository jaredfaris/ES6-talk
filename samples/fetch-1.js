function myFetchDemo(url) {
    debugger;
    // open the network panel

    fetch(url)
    .then(function (response) {
        console.log(response.text().then(function(value) {
            debugger;
            console.log(value);
        }));
    });
}
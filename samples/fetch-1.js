function myFetchDemo(url) {
    // open the network panel
    fetch(url)
    .then(function (response) {
        console.log(response.text().then((val) => console.log(val)));
    });
}
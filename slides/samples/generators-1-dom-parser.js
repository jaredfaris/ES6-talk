"use strict";

function generators1Demo() {
    debugger;

    function* fragmentListItems() {
        var fragments = document.querySelectorAll("li.fragment");

        for(let fragmentIndex in fragments) {
            let fragment = fragments[fragmentIndex];
            yield fragment;
        }
    }

    var take = 5;
    var count = 0;

    for(let fragment of fragmentListItems()) {
        if(fragment.classList.contains("visible")){
            count++;
            console.log(fragment.innerHTML);
        }

        if (count >= take)
            break;
    }
}
"use strict"
class timelineManager {
    constructor(steps, timelineImageId, timelineTitleId) {
        this.steps = steps;
        this.timelineImage = document.getElementById(timelineImageId);
        this.timelineTitle = document.getElementById(timelineTitleId);
        this.counter = 0;
        this.maxCounter = steps.length - 1; //accounts for 0 index

        this.shiftTimeline = () => {
            this.timelineImage.style.transform = `translate(${this.steps[this.counter].pos},0)`;

            this.timelineTitle.innerHTML = this.steps[this.counter].name;
        }

        this.shiftTimeline();
    }

    next() {
        if(this.counter < this.maxCounter)
            this.counter++;

        this.shiftTimeline();
    }

    prev() {
        if(this.counter > 0)
            this.counter--;

        this.shiftTimeline();
    }

    first() {
        this.counter = 0;
        this.shiftTimeline();
    }

    last() {
        this.counter = this.maxCounter;
        this.shiftTimeline();
    }
}

var timelineData = [
    {
        name: "Brendan Eich invents Mocha @ Netscape",
        pos: 0
    },
    {
        name: "Renamed to LiveScript and then JavaScript",
        pos: "-400px"
    },
    {
        name: "Netscape gave JS to Ecma International",
        pos: "-860px"
    },
    {
        name: "ECMAScript 1 Published",
        pos: "-1300px"
    },
    {
        name: "ECMAScript 2 Published",
        pos: "-1800px"
    },
    {
        name: "ECMAScript 3 Published",
        pos: "-2600px"
    },
    {
        name: "Firefox Released",
        pos: "-3400px"
    },
    {
        name: "Chrome Released",
        pos: "-6740px"
    },
    {
        name: "ECMAScript 5 Published",
        pos: "-8000px"
    },
    {
        name: "ECMAScript 5.1 Published",
        pos: "-8800px"
    },
    {
        name: "ECMAScript 6 Published",
        pos: "-10920px"
    },
    {
        name: "The Future",
        pos: "-11200px"
    }
];


window.onload = () => {
    var tm = new timelineManager(timelineData, "ecmascriptTimeline", "ecmascriptTimelineTitle");
    document.getElementById("ecmascriptTimelineFirst").onclick = () => tm.first();
    document.getElementById("ecmascriptTimelineLeft").onclick = () => tm.prev();
    document.getElementById("ecmascriptTimelineRight").onclick = () => tm.next();
    document.getElementById("ecmascriptTimelineLast").onclick = () => tm.last();
}
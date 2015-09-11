"use strict";

class Event {
    constructor (date, name) {
        this.date = date;
        this.name = name;
    }

    static DaysBetweenEvents(event1, event2){
        debugger;
        var diff_in_ms = event2.date.getTime() - event1.date.getTime();

        var ms_in_day = 1000*60*60*24;

        return Math.round(diff_in_ms / ms_in_day)
    }
}

function usingClasses6() {
    debugger;

    var event1 = new Event(new Date(2005,0,23), "Foo Fest");
    var event2 = new Event(new Date(2006,0,27), "Bar Fest");

    console.log(Event.DaysBetweenEvents(event1, event2));;
}
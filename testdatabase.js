var d1 = {
    UUID: "John",
    DEID: 1,
    type: "event",
    name: "cse110 lecture",
    relation: "cse110",
    location: "center hall 113",
    details: "this class is difficult",
    start: "2022-11-21T14:00:00.000Z",
    end: "2022-11-21T15:50:00.000Z",
    done: 0,
    color: "#FF0000"
};
var d2 = {
    UUID: "John",
    DEID: 2,
    type: "exam",
    name: "math 100a exam",
    relation: "math100a",
    location: "warren lecture hall 2001",
    details: "this class is difficult",
    start: "2022-11-21T08:00:00.000Z",
    end: "2022-11-21T10:50:00.000Z",
    done: 0,
    color: "#00FF00"
};
var d3 = {
    UUID: "John",
    DEID: 3,
    type: "event",
    name: "phys 2b",
    relation: "phys2b",
    location: "york 335",
    details: "make sure to attend for iClicker credit!",
    start: "2022-11-21T16:00:00.000Z",
    end: "2022-11-21T16:50:00.000Z",
    done: 0,
    color: "#0000FF"
};
var d4 = {
    UUID: "John",
    DEID: 4,
    type: "task",
    name: "lab 8",
    relation: "cse110",
    location: "",
    details: "make the graph for the data, and make sure it's pretty",
    start: "2022-11-21T12:00:00.000Z",
    end: "2022-11-21T12:00:00.000Z",
    done: 0,
    color: "#FF0000"
};

var darray = [d1, d2, d3, d4];

function store() {
    window.localStorage.setItem('events', JSON.stringify(darray));
}
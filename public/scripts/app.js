"use strict";

console.log("App.js called");

var firstDiv = document.getElementById("div1");
var secondDiv = document.getElementById("div2");

var divOneData = {
    title: "Indecision App",
    subtitle: "App Challenge",
    list: {
        item1: "Item1",
        item2: "Item2"
    },
    userOptions: []
};

var divTwoData = {
    inputAttribs: {
        type: "text",
        id: "input1",
        name: "option"
    },

    buttonAttribs: {
        id: {
            add: "addButton",
            remove: "removeButton",
            removeAll: "removeAllButton"
        },
        className: "button",
        buttonLabel: {
            add: "Add Option",
            remove: "Remove Last Option",
            removeAll: "Remove All Options"
        }
    }
};

var removeOption = function removeOption() {
    if (divOneData.userOptions.length > 0) {
        divOneData.userOptions.pop();
        renderDivOne();
    }
};

var removeAllOptions = function removeAllOptions() {
    divOneData.userOptions = [];
    renderDivOne();
};

var formSubmit = function formSubmit(eventCallback) {
    eventCallback.preventDefault();
    var userVal = eventCallback.target.elements.option.value;
    if (userVal) {
        divOneData.userOptions.push(userVal);
        console.log(userVal);

        eventCallback.target.elements.option.value = null;
        renderDivOne();
    }
};

var printArray = function printArray() {
    return divOneData.userOptions.map(function (number) {
        return React.createElement(
            "p",
            null,
            number
        );
    });
};

var renderDivOne = function renderDivOne() {
    var divOneObj = React.createElement(
        "div",
        null,
        React.createElement(
            "h1",
            null,
            "Title : ",
            divOneData.title
        ),
        React.createElement(
            "p",
            null,
            "Subtitle : ",
            divOneData.subtitle
        ),
        React.createElement(
            "ol",
            null,
            React.createElement(
                "li",
                null,
                "First Item : ",
                divOneData.list.item1
            ),
            React.createElement(
                "li",
                null,
                "Second Item : ",
                divOneData.list.item2
            )
        ),
        React.createElement(
            "p",
            null,
            "Total User Options : ",
            divOneData.userOptions.length
        ),
        printArray()
    );
    ReactDOM.render(divOneObj, firstDiv);
};

var renderDivTwo = function renderDivTwo() {
    var divTwoObj = React.createElement(
        "div",
        null,
        React.createElement(
            "form",
            { onSubmit: formSubmit },
            React.createElement("input", {
                type: divTwoData.inputAttribs.type,
                id: divTwoData.inputAttribs.id,
                name: divTwoData.inputAttribs.name }),
            React.createElement("br", null),
            React.createElement("br", null),
            React.createElement(
                "button",
                {
                    id: divTwoData.buttonAttribs.id.add,
                    className: divTwoData.buttonAttribs.className
                },
                divTwoData.buttonAttribs.buttonLabel.add
            ),
            "\xA0\xA0",
            React.createElement(
                "button",
                {
                    id: divTwoData.buttonAttribs.id.remove,
                    className: divTwoData.buttonAttribs.className,
                    onClick: removeOption
                },
                divTwoData.buttonAttribs.buttonLabel.remove
            ),
            "\xA0\xA0",
            React.createElement(
                "button",
                {
                    id: divTwoData.buttonAttribs.id.removeAll,
                    className: divTwoData.buttonAttribs.className,
                    onClick: removeAllOptions
                },
                divTwoData.buttonAttribs.buttonLabel.removeAll
            )
        )
    );
    ReactDOM.render(divTwoObj, secondDiv);
};

renderDivOne();
renderDivTwo();

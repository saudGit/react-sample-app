console.log("Events Attributes JS File Called");

const divOne = document.getElementById("div1");
const divtwo = document.getElementById("div2");

let count = 1;
const plusBtnId = "b1";
const minusBtnId = "b2";
const btnClass = "button";

const addOnetoCounter = () =>
{
    count++;
    renderCounter();
};

const subOnefromCounter = () =>
{
    count--;
    renderCounter();
};

const renderCounter = () =>
{
    const divOneObj = (
        <div>
            <p>
                Current Count : {count}
            </p>
        </div>
    );
    ReactDOM.render(divOneObj,divOne);
};

const renderButtons = () =>
{
    const divtwoObj = (
        <div>
            <button id = {plusBtnId} className = {btnClass} onClick = {addOnetoCounter}>Add +1 Button</button>
            &nbsp;
            <button id = {minusBtnId} className = {btnClass} onClick = {subOnefromCounter}>Sub -1 Button</button>
        </div>
    );
    ReactDOM.render(divtwoObj,divtwo);
};

renderCounter();
renderButtons();

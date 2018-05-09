console.log("App.js called");

const firstDiv = document.getElementById("div1");
const secondDiv = document.getElementById("div2");

let divOneData = {
    title : "Indecision App",
    subtitle : "App Challenge",
    list : {
        item1 : "Item1",
        item2 : "Item2"
    },
    userOptions : [],
};

let divTwoData = {
    inputAttribs : {
        type : "text",
        id : "input1",
        name : "option"
    },

    buttonAttribs : {
        id : {
            add : "addButton",
            remove : "removeButton",
            removeAll : "removeAllButton"
        },
        className : "button",
        buttonLabel : {
            add : "Add Option",
            remove : "Remove Last Option",
            removeAll : "Remove All Options"
        }
    }
};

const removeOption = () =>
{
    divOneData.userOptions.pop();
    renderDivOne();
};

const removeAllOptions = () =>
{
    divOneData.userOptions = [];
    renderDivOne();
};

const formSubmit = (eventCallback) =>
{
    eventCallback.preventDefault();
    const userVal = eventCallback.target.elements.option.value;
    if(userVal)
    {
        divOneData.userOptions.push(userVal);
        console.log(userVal);

        eventCallback.target.elements.option.value = null;
        renderDivOne();
    }
};


const renderDivOne = () =>
{
    const divOneObj = (
        <div>
            <h1>Title : {divOneData.title}</h1>
            <p>Subtitle : {divOneData.subtitle}</p>
            <ol>
                <li>First Item : {divOneData.list.item1}</li>
                <li>Second Item : {divOneData.list.item2}</li>
            </ol>
            <p>
                Total User Options : {divOneData.userOptions.length}
            </p>
        </div>
    );
    ReactDOM.render(divOneObj, firstDiv);
};

const renderDivTwo = () =>
{
    const divTwoObj = (
        <div>
            <form onSubmit={formSubmit}>
                <input
                    type = {divTwoData.inputAttribs.type}
                    id= {divTwoData.inputAttribs.id}
                    name = {divTwoData.inputAttribs.name}/>
                <br/><br/>
                <button
                    id = {divTwoData.buttonAttribs.id.add}
                    className = {divTwoData.buttonAttribs.className}
                >
                    {divTwoData.buttonAttribs.buttonLabel.add}
                </button>

                &nbsp;&nbsp;

                <button
                    id = {divTwoData.buttonAttribs.id.remove}
                    className = {divTwoData.buttonAttribs.className}
                    onClick={removeOption}
                >
                    {divTwoData.buttonAttribs.buttonLabel.remove}
                </button>

                &nbsp;&nbsp;

                <button
                    id = {divTwoData.buttonAttribs.id.removeAll}
                    className = {divTwoData.buttonAttribs.className}
                    onClick={removeAllOptions}
                >
                    {divTwoData.buttonAttribs.buttonLabel.removeAll}
                </button>
            </form>
        </div>
    );
    ReactDOM.render(divTwoObj, secondDiv);
};

renderDivOne();
renderDivTwo();
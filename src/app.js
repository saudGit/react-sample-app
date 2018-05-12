console.log("App.js called");

const firstDiv = document.getElementById("div1");
const secondDiv = document.getElementById("div2");
const thirdDiv = document.getElementById("div3");

let divVisibility = true;

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
          removeAll : "removeAllButton",
          random : "randomButton"
      },
      className : "button",
      buttonLabel : {
          add : "Add Option",
          remove : "Remove Last Option",
          removeAll : "Remove All Options",
          random: "A random Generator"
      }
  }
};

let divThreeData = {
    buttonAttribs: {
        id : "showhide",
        className: "button",
        buttonLabel : {
            showText : "Show Details",
            hideText : "Hide Details"
        }
    }
};

const removeOption = () =>
{
    if(divOneData.userOptions.length > 0)
    {
        divOneData.userOptions.pop();
        renderDivOne();
    }
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
        eventCallback.target.elements.option.value = null;
        renderDivOne();
    }
};

const printArray = () =>
{
    if(divOneData.userOptions.length > 0)
    {
        divOneData.userOptions.map(number => <p key={number}>{number}</p>);
    }
};

const generateRandomNum = () =>
{
    console.log(Math.random());
};

const showOrHideDivs = () =>
{
    divVisibility = !divVisibility;
    firstDiv.style.display = (divVisibility) ? 'block' : 'none';
    secondDiv.style.display = (divVisibility) ? 'block' : 'none';
    renderDivOne();
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
            {printArray()}
        </div>
    );
    ReactDOM.render(divOneObj, firstDiv);

    renderDivTwo();
    renderDivThree();

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
                    disabled = {divOneData.userOptions.length === 0}
                    onClick={removeOption}
                >
                    {divTwoData.buttonAttribs.buttonLabel.remove}
                </button>

                &nbsp;&nbsp;

                <button
                    id = {divTwoData.buttonAttribs.id.removeAll}
                    className = {divTwoData.buttonAttribs.className}
                    disabled = {divOneData.userOptions.length === 0}
                    onClick={removeAllOptions}
                >
                    {divTwoData.buttonAttribs.buttonLabel.removeAll}
                </button>

                &nbsp;&nbsp;

                <button
                    id = {divTwoData.buttonAttribs.id.random}
                    className = {divTwoData.buttonAttribs.className}
                    disabled = {divOneData.userOptions.length === 0}
                    onClick={generateRandomNum}
                >
                    {divTwoData.buttonAttribs.buttonLabel.random}
                </button>

            </form>
        </div>
    );
    ReactDOM.render(divTwoObj, secondDiv);
};

const renderDivThree = () =>
{
    const divThreeObj = (
        <div>
            <button
            id = {divThreeData.buttonAttribs.id}
            className={divThreeData.buttonAttribs.className}
            onClick={showOrHideDivs}
            >
                {divVisibility ? divThreeData.buttonAttribs.buttonLabel.hideText : divThreeData.buttonAttribs.buttonLabel.showText}
            </button>
        </div>
    );
    ReactDOM.render(divThreeObj, thirdDiv);
};


renderDivOne();

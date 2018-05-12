console.log("First Component");

class Header extends React.Component
{
    render()
    {
        return (
            <div>
                <h2>
                    Indecision App.
                </h2>
                <h3>
                    This is a Test App.
                </h3>
            </div>
        );
    }
}

class Action extends React.Component
{
    render()
    {
        return (
            <div>
                <button>
                    Click Me!
                </button>
            </div>
        );
    }
}

class Options extends React.Component
{
    render()
    {
        return (
            <div>
                <p>
                    All your options are here!
                </p>
            </div>
        );
    }
}

class AddOption extends React.Component
{
    render()
    {
        return (
            <div>
                <p> Add More OPtions</p>
                <button>Click to Add Option</button>
            </div>
        );
    }
}

const fullPageDiv = (
    <div>
        <Header/>
        <Action/>
        <Options/>
        <AddOption/>
    </div>
);

ReactDOM.render(fullPageDiv, document.getElementById("div1"));
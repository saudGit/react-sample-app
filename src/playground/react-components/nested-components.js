console.log("First Component");

class IndecisionApp extends React.Component
{
    render()
    {
        return (
            <div>
                <Header/>
                <Action/>
                <Options/>
                <AddOption/>
            </div>
        );
    }
}

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
                <OptionItem/>
            </div>
        );
    }
}

class OptionItem extends React.Component
{
    render()
    {
        return (
            <div>
                <p>Option Name</p>
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

ReactDOM.render(<IndecisionApp/>, document.getElementById("div1"));
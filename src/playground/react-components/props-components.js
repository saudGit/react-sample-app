console.log("First Component");

class IndecisionApp extends React.Component
{
    render()
    {
        const title = "Indecision App";
        const subTitle = "Making a test app on React";
        const options = ['One','Two','Three'];
        return (
            <div>
                <Header
                    title = {title}
                    subtitle = {subTitle}
                />
                <Action/>
                <Options
                    options={options}
                />
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
                    {this.props.title}
                </h2>
                <h3>
                    {this.props.subtitle}
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
                    {this.props.options.map((optionItem => <OptionItem key = {optionItem} item={optionItem}/>))}
                </p>
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
                Option : {this.props.item}
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
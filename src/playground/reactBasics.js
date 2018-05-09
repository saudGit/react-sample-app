console.log("App.js called");

let templateObj = {
    title : "Indecision App",
    subtitle : "App Challenge",
    list : {
        item1 : "nahari",
        item2 : "kulcha"
    },
};

let userObj = {
    name : "Test User",
    age : 26,
    location : "Noida",
    myattribs : ["att1", "att2"]
};

function getUserLocation()
{
    if(userObj.location)
    {
        return <p> Location : {userObj.location} </p>;
    }
    else
    {
        return undefined;
    }

}

function showUserAge()
{
    if(userObj.age && userObj.age > 18)
    {
        return <label>Age: {userObj.age}</label>;
    }
    else
    {
        return <label>Age: Notdefined</label>;
    }
}

function getUserAttributes()
{
    if(userObj.myattribs && userObj.myattribs.length > 0)
    {
        return "Multiple Options Exists";
    }
    else
    {
        return "No Options Exists";
    }

}

//JSX Sample Code
let template1 = (
    <div>
        <h1>Title : {templateObj.title}</h1>
        <p>Subtitle : {templateObj.subtitle}</p>
        <ol>
            <li>First Item : {templateObj.list.item1}</li>
            <li>Second Item : {templateObj.list.item2}</li>
        </ol>
    </div>
);

let template2 = (
    <div>
        <p>
            Name : {userObj.name ? userObj.name : "Static Name"}
            <br/>
            {showUserAge()}
            <br/>
            {getUserLocation()}
            <br/>
            {getUserAttributes()}
        </p>
    </div>
);




const firstDiv = document.getElementById("div1");
const secondDiv = document.getElementById("div2");


ReactDOM.render(template1, firstDiv);
ReactDOM.render(template2, secondDiv);






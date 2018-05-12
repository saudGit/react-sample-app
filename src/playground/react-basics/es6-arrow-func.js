const num = 15;

function doSquare()
{
    return (num*num);
}

const mult = (a, b) =>
{
    return a*b;
};

const firstName = () =>
{
    return "Name not passed";
}


const userObj = {
    name : "Test User",
    age : 26,
    cities : ["Patna","Lucknow", "Gorakhpur", "Ranchi", "Noida"],
    placesLived()
    {
        return this.cities.map((city) => (this.name + " has lived in "+ city));
        //return cityMessages;
        // for(var i = 0; i< this.cities.length;i++)
        // {
        //     console.log(this.name + " has lived in "+ this.cities[i]);
        // }
    }
};


const multiplier = {
    numberList : [10,20,30,40,50],
    doMultiplication(multiplier)
    {
        return this.numberList.map((num) => (multiplier * num));
    }
};

let temp;
const lastName = (fullName) => fullName.split(" ")[1];

const squareObj = (
    <div>
        <p>
            Number : {num}
            <br/>
            Multiply : {mult(10,5)}
            <br/>
            FirstName : {firstName()}
            <br/>
            LastName : {lastName("Saudul Islam")}
            <br/>
            {console.log(userObj.placesLived())}
            <br/>
            {console.log(multiplier.doMultiplication(10))}
            <br/>
        </p>
    </div>
);

const thirdDiv = document.getElementById("div3");
ReactDOM.render(squareObj,thirdDiv);
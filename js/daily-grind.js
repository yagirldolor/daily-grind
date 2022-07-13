// this is the js file for daily grind
/*


One unique image, with appropriate and matching content in the alt tag.  
A paragraph or two of content that describes the daily item (paragraph must include the name of the highlighted weekday)
A unique color that supports the image and paragraph of content

pic - image src
alt - the alt tag for the image
desc - a description of the coffee
day - the day of the week for the coffee
color - color associated with coffee
name - the name of the coffee



*/

//create functions here to ensure this is read before the code runs

//this is a declaration of a function, it does not run until called upon
function coffeeTemplate(coffee){
    let myReturn = "";

    myReturn += `
        <p>
            <img src="${coffee.pic}" alt="${coffee.alt}" id="coffee" />
            <strong class="feature">${coffee.day}'s Coffee Special:</strong> ${coffee.day}'s daily coffee special is <strong class="feature">${coffee.name}</strong>. ${coffee.desc}
       </p>
    
    `;
    //ejection location (return)
    return myReturn;
        

}



let myDate = new Date();
let myDay = myDate.getDay();
let today = "";
let coffee = "";

//use location object to access querystring (address bar)
const queryString = window.location.search;
    
//output to console    
console.log(queryString);
    
//separate querystring parameters
const urlParams = new URLSearchParams(queryString);

if(urlParams.has("day")){ //data on querystring, load from querystring
    myDay = urlParams.get("day");

}
//converts to interger as it's a string from queryString
myDay = parseInt(myDay);

switch(myDay){
    case 0: 
        today = "Sunday"

        //coffee obj ------------VANILLA LATTE W/ OATMILK
        coffee = {
            color:"#bfbb86", 
            name:"Vanilla Latte with Oat Milk",
            pic:"images/vanillaLatte.jpg",
            alt:"A picture of a vanilla latte",
            day:"Sunday",
            //use backticks `` to include quotes and multiple lines of text
            desc:`This is an oat milk and espresso based drink, with vanilla sweetener. You can order this hot or cold!`
        };

    break;

    case 1:
        today = "Monday";

        //coffee obj ------------AMERICANO
        coffee = {
            color:"Black", 
            name:"Americano",
            pic:"images/americano.jpg",
            alt:"A picture of an Americano Coffee",
            day:"Monday",
            //use backticks `` to include quotes and multiple lines of text
            desc:`This is an espresso and water based coffee, a strong drink to start your Monday on the right foot!`
        };

    break;

    case 2:
        today = "Tuesday"
        //coffee obj ------------CAPPUCCINO
        coffee = {
            color:"#bfbb86", 
            name:"Cappuccino",
            pic:"images/cappuccino.jpg",
            alt:"A picture of a cappuccino",
            day:"Tuesday",
            //use backticks `` to include quotes and multiple lines of text
            desc:`This is an espresso based coffee, prepared with steamed milk foam.`
        };

    break;
    
    case 3:
        today = "Wednesday"

        //coffee obj ------------Bubble Tea
        coffee = {
            color:"Pink", 
            name:"Bubble Tea",
            pic:"images/bubble-tea.jpg",
            alt:"A picture of a bubble tea",
            day:"Wednesday",
            //use backticks `` to include quotes and multiple lines of text
            desc:`This is a  milk and tea based drink, with tapioca balls at the bottom of the cup.`
        };

        

    break;

    case 4:
        today = "Thursday";

        //coffee obj ------------Mocha
        coffee = {
            color:"Brown", 
            name:"Mocha",
            pic:"images/mocha.jpg",
            alt:"A picture of a mocha",
            day:"Thursday",
            //use backticks `` to include quotes and multiple lines of text
            desc:`This is a  coffee and milk based drink, with an extra shot of espresso.`
        };
    break;

    case 5:
        today = "Friday";

        //coffee obj ------------Espresso
        coffee = {
            color:"#263487", 
            name:"Espresso",
            pic:"images/Espresso.jpg",
            alt:"A picture of an espresso",
            day:"Friday",
            //use backticks `` to include quotes and multiple lines of text
            desc:`This is a drink made by forcing boiling water under 9-10 bars of pressure through finely-ground coffee bean, help make the last day of the week move forward with this pump of energy.`
        };

    break;

    case 6:
        today = "Saturday";

        //coffee obj ------------IRISH COFFEE
        coffee = {
            color:"#225930", 
            name:"Irish Coffee",
            pic:"images/irishCoffee.jpg",
            alt:"A picture of an Irish coffee",
            day:"Saturday",
            //use backticks `` to include quotes and multiple lines of text
            desc:`After a long hard week, try out our caffeinated alcoholic drink consisting of Irish whiskey, hot coffee, and sugar. Time to wind down and enjoy the weekend.`
        };

    break;

    default:
        today = "Something went wrong!";
}

// let coffeeData = coffeeTemplate(coffee);

// alert(coffeeData);


//loads coffee data to page
document.getElementById("coffeeCup").innerHTML = coffeeTemplate(coffee);
//console.log(coffee);
document.querySelector("html").style.backgroundColor = coffee.color;
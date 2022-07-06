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
            <strong class="feature">${coffee.day}'s Coffee Special:</strong> ${coffee.day}'s daily coffee special is <strong class="feature">${coffee.name}</strong>, ${coffee.desc}.
       </p>
    
    `;
    //ejection location (return)
    return myReturn;
        

}



let myDate = new Date();
let myDay = myDate.getDay();
let today = "";
let coffee = "";

switch(myDay){
    case 0: 
        today = "Sunday"
    break;

    case 1:
        today = "Monday";
    break;

    case 2:
        today = "Tuesday"
    //if statement for switch
    break;
    
    case 3:
        today = "Wednesday"

        //coffee obj
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
    break;

    case 5:
        today = "Friday";
    break;

    case 6:
        today = "Saturday";
    break;

    default:
        today = "Something went wrong!";
}

let coffeeData = coffeeTemplate(coffee);

alert(coffeeData);

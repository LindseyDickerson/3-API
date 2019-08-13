const baseURL = 'https://api.spacexdata.com/v2/rockets';
const searchForm = document.querySelector('form');
const spaceShips = document.querySelector('table');

searchForm.addEventListener('submit', fetchSpace);
/*function doesn't exist yet. fetchSpace = name of function */
function fetchSpace(event) {
    event.preventDefault(); //prevents page from refreshing after pressing submit on form
    fetch(baseURL) //pulling data from resource, can either be resolved or rejected 
        .then(result => {
         //   console.log(result); doesn't give enough information
         return result.json(); //won't see anything in console.log if it works correctly
        })
        .then(json => {
            //console.log(json); //produces objects in an array in the console log
        displayRockets(json)   //create function to display info on page
        })
}
function displayRockets(data) {
    console.log('Results', data); //creates the array, moved console log from one function to another function

    let rockets = data.forEach(element => {
    //   console.log(element);  
    let rocket = document.createElement('tr');
    let rocketName = document.createElement('td');
    let rocketCost = document.createElement('td');

    rocketName.innerText = element.name;
    rocketCost.innerText = element.cost_per_launch; //see change text for rocketCost
    
    spaceShips.appendChild(rocket); //<==added table to page
    rocket.appendChild(rocketName); //added text to screen
    rocket.appendChild(rocketCost); //added text to screen
    })
}

//change text for rocketCost to match cost per launch of each rocket
// cost_per_launch
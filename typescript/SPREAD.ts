let  displayColors = function(message, ...colors){
    console.log(message);

    for(let i in message){
        console.log(colors[i]);

    }
}
let message = "List of colors"

let colorArray = ['Orange', 'Yellow', 'Indiga'];
displayColors(message, ...colorArray)
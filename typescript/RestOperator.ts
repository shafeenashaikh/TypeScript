 let displayColor = function(message, ...colors){

    console.log(message)
    console.log(colors)

     for(let i in colors){
         console.log(colors[i]);
     }
 } 

 let message = 'List pf color'
 displayColor(message,'Red');
 displayColor(message,'Red','Blue');
 displayColor(message,'Red','Blue','Green');
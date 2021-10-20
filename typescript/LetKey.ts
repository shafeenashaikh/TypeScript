function greetPerson(name: any){
    let greet;
    if(name === 'sam'){
         greet = " Hello sam";
    }else{
         greet = "Hi there"
    }
    console.log(greet);
}
greetPerson('sam');

var a=1;
var b=2;
if(a === 1){
    var a=10;
    let b = 20;
    console.log(a);
    console.log(b);
}
console.log(a);
console.log(b);
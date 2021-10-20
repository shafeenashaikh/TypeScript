function greetPerson(name) {
    let greet;
    if (name === 'sam') {
        let greet = " Hello sam";
    }
    else {
        let greet = "Hi there";
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

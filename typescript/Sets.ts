let mySet = Object.create(null);
mySet.id = 0;
if (mySet.id){
    console.log("id exits");
}

let myMap = Object.create(null);
myMap.name = "sam";
let val = myMap.name;
console.log(val);

myMap[100] = "Hello";
console.log(myMap["100"]);

let ob1 = {};
let ob2 = {};

myMap[ob1] = "World";

console.log(myMap[ob1])
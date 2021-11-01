var mySet = Object.create(null);
mySet.id = 0;
if (mySet.id) {
    console.log("id exits");
}
var myMap = Object.create(null);
myMap.name = "sam";
var val = myMap.name;
console.log(val);
myMap[100] = "Hello";
console.log(myMap["100"]);
var ob1 = {};
var ob2 = {};
myMap[ob1] = "World";
console.log(myMap[ob1]);

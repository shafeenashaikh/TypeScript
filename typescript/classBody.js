var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
        console.log(this.name + "constructor");
    }
    Person.staticMethod = function () {
        console.log("static Method");
    };
    Person.prototype.greetPerson = function () {
        console.log("Hello" + this.name);
    };
    return Person;
}());
var P = new Person("sam");
Person.staticMethod();
P.greetPerson();

class Person{
    constructor(name:any){
        this.name = name;
        console.log(this.name + "constructor"); 
    }

    static staticMethod(){
        console.log("static Method");
    }
    greetPerson(){
        console.log("Hello" +  this.name);

    }
}
let P = new Person("sam");
Person.staticMethod();
P.greetPerson();
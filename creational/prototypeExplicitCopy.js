class Person{
    constructor(name,address){
        this.name=name;
        this.address=address;
    }

    toString(){
        return `${this.name} live at ${this.address}`
    }
    deepCopy(){
        return new Person(this.name,this.address.deepCopy())
    }
}

class Address{
    constructor(streetAddress,city,country){
        this.streetAddress=streetAddress;
        this.city=city;
        this.country=country;
    }

    deepCopy(){
        return new Address(
            this.streetAddress,
            this.city,
            this.country
        );
    }

    toString(){
        return `Address: ${this.streetAddress}` + `${this.city},${this.country}`
    }
}

let john= new Person("John",new Address("123 London Road ","London","Uk"))
let jane=john.deepCopy();

jane.name = "Jane";
jane.address.streetAddress="321 Angel St "

console.log(john.toString());
console.log(jane.toString());

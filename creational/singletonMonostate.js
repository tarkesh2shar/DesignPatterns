class ChiefExecutiveOfficer{
    get name(){
        return ChiefExecutiveOfficer._name
    }
    set name(val){
        ChiefExecutiveOfficer._name=val
    }
    get age(){
        return ChiefExecutiveOfficer._age
    }
    set age(val){
        ChiefExecutiveOfficer._age=val
    }
    toString(){
        return `CEO's name is ${this.name} and he is ${this.age} years old`
    }
}

ChiefExecutiveOfficer._age =undefined;
ChiefExecutiveOfficer._name=undefined;


let CEO = new ChiefExecutiveOfficer();
CEO.name = "Adam Smith";
CEO.age=55;

let ceo2= new ChiefExecutiveOfficer();
ceo2.name= "John Gordon"
ceo2.age= 66


console.log(CEO===ceo2);
console.log(CEO.toString());
console.log(ceo2.toString());
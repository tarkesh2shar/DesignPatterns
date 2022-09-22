//relationships between high level and low level modules //
//High level modules should not depend on low level modules , but depends upon abstractions ok 
let Relationship = Object.freeze({
    parent: 0,
    child:1,
    parent:2
});

class Person{
    constructor(name){
        this.name = name;
    }
}

//Low level module (close to the metal) / storage



//old bad way
// class Relationships {
//     constructor(){
//         this.data = [];   
//     }
//     addParentAndChild(parent,child){
//         this.data.push({
//             from :parent,
//             type: Relationship.parent,
//             to: child
//         })
//     }
// }

class RelationshipBrowser{
    constructor(){
        if(this.constructor.name === "RelationshipBrowser"){
            throw new Error("RelationshipBrowser is abstract")
        }
    }
    findAllChildrenOf(name){
         
    }
}

class Relationships extends RelationshipBrowser{
    constructor(){
        super()
        this.data = [];   
    }
    addParentAndChild(parent,child){
        this.data.push({
            from :parent,
            type: Relationship.parent,
            to: child
        })
    }
    findAllChildrenOf(name){
        return this.data.filter(r=>r.from.name===name && r.type === Relationship.parent).map(r=>
            r.to
            )
    }
}



// High level module 

//Old Bad Approach//

// class Research {
//     constructor(relationships){
//         // console.log("relationships",relationships);
//         //find all children of John
//         let relations=relationships.data; //depending on the low level modules/structure here ok

//         const filteredJohnChildrens=relations.filter(r=>
//             r.from.name === "John" &&  r.type === Relationship.parent
//             );
//             // console.log("filteredJohnChildrens",filteredJohnChildrens);
//         for (const rel of filteredJohnChildrens ) {

//                 console.log(`John has a child name ${rel.to.name}`);
            
//         }
//     }
// }


class Research {
    constructor(browser){
        for (const p of browser.findAllChildrenOf('John') ) {
                console.log(`John has a child name ${p.name}`);
        }
    }
}



let parent = new Person("John");

let child1= new Person("Chris");
let child2= new Person("Matt");

let rels = new Relationships()
rels.addParentAndChild(parent,child1)
rels.addParentAndChild(parent,child2)

new Research(rels)


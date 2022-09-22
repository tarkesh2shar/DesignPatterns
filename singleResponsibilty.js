const fs=require("fs")
class Journal{
    //single responsibility
    constructor(){
        this.enteries={}
    }
    addEntry(text){
        let c = ++Journal.count;
        let entry = `${c}: ${text}`;
        this.enteries[c]=entry;
        return c;
    }
    removeRntry(index){
        delete this.enteries[index];
    }
    toString(){
        return Object.values(this.enteries).join('\n')
    }
    // save(fileName){ 
    //     fs.writeFileSync(fileName,this.toString())
    // }
    // load(fileName){

    // }
    // loadFromUrl(url){

    // }
}
class PersistenceManager{
    preprocess(j){

    }
    saveToFile(journal,fileName){
        fs.writeFileSync(fileName,journal.toString())
    }
    load(fileName){

    }
    loadFromUrl(url){

    }
}

Journal.count=0; 

let j= new Journal();
j.addEntry("I cried Today");
j.addEntry("I ate a bug");

console.log(j.toString())


let p = new PersistenceManager();
let fileName="C:/Users/tarkesh2shar/Documents/designPattern/journal.txt";
p.saveToFile(j,fileName)

//separation of concerns
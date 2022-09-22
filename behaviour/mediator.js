//Mediator imagine like web sockets ok 
//Communication without reference to each other ok 


class Person{
    constructor(name){
        this.name=name;
        this.chatLog=[];
    }
    recieve(sender,message){
        let s = `${sender}: '${message}'`
        this.chatLog.push(s);
        console.log(`[${this.name}'s chat session] ${s}`);
    }
    say(message){
        this.room.broadCast(this.name,message)
    }
    pm(who,message){
        this.room.message(this.name,who,message)
    }


}


class ChatRoom{
    constructor(){
        this.people=[];
    }
    join(p){
        let joinMsg=`${p.name} joins the chat`
        this.broadCast("room",joinMsg)
        p.room=this;
        this.people.push(p)
    }
    broadCast(source,message){
        for (const p of this.people) {
            if(p.name!==source){
                p.recieve(source,message)
            }
        }
    }
    message(source,destination,message){
        for (const p of this.people) {
            if(p.name===destination){
                p.recieve(source,message)
            }
        } 
    }

}


let room= new ChatRoom();
let john = new Person('John');
let jane= new Person('jane');
room.join(john);
room.join(jane);


john.say('hi room');
jane.say("oh hey john");

let simon = new Person("Simon")

room.join(simon);
simon.say('Hi everyone!')


jane.pm("Simon",'glad you can join us ')

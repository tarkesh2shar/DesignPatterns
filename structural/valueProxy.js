class Percentage{
    constructor(percent){
        this.percent=percent;

    }
    toString(){
        return `${this.percent}%`
    }
     
}



let fivePercent= new Percentage(5);

console.log(`5% of 50 is ${50*fivePercent }`);
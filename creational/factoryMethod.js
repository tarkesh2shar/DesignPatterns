class Point{
    constructor(x,y){
        this.x=x;
        this.y=y;
    }
    // constructor(rho,theta){
    //     this.x =rho*Math.cos(theta)
    //     this.y=rho* Math.sign(theta)
    // }
    static newCartesioanPoints(x,y){
        return new Point(x,y) 
    }

    static newPolarPoint(rho,theta){
            return new  Point(
                rho * Math.cos(theta),
                rho* Math.sin(theta)
            )
    }
}

let p = Point.newCartesioanPoints(4,5)
console.log("p",p);

let p2=Point.newPolarPoint(4,5)
console.log("p",p2);
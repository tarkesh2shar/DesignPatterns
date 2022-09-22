const Canvas = require("drawille")
var c = new Canvas(30, 30);

let drawPoint = function(point)
{
    c.set(point.x, point.y)

};


class Point{
    constructor(x,y){
        this.x=x;
        this.y=y;
    }
    toString(){
        return `(${this.x}, ${this.y})`
    }
}

class Line{
    constructor(start,end){
        this.start=start;
        this.end=end;
    }
    toString(){
        return `${this.start.toString()}->${this.end.toString()} `
    }
}

class VectorObject extends Array {}

class VectorRectangle extends VectorObject{
    constructor(x,y,width,height){
        super();
        this.push(new Line(new Point(x,y), new Point(x+width, y) ));
        this.push(new Line(new Point(x+width,y), new Point(x+width, y+height) ));
        this.push(new Line(new Point(x,y), new Point(x, y+height) ));
        this.push(new Line(new Point(x,y+height), new Point(x+width, y+height) ));this.push
    }
}



class LineToPointAdapter extends Array
{
  constructor(line)
  {
    super();

    this.hash=JSON.stringify(line).hashCode()

    if(LineToPointAdapter.cache[this.hash])
        return;

    console.log(`${LineToPointAdapter.count++}: Generating ` +
      `points for line ${line.toString()} (no caching)`);
    let points=[];

    let left = Math.min(line.start.x, line.end.x);
    let right = Math.max(line.start.x, line.end.x);
    let top = Math.min(line.start.y, line.end.y);
    let bottom = Math.max(line.start.y, line.end.y);

    if (right - left === 0)
    {
      for (let y = top; y <= bottom; ++y)
      {
        points.push(new Point(left, y));
      }
    }
    else if (line.end.y - line.start.y === 0)
    {
      for (let x = left; x <= right; ++x)
      {
        points.push(new Point(x, top));
      }
    }

    LineToPointAdapter.cache[this.hash]=points
  }

  get items(){
    return LineToPointAdapter.cache[this.hash]
  }
}
LineToPointAdapter.count=0;
LineToPointAdapter.cache= {}

let vectorObject=[
    new VectorRectangle(1,1,10,10),
    new VectorRectangle(3,3,6,6),
    new VectorRectangle(10,10,10,5)
]


let drawPoints=function(point){
   for (const vo of vectorObject) {
        // console.log("vo",vo);
        for (const line of vo) {
            let adapter = new LineToPointAdapter(line)
            adapter.items.forEach(drawPoint)
        }
   }
   process.stdout.write(c.frame());
}


String.prototype.hashCode = function(){
    if (Array.prototype.reduce){
      return this.split("").reduce(function(a,b){
        a=((a<<5)-a)+b.charCodeAt(0);return a&a},0);
    }
    let hash = 0;
    if (this.length === 0) return hash;
    for (let i = 0; i < this.length; i++) {
      const character = this.charCodeAt(i);
      hash  = ((hash<<5)-hash)+character;
      hash = hash & hash; // Convert to 32-bit integer
    }
    return hash;
  };
  


drawPoints();
drawPoints();
//open for extension and closed for modifications ok ??
let Color=Object.freeze({
    red:"red",
    green:"green",
    blue:"blue"
});
let Size=Object.freeze({
    small:"small",
    medium:"medium",
    large:"large"
});
class Product{
    constructor(name,color,size){
        this.name=name;
        this.color=color;
        this.size=size;
    }
}
class ProductFilter {
    filterByColor(products,color){
        return products.filter(p=>p.color===color);
    }
    filterBySize(products,size){
        return products.filter(p=>p.size===size);
    }
    filterBySizeAndColor(products,size,color){
        return products.filter(p=>p.size===size && p.color===color);
    }
    //state space explosion
}


//specification
class ColorSpecification{
    constructor(color){
        this.color=color;
    }
    isSatisfied(item){
        return item.color===this.color; 
    }
}
class SizeSpecification{
    constructor(size){
        this.size=size;
    }
    isSatisfied(item){
        return item.size===this.size; 
    }
}

class AndSpecification{
    constructor(...specs){
        this.specs=specs;
    }
    isSatisfied(item){
        return this.specs.every(x=>x.isSatisfied(item))
    }
}

class BetterFilter{
    filter(items,spec){
         return items.filter(x=>spec.isSatisfied(x))
    }

}

let apple= new Product("Apple",Color.green,Size.small);
let tree= new Product("Tree",Color.green,Size.large);
let house= new Product("House",Color.blue,Size.large);

let products=[apple,tree,house]


//This is an old approch where we are modifying class all the time ok ???
let pf = new ProductFilter();
console.log(`Green products (old)`);

for (const p of pf.filterByColor(products,Color.green)) {
    console.log(` * ${p.name} is green `);
}

let bf = new BetterFilter();
console.log(`Green products (new):`)
for (let p of bf.filter(products,new SizeSpecification(Size.small))){
    console.log(` * ${p.name} is small`);
}


console.log(`Large and green products`);
let spec = new AndSpecification(new ColorSpecification(Color.green),new SizeSpecification(Size.large) )
for (let p of bf.filter(products,spec)){
    console.log(` * ${p.name} is large and green `);
}
//Algorithm can be decomposed into higher and lower level parts


//<ul><li>Hello</li></ul> --HTML

//*hello    -- MARKDOWN
//* world

let outputFormat= Object.freeze({
    markdown:0,
    html:1
})

class TextProcessor{
    constructor(outputFormat){
        this.buffer=[]
        this.setOutputFormat(outputFormat);
    }

    setOutputFormat(format){
      switch(format){
        case outputFormat.markdown:
            this.listStrategy= new MarkdownListStrategy();
            break;
        case outputFormat.html:
            this.listStrategy=new HtmlListStrategy();
            break;
      }  
    }

    appendList(items){
        this.listStrategy.start(this.buffer);

        for (const item of items) {
            this.listStrategy.addListItem(this.buffer,item);
            
        }
        this.listStrategy.end(this.buffer)
    }

    clear(){
        this.buffer=[];
    }
    toString(){
         return this.buffer.join("\n")
    }
}

class ListStrategy{
    start(buffer){}
    end(buffer){}
    addListItem(buffer,item){}
}

class MarkdownListStrategy extends ListStrategy{
    addListItem(buffer,item){
        buffer.push(` * ${item}`);
    }
}

class HtmlListStrategy extends ListStrategy{
    start(buffer){
        buffer.push('<ul>')
    }
    end(buffer){
        buffer.push("</ul>")
    }
    addListItem(buffer,item){
        buffer.push(` <li>${item}</li>`);
    }
}


let tp= new TextProcessor(outputFormat.markdown);
tp.appendList(["foo","bar","baz"])
console.log(tp.toString());

tp.clear();
tp.setOutputFormat(outputFormat.html)
tp.appendList(["alpha","beta","gamma"])
console.log(tp.toString());


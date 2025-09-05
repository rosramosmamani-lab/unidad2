

class Person{
    #cellphone;
    constructor(firsname, lasname,age,height,weight,cat, cellphone){
    this.firsname= firsname;
    this.lasname= lasname;
    this.age= age;
    this.height= height;
    this.weight= weight;
    this.cat= cat;
    this.#cellphone = cellphone;
    }

    sayHello(){
        console.log("hola jsjsj saludos del mas haya");
    }
    introduce() {
        return`hola, me llamo ${this.firsname}${this.lasname} y tengo ${this.age}años`;
    }

    getCellphone(){
        return this.#cellphone;
    }
}  




let person1 = new Person("Dominic","Fernandez", 18,1.8,70, "905960687");
console.log(person1);

console.log(person1.lasname);
console.log(person1.weight);
console.log(person1.firsname);
console.log(person1.age);
console.log(person1.height);
console.log(person1.cat);
console.log("METODOS");
person1.sayHello();

class chef extends Person{
    constructor(firsname, lasname,age,height,weight,cat, cellphone ,restaurant,favoritefood){
        super(firsname, lasname,age,height,weight,cat, cellphone)
        this.restaurant= restaurant;
        this.favoritefood=favoritefood;
    }


}

let chef1 = new chef("Dominic","Fernandez", 18,1.8,70, "905960687" "roposipitapa"

)


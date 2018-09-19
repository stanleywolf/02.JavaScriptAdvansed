class Person {
    constructor(name, email) {
        this.name = name;
        this.email = email
    }
    toString(){
        let className = this.constructor.name
        return `${className} (name: ${this.name}, email: ${this.email})`
    }
}

function extendClass(classToExtend) {
    classToExtend.prototype.species = 'Human';
    classToExtend.prototype.toSpeciesString = function () {
        return `I am a ${this.species}. ` + this.toString();
    }
}
let p = new Person('Stancho','@gmail');
extendClass(Person);
console.log(p.toString());
console.log(p.toSpeciesString());


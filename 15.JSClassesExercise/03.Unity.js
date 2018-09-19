class Rat{
    constructor(name){
        this.name = name;
        this.unitedRats = [];
    }
    getRats(){
        return this.unitedRats
    }
    unite (object){
        if(object instanceof Rat){
            this.unitedRats.push(object);
        }
    }
    toString(){
        let string = `${this.name}\n`;
        for (let rat of this.unitedRats) {
            string += `##${rat.name}\n`
        }
        return string;
    }
}
let test = new Rat('Stancho');
console.log(test.toString());
console.log(test.getRats());

test.unite(new Rat('Nikola'));
test.unite(new Rat('Yoan'));

console.log(test.getRats());
console.log(test.toString());

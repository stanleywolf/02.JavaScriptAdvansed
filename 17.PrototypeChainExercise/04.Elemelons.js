function elemelons() {
    class Melon{
        constructor(weight,melonSort){
            if(new.target === Melon){
                throw new Error("Abstract class cannot be instantiated directly")
            }
            this.weight = weight;
            this.melonSort = melonSort;
        }
        getElement(){
            let className = this.constructor.name
            let index = className.indexOf('melon');
            return className.substring(0,index);
        }
    }
    class Watermelon extends Melon{
        constructor(weight,melonSort){
            super(weight,melonSort);
        }
        get elementIndex(){
            return this.weight * this.melonSort.length
        }
        toString(){
            return `Element: ${super.getElement()}\n`+
                `Sort: ${this.melonSort}\n`+
                `Element Index: ${this.elementIndex}`
        }
    }
    class Firemelon extends Melon{
        constructor(weight,melonSort){
            super(weight,melonSort)
        }
        get elementIndex(){
            return this.weight * this.melonSort.length
        }
        toString(){
            return `Element: ${super.getElement()}\n`+
                `Sort: ${this.melonSort}\n`+
                `Element Index: ${this.elementIndex}`
        }
    }
    class Earthmelon extends Melon{
        constructor(weight,melonSort){
            super(weight,melonSort)
        }
        get elementIndex(){
            return this.weight * this.melonSort.length
        }
        toString(){
            return `Element: ${super.getElement()}\n`+
                `Sort: ${this.melonSort}\n`+
                `Element Index: ${this.elementIndex}`
        }
    }
    class Airmelon extends Melon{
        constructor(weight,melonSort){
            super(weight,melonSort)

        }
        get elementIndex(){
            return this.weight * this.melonSort.length
        }
        toString(){
            return `Element: ${super.getElement()}\n`+
                `Sort: ${this.melonSort}\n`+
                `Element Index: ${this.elementIndex}`
        }
    }
    class Melolemonmelon extends Airmelon{
        constructor(weight,melonSort) {
            super(weight, melonSort)
            this.element = ['Fire', 'Earth', 'Air', 'Water'];
        }
        morph(){
            let currentElement = this.element.shift();
            return currentElement;
            this.element.push(currentElement);
        }
        toString(){
            return `Element: ${this.morph()}\n`+
                `Sort: ${this.melonSort}\n`+
                `Element Index: ${super.elementIndex}`
        }
    }
    return{Melon,Watermelon,Firemelon,Earthmelon,Airmelon,Melolemonmelon}
}
let result = elemelons()
let Melon = result.Melon
let Watermelon = result.Watermelon
let Firemelon = result.Firemelon
let Earthmelon = result.Earthmelon
let Airmelon = result.Airmelon
let Melolemonmelon = result.Melolemonmelon;

let wm = new Watermelon(12.5,'kingSize');
console.log(wm.toString());

let em = new Earthmelon(50,'kingSizeMF');
console.log(em.toString());

let mm = new Melolemonmelon(50,'a');
console.log(mm.toString());
mm.morph();
console.log(mm.toString());



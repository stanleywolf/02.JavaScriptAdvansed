function solve() {

    class Figure{
        constructor(){
            if(new.target === Figure){
                throw new TypeError("Figuse cannit instantiated")
            }
        }
        toString(){
            return `${this.constructor.name}`
        }

    }
    class Circle extends Figure{
        constructor(radius){
            super()
            this.radius = radius;
        }
        toString(){
            return super.toString() + ` - radius: ${this.radius}`

        }
        get  area(){
            return Math.PI * this.radius * this.radius
        }
    }
    class Rectangle extends Figure{
        constructor(width,height){
            super()
            this.height = height;
            this.width = width;
        }
        toString(){
            return super.toString() + ` - width: ${this.width}, height: ${this.height}`
        }
        get area(){
            return this.height * this.width
        }
    }
    return{Figure,Rectangle,Circle}
}

let result = solve()
let Figure = result.Figure;
let Rectangle = result.Rectangle;
let Circle = result.Circle;

let r = new Rectangle(2,4);
let c = new Circle(5);
console.log(c.area);
console.log(c.toString());
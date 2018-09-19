class Rectangle{
    constructor(width,height,color){
        this.width = width
        this.height = height
        this.color = color
    }
    calcArea() {
        return this.width * this.height;
    }
}

let redRect = new Rectangle(4,5,'red')
console.log(redRect.width);
console.log(redRect.height);
console.log(redRect.color);
console.log(redRect.calcArea());
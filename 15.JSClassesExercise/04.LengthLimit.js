class Stringer{
    constructor(string,length){
        this.innerString = string
        this.innerLength = length
    }
    increase(length){
        this.innerLength += length

    }
    decrease(length){
        this.innerLength -= length
        if(this.innerLength < 0){
            this.innerLength = 0;
        }
    }
    toString(){
        if(this.innerLength === 0){
            return '.'.repeat(3);
        }
        if(this.innerLength < this.innerString.length){
            return `${this.innerString.substring(0,this.innerLength)}...`;
        }
        return this.innerString
    }
}

let test = new Stringer('Test',5);
console.log(test.toString());
test.decrease(3);
console.log(test.toString());
test.decrease(5);
console.log(test.toString());
test.increase(4);
console.log(test.toString());
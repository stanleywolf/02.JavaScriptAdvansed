(function sortList() {
    Array.prototype.order = function(){
        return this.sort((a,b) => b - a);
    }
    Array.prototype.add = function (element) {
        this.order();
        return this.push(element);
    }
    Array.prototype.remove = function(index){
        this.order();
        return this.splice(index,1);
    }
    Array.prototype.get = function(index){
        this.order();
        return this[index];
    }
    Array.prototype.size = function(){
        return this.length;
    }
})();

let list = [5,7,3,7,5,1,9];
console.log(list.order())
console.log(list.add(10))
console.log(list)
console.log(list.remove(2))
console.log(list.remove(4))
console.log(list)
console.log(list.get(0))
console.log(list.size())

function rectangle(arr) {
    
    for (let i = 0; i < arr.length; i++) {
        arr[i] = {
            width: arr[i][0],
            height: arr[i][1],
            area: function () {
                return this.width * this.height;
            },
            compareTo(otherRectangle){
                let areaDiff = otherRectangle.area() - this.area();
                if(areaDiff === 0){
                    return otherRectangle.width - this.width;
                }
                return areaDiff;
            } 
        }
    }
    return arr.sort((a,b) => a.compareTo(b));
}

console.log(rectangle([[10,5],[5,12]]));
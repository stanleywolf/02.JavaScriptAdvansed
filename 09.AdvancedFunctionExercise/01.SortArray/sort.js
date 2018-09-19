function solve(inputArry,sortMethod) {
    
    var ascComparator = function (a,b) {
        return a - b;
    }
    var descComparator = function (a,b) {
        return b - a;
    }
    var sortStrategy = {
        'asc': ascComparator,
        'desc': descComparator
    };

    return inputArry.sort(sortStrategy[sortMethod]);
}

console.log(solve([14, 7, 17, 6, 8], 'asc'));

console.log(solve([14, 7, 17, 6, 8], 'desc'));
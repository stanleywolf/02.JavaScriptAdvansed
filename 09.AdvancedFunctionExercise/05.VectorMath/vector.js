let solution = (function(){

    return {
        add: add,
        multiply: multiply,
        length: length,
        dot: dot,
        cross: cross
    }
    function add(vector1,vector2) {
        return [vector1[0] + vector2[0],vector1[1] + vector2[1]];
    }
    function multiply(vector,scalar) {
        return [vector[0] * scalar,vector[1] * scalar];
    }
    function length(vector) {
        return Math.sqrt(Math.pow(vector[0],2) + Math.pow(vector[1],2));
    }
    function dot(vector1,vector2) {
        return (vector1[0] * vector2[0]) + (vector1[1] * vector2[1]);
    }
    function cross(vector1,vector2) {
        return (vector1[0] * vector2[1]) - (vector1[1] * vector2[0]);
    }
})();

console.log(solution.add([1, 1], [1, 0]));
console.log(solution.multiply([3.5, -2], 2));
console.log(solution.length([3, -4]));
console.log(solution.dot([1, 0], [0, -1]));
console.log(solution.cross([3, 7], [1, 0]));

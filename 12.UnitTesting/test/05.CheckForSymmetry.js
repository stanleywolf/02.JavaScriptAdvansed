function isSymmetric(arr) {
    if (!Array.isArray(arr))
        return false; // Non-arrays are non-symmetric
    let reversed = arr.slice(0).reverse(); // Clone and reverse
    let equal = (JSON.stringify(arr) == JSON.stringify(reversed));
    return equal;
}
const expect = require("chai").expect;

describe("Is Symetric", function () {
    describe("True", function () {
        it('should return true for num', function () {
            //Arrange
            let array = [1,2,3,2,1];
            //Act
            let result = isSymmetric(array);
            //Assert
            expect(result).to.be.equal(true);
        });
        it('should return true for oneArray', function () {
            //Arrange
            let array = [1];
            //Act
            let result = isSymmetric(array);
            //Assert
            expect(result).to.be.equal(true);
        });
        it('should return true for object', function () {
            //Arrange
            let array = [1,{},3,{},1];
            //Act
            let result = isSymmetric(array);
            //Assert
            expect(result).to.be.equal(true);
        });
        it('should return true for minus', function () {
            //Arrange
            let array = [1,-2,3,-2,1];
            //Act
            let result = isSymmetric(array);
            //Assert
            expect(result).to.be.equal(true);
        });
    });
    describe("False",function () {
        it('should return false for num', function () {
            //Assert
            let array = [1,2,3,1,1]
            //Act
            let result = isSymmetric(array);
            //Assert
            expect(result).to.be.equal(false);
        });
        it('should return false for twoElem', function () {
            //Assert
            let array = [1,2]
            //Act
            let result = isSymmetric(array);
            //Assert
            expect(result).to.be.equal(false);
        });
        it('should return false for object', function () {
            //Assert
            let array = [1,2,{},{},'v']
            //Act
            let result = isSymmetric(array);
            //Assert
            expect(result).to.be.equal(false);
        });
        it('should return false for minus', function () {
            //Assert
            let array = [-1,2,-3,1,1]
            //Act
            let result = isSymmetric(array);
            //Assert
            expect(result).to.be.equal(false);
        });
        it('should return false for string', function () {
            //Assert
            let array = 'hahaha'
            //Act
            let result = isSymmetric(array);
            //Assert
            expect(result).to.be.equal(false);
        });
    })

});
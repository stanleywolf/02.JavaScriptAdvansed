function isOddOrEven(string) {
    if (typeof(string) !== 'string') {
        return undefined;
    }
    if (string.length % 2 === 0) {
        return "even";
    }

    return "odd";
}

const expect = require("chai").expect;

describe("Test func odd or even",function () {
    describe("Test for even",function () {
        it('should return even', function () {
            //arrange
            let string = 'stan4o';
            //Act
            let result = isOddOrEven(string)
            //Assert
            expect(result).to.be.equal('even')
        });
        it('should return even', function () {
            //arrange
            let string = '';
            //Act
            let result = isOddOrEven(string)
            //Assert
            expect(result).to.be.equal('even')
        });
        it('should return even', function () {
            //arrange
            let string = '';
            //Act
            let result = isOddOrEven(string)
            //Assert
            expect(result).to.be.equal('even')
        });

    });
    describe('Test for odd',function () {
        it('should return odd', function () {
            //arrange
            let string = '1';
            //Act
            let result = isOddOrEven(string)
            //Assert
            expect(result).to.be.equal('odd')
        });
        it('should return odd', function () {
            //arrange
            let string = '1fghuiopk';
            //Act
            let result = isOddOrEven(string)
            //Assert
            expect(result).to.be.equal('odd')
        });
    });
    describe("Test for !string",function () {
        it('should return undefined', function () {
            //arrange
            let string = 123;
            //Act
            let result = isOddOrEven(string)
            //Assert
            expect(result).to.equal(undefined,"Unvalid string")
        });
    });
});


let mathEnforcer = {
    addFive: function (num) {
        if (typeof(num) !== 'number') {
            return undefined;
        }
        return num + 5;
    },
    subtractTen: function (num) {
        if (typeof(num) !== 'number') {
            return undefined;
        }
        return num - 10;
    },
    sum: function (num1, num2) {
        if (typeof(num1) !== 'number' || typeof(num2) !== 'number') {
            return undefined;
        }
        return num1 + num2;
    }
};
const expect = require('Chai').expect;

describe("Test mathEnforcer",function () {
    it('should multiply result', function () {
        //Arrange
        let num = 1;
        //Act and Assert
        expect(mathEnforcer.addFive(num)).to.be.equal(6)
    });
    it('should multiply result', function () {
        //Arrange
        let num = -1;
        //Act and Assert
        expect(mathEnforcer.addFive(num)).to.be.equal(4)
    });
    it('should multiply result', function () {
        //Arrange
        let num = 1.59;
        //Act and Assert
        expect(mathEnforcer.addFive(num)).to.be.closeTo(6.59,0.01)
    });
    it('should multiply result', function () {
        //Arrange
        let num = [];
        //Act and Assert
        expect(mathEnforcer.addFive(num)).to.equal(undefined)
    });
    it('should multiply result', function () {
        //Arrange
        let num = 1.5;
        //Act and Assert
        expect(mathEnforcer.subtractTen(num)).to.be.equal(-8.5)
    });
    it('should multiply result', function () {
        //Arrange
        let num = 1;
        //Act and Assert
        expect(mathEnforcer.subtractTen(num)).to.be.equal(-9)
    });
    it('should multiply result', function () {
        //Arrange
        let num = 0;
        //Act and Assert
        expect(mathEnforcer.subtractTen(num)).to.be.equal(-10)
    });
    it('should multiply result', function () {
        //Arrange
        let num = {};
        //Act and Assert
        expect(mathEnforcer.subtractTen(num)).to.equal(undefined)
    });
    it('should multiply result', function () {
        //Arrange
        let num = {};
        //Act and Assert
        expect(mathEnforcer.addFive(num)).to.equal(undefined)
    });
    it('should multiply result', function () {
        //Arrange
        let num = 1;
        let num2 = 1
        //Act and Assert
        expect(mathEnforcer.sum(num,num2)).to.be.equal(2)
    });
    it('should multiply result', function () {
        //Arrange
        let num = -1;
        let num2 = -1
        //Act and Assert
        expect(mathEnforcer.sum(num,num2)).to.be.equal(-2)
    });
    it('should multiply result', function () {
        //Arrange
        let num = 1.3;
        let num2 = 1.7
        //Act and Assert
        expect(mathEnforcer.sum(num,num2)).to.be.closeTo(3,0.1)
    });
    it('should multiply result', function () {
        //Arrange
        let num = 0;
        let num2 = 1.7
        //Act and Assert
        expect(mathEnforcer.sum(num,num2)).to.be.equal(1.7)
    });
    it('should multiply result', function () {
        //Arrange
        let num = {};
        let num2 = '1.7'
        //Act and Assert
        expect(mathEnforcer.sum(num,num2)).to.equal(undefined)
    });
    it('should multiply result', function () {
        //Arrange
        let num = 9;
        let num2 = '1.7'
        //Act and Assert
        expect(mathEnforcer.sum(num,num2)).to.equal(undefined)
    });
    it('should multiply result', function () {
        //Arrange
        let num = 'ddd';
        let num2 = 15
        //Act and Assert
        expect(mathEnforcer.sum(num,num2)).to.equal(undefined)
    });
})
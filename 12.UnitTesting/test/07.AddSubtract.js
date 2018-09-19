function createCalculator() {
    let value = 0;
    return {
        add: function(num) { value += Number(num); },
        subtract: function(num) { value -= Number(num); },
        get: function() { return value; }
    }
}
const expect = require("chai").expect;

describe("CreateCalc tests",function () {

    let calc;
    beforeEach(function () {
        //Arrange
        calc = createCalculator();

    });
    describe("Test add",function () {
        it('should return 0 in init', function () {
            //Act
            let result = calc.get();
            //Assert
            expect(result).to.be.equal(0);
        });
        it('should return 5 after add 5', function () {
            //Act
            calc.add(5);
            let result = calc.get();
            //Assert
            expect(result).to.be.equal(5);
        });
        it('should return 8 after add 5 and add 3', function () {
            //Act
            calc.add(5);
            calc.add(3);
            let result = calc.get();
            //Assert
            expect(result).to.be.equal(8);
        });
        it('should return 8.1 after add 5.1 and add 3', function () {
            //Act
            calc.add(5.1);
            calc.add(3);
            let result = calc.get();
            //Assert
            expect(result).to.be.equal(8.1);
        });
        it('should return Nan from string', function () {
            //Act
            calc.add('hahah');
            let result = calc.get();
            //Assert
            expect(result).to.be.NaN;
        });
        it('should return -8.1 after add -5.1 and add -3', function () {
            //Act
            calc.add(-5.1);
            calc.add(-3);
            let result = calc.get();
            //Assert
            expect(result).to.be.equal(-8.1);
        });
        it('should return 5 as 5 to string', function () {
            //Act
            calc.add('5');
            let result = calc.get();
            //Assert
            expect(result).to.be.equal(5);
        });
    })
    describe("Test subtract",function () {
        it('should return 5 after sub 5', function () {
            //Act
            calc.subtract(5);
            let result = calc.get();
            //Assert
            expect(result).to.be.equal(-5);
        });
        it('should return -8 after add -5 and add -3', function () {
            //Act
            calc.subtract(-5);
            calc.subtract(-3);
            let result = calc.get();
            //Assert
            expect(result).to.be.equal(8);
        });
        it('should return 8.1 after add 5.1 and add 3', function () {
            //Act
            calc.subtract(5.1);
            calc.subtract(3);
            let result = calc.get();
            //Assert
            expect(result).to.be.equal(-8.1);
        });
        it('should return Nan from string', function () {
            //Act
            calc.add('hahah');
            let result = calc.get();
            //Assert
            expect(result).to.be.NaN;
        });
        it('should return -8.1 after add -5.1 and add -3', function () {
            //Act
            calc.subtract(-5.1);
            calc.subtract(-3);
            let result = calc.get();
            //Assert
            expect(result).to.be.equal(8.1);
        });
        it('should return 5 as 5 to string', function () {
            //Act
            calc.subtract('5');
            let result = calc.get();
            //Assert
            expect(result).to.be.equal(-5);
        });
    })
    describe('Combun Add and Subtract',function () {
        it('should return 0 from 5 - 5', function () {
            //Act
            calc.add(5);
            calc.subtract(5)
            let result = calc.get();
            //Arrange
            expect(result).to.be.equal(0)
        });
    })
});
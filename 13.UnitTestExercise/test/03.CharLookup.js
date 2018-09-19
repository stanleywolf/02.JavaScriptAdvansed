function lookupChar(string, index) {
    if (typeof(string) !== 'string' || !Number.isInteger(index)) {
        return undefined;
    }
    if (string.length <= index || index < 0) {
        return "Incorrect index";
    }

    return string.charAt(index);
}

const expect = require('chai').expect;

describe("Test lookupChar",function () {
    it('should return Multiply Check', function () {
        //Arrange
        let string = 'Pesho';
        let index = 1;
        //Act
        let result = lookupChar(string,index)
        //Assert
        expect(result).to.be.equal('e')
    });
    it('should return Multiply Check', function () {
        //Arrange
        let string = 'Pesho';
        let index = -1;
        //Act
        let result = lookupChar(string,index)
        //Assert
        expect(result).to.equal("Incorrect index")
    });
    it('should return Multiply Check', function () {
        //Arrange
        let string = 'r';
        let index = 0;
        //Act
        let result = lookupChar(string,index)
        //Assert
        expect(result).to.be.equal('r')
    });
    it('should return Multiply Check', function () {
        //Arrange
        let string = 123;
        let index = 0;
        //Act
        let result = lookupChar(string,index)
        //Assert
        expect(result).to.equal(undefined)
    });
    it('should return Multiply Check', function () {
        //Arrange
        let string = 'fff';
        let index = 'g';
        //Act
        let result = lookupChar(string,index)
        //Assert
        expect(result).to.equal(undefined)
    });
    it('should return Multiply Check', function () {
        //Arrange
        let string = 'fff';
        let index = '2';
        //Act
        let result = lookupChar(string,index)
        //Assert
        expect(result).to.equal(undefined)
    });
    it('should return Multiply Check', function () {
        //Arrange
        let string = 'fff';
        let index = 5;
        //Act
        let result = lookupChar(string,index)
        //Assert
        expect(result).to.be.equal("Incorrect index")
    });
    it('should return Multiply Check', function () {
        //Arrange
        let string = 'fff';
        let index = 5.66;
        //Act
        let result = lookupChar(string,index)
        //Assert
        expect(result).to.equal(undefined)
    });
})
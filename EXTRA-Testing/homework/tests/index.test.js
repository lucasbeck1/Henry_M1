// Testing imports

// ESTO NO FUNCIONA SI TENEMOS MAS DE 1 TEST
// Ejemplo:

// const sum = require('../homework');
// const checkSeatStatus = require('../homework');


const {
    sum,
    checkSeatStatus,
    getRowNumber,
    book,
} = require('../homework');


// it === test

describe ('Decimal numbers', () => {
    it ('should return 8 if adding 3 and 5', () => {
        expect(sum(3,5)).toBe(8);
    });
    test ('should return 15 if adding 7 and 8', () => {
        expect(sum(7,8)).toBe(15)
    });
});

describe('Decimal numbers', () => {
    it ('should return 12,5 if adding 5,3 and 7,2', () => {
        expect(sum((5.3),(7.2))).toBe(12.5);
    });
    it ('should return 12,5 if adding 5,3 and 7,2', () => {
        expect(sum((1.55),(4.22))).toBe(5.77);
    }); 
});

// expect () lleva un arrow function dentro porque utilizamos el matcher toThrow, la funcion debe ser invocada con una arrow function
// expect(() => sum(3,true)).toThrow(new TypeError('...'))
describe ('Invalid Imputs', () => {
    it ('should throw an TypeError if first parameter is not a number', () => {
        expect(() => sum('Franco',5)).toThrow(new TypeError());
    });
    it ('should throw an TypeError if second parameter is not a number', () => {
        expect(() => sum(3,true)).toThrow(new TypeError());
    });
});

describe ('Exercise Two', () => {
    it ('should return Type error if parameter1 is not a String', () => {
        expect(() => checkSeatStatus(10,'hola')).toThrow(new TypeError('First parameter is not a string.'))
    });
});

describe ('Exercise Three', () => {
    it ('should return Type error if parameter2 is not a String', () => {
        expect(() => checkSeatStatus('chau',true)).toThrow(new TypeError('Second parameter is not a number.'))
    });
});

describe ('Exercise Four', () => {
    it ('function getRowNumber should return the correct number from a string parameter', () => {
        expect(getRowNumber('a')).toBe(0);
        expect(getRowNumber('A')).toBe(0);
        expect(getRowNumber('b')).toBe(1);
        expect(getRowNumber('c')).toBe(2);
    });
});

describe('Exercise Five', () => {
    it('should return true if the seat is not free',() => {
        expect(checkSeatStatus('a',1)).toBe(true);
    });
    it('should return false if the seat free',() => {
        expect(checkSeatStatus('d',3)).toBe(false);
    });
});

describe('Exercise Six', () => {
    it('should booked the seat and return Seat in X.X is successfully booked',() => {
        expect(book('d',3)).toBe('Seat in 3.3 successfully booked');
        expect(checkSeatStatus('d',3)).toBe(true);
    });
    it('should return seat in XX is already booked',() => {
        expect(book('a',1)).toBe('Seat in 0.1 is already booked');
    });
});
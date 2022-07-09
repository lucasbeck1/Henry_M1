
// CODE TEST ONE
function sum(a, b) {
    if ((typeof (a)) !== 'number' || (typeof (b)) !== 'number') {throw (new TypeError())};
    return a + b;
};


// CODE TEST TWO - THREE - FIVE
function checkSeatStatus (parameter1, parameter2) {
    // Exercise Two
    if ((typeof (parameter1)) !== 'string')
    {throw (new TypeError('First parameter is not a string.'))};

    // Exercise Three
    if ((typeof (parameter2)) !== 'number')
    {throw (new TypeError('Second parameter is not a number.'))};

    // Exercise Five
    let num1 = getRowNumber(parameter1);
    let num2 = parameter2;

    let seatOcupattion = layout[num1][num2].booked;

    return (seatOcupattion);
};



// CODE TEST FOUR

const layout = [
    [{type: 'VIP', booked: false}, {type: 'VIP', booked: true}, {type: 'VIP', booked: true}, {type: 'VIP', booked: false}],
    [{type: 'NORMAL', booked: false}, {type: 'VIP', booked: true}, {type: 'VIP', booked: false}, {type: 'NORMAL', booked: false}],
    [{type: 'NORMAL', booked: false}, {type: 'NORMAL', booked: true}, {type: 'NORMAL', booked: true}, {type: 'NORMAL', booked: false}],
    [{type: 'ECONOMIC', booked: true}, {type: 'NORMAL', booked: true}, {type: 'NORMAL', booked: true}, {type: 'ECONOMIC', booked: false}],
    [{type: 'ECONOMIC', booked: false}, {type: 'ECONOMIC', booked: true}, {type: 'ECONOMIC', booked: false}, {type: 'ECONOMIC', booked: false}]
];


function getRowNumber(letter) {
let number = ((letter.toUpperCase().charCodeAt()) - 65);
return (number);
};


function book (letter, number) {
    let row = getRowNumber(letter);
    let column = number;
    let seatOcupattion = layout[row][column].booked;

    if (seatOcupattion === false) {
        layout[row][column].booked = true;
        return (`Seat in ${row}.${number} successfully booked`)
    } else {
        return (`Seat in ${row}.${column} is already booked`)
    };
};




// Testing exports

// ESTO NO FUNCIONA SI TENEMOS MAS DE 1 TEST
// Ejemplo:
// module.exports = sum;
//module.exports = checkSeatStatus;

module.exports = {
    sum,
    checkSeatStatus,
    getRowNumber,
    book,
}
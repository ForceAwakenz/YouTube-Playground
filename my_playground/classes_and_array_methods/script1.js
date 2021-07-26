'use strict'
// задача: взять число, и составить из него число, которое конкатенирует квадрат каждой нечетной цифры, а четную делит на два.
// Пример:
// 345 => 9225

class Encrypt {
    constructor(numString) {
        this._numString = String(numString);
    }

    set numString(input) {
        isNaN(input) ? false : this._numString = String(input);
    }

    get sqrEvenNum() {
        const _sqrEvenNum = this._numString
            .split('')
            .map(num => (num % 2 !== 0) ? num ** 2 : num / 2 ).join('');
        return _sqrEvenNum;
    }

    get sqrEvenNum2() {
        const _sqrEvenNum2 = this._numString
            .split('')
            .reduce((overall, num) => overall += (num % 2 !== 0) ? num ** 2 : num / 2, '');
        // if we put boolean or number instead of '',
        // it will add it one by one: 
        // ('' + 1 + 9 = 19; true + 1 + 9 = 11; 0 + 1 + 9 = 10)
        return _sqrEvenNum2;
    }


}

const num = new Encrypt(345);

console.log(num.sqrEvenNum);

num.numString = 135111197;
console.log(num.sqrEvenNum);
console.log(num.sqrEvenNum2);

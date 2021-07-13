'use strict'

function narcissistic(value) {

    
    const levelNum = String(value).split('').length;

    if (levelNum == 1) { return true; }

    const index = levelNum - 1;

    
    function letsSumUp(index) {
        
        if (index == 0) {
            return String(value).split('')[0] ** levelNum;
        }

        return String(value).split('')[index] ** levelNum + letsSumUp(index - 1);

    }

    return letsSumUp(index) == value;


}



console.log(narcissistic(125));
console.log(narcissistic(1634));
console.log(narcissistic(1635));
console.log(narcissistic(548834));
console.log(narcissistic(100000));
console.log(narcissistic(1741725));

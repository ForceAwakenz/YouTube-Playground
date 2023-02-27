'use strict';

function deepClone(obj) {
    const copyObj = {};

    for (let key in obj) {
        if (typeof obj[key] === 'object') {
            //here can be logic that prevents from infinite cycle
            copyObj[key] = deepClone(obj[key]);
        } else {
            copyObj[key] = obj[key];
        }
    }
    return copyObj;
}


const mainObj = {
    hi: 'hi',
    there: {
        is: 'is',
        are: 'are'
    },
}

let copyObj = deepClone(mainObj);
copyObj.there.is = 'was';
copyObj.there.are = 'were';

console.log(mainObj);
console.log(copyObj);

const b = structuredClone(mainObj);

b.hi = 'Bienvenidos!';
b.there.is = 'estoy';

console.log(b);

console.log('let\'s check initial object', mainObj);
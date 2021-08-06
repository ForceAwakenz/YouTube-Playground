'use strict'

const oldArr = [
    { a: 1, b: 2 },
    { a: 2, b: 3 },
    { a: 3, b: 4 },
];

const newArr = [
    { a: 1, b: 2 },
    { a: 2, b: 3 },
    { a: 3, b: 4 },
    { a: 4, b: 5 },
    { a: 5, b: 6 },
];

let old = [1, 2, 3];
const newer = [1, 2, 3, 4, 5];

const arr5 = {
    valueOf: function() {
        return 5;
    }
}

console.log(5 + arr5);

// console.log(news);
// console.log(newsObj);


console.log(old);


const newTodos = [{
    title: 'Buy Bread',
    isDone: false,
},
    {
    title: 'Buy Pitt',
    isDone: true,
},
    {
    title: 'Buy Jolly',
    isDone: false,
    }]

const index = newTodos.findIndex(function (todo) {
    return todo.title === 'Buy Pitt';
})
    
console.log(index);

const btn = document.getElementById('button');
const divv = document.getElementById('yo');
btn.addEventListener('click', () => {
    yo.innerHTML += '<p>hi there!</p>';
})



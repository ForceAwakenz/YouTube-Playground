'use strict';

const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const main = document.querySelector('main');

let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

renderItems();

addBtn.addEventListener('click', (e) => addItemToArr(e));

function addItemToArr() {
    tasks.push(taskInput.value);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    taskInput.value = '';
    renderItems();
}

function renderItems() {

    main.innerHTML = '';
    tasks.forEach(task => {
        const taskItem = document.createElement('div');
        const closeBtn = document.createElement('button');
        closeBtn.classList.add('close');
        closeBtn.textContent  = 'close';
        const taskText = document.createTextNode(task);
        taskItem.append(taskText);
        taskItem.append(closeBtn);
        main.append(taskItem);

    });

    const [...buttons] = document.getElementsByClassName('close');
    buttons.forEach((btn, indx) => btn.addEventListener('click', 
        e =>  {
            e.target.parentNode.remove();
            tasks.splice(indx, 1);
            localStorage.setItem('tasks', JSON.stringify(tasks));
        })
    );

}
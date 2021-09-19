'use strict';

const input = document.getElementById('taskInput');
document.getElementById('addBtn').addEventListener('click', () => createTask(input.value));

function createTask(taskName) {
    const newTask = document.createElement('div');
    const closeBtn = document.createElement('button');
    const taskText = document.createTextNode(taskName);

    closeBtn.innerText = 'close';
    closeBtn.classList.add('closeBtn');
    
    newTask.append(taskText);
    newTask.append(closeBtn);
    
    document.querySelector('main').append(newTask);
    
    const closeBtnArr = document.querySelectorAll('button.closeBtn');
    closeBtnArr.forEach(btn => {
        btn.addEventListener('click', (e) => e.target.parentElement.remove())
    });
    
    input.value = '';
}


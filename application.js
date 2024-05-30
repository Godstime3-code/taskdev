'use strict'
let todoInput = document.querySelector('.todo-input');



let todo = [];
function addTodo(){
    let li = document.createElement('li');
    li.classList.add('todo-style');
    let button = document.createElement('button');
    button.textContent = 'Delete';
    button.classList.add('todo-btn')
    let todoList = todoInput.value.trim();
    let task = document.createElement('span');
    task.textContent = todoList
    li.append(task)
    let ul = document.querySelector('.container ul');
    ul.appendChild(li);
    
    todo.push(todoList)
    

    if(todoList){
      li.appendChild(task);
      li.appendChild(button);
      todoInput.value= '';
    }

    button.addEventListener('click', ()=>{
      li.remove();
    })
  
  
}


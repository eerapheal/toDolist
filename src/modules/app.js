/* eslint no-undefined: "error" */

import ListTemplate from './templateList.js';
import localGet from './storage.js';

const todoListContainer = document.querySelector('.toDoListItemContainer');

const todoInput = document.querySelector('.toDoInput');

const displayList = () => {
  todoListContainer.innerHTML = '';
  localGet.forEach((item, id) => {
    todoListContainer.innerHTML
    += `
      <div class='toDoItem'>
        <input class='item' id='check-${id}', "completed")' type='checkbox' ${item.completed ? 'checked' : ''} onclick='updateList(${id}, "completed")'>
        <input type='text' class='findInput' id='input-${id}' value='${item.description}' />
        <i onclick='updateList(${id}, "description")' class='fa-solid fa-file-pen' id='options-${id}'></i>
        <i onclick='removeList(${id})' class='fa-solid fa-trash' id='delete-${id}'></i>
      </div>
    `;
  });
};

const addList = (description, completed, index) => {
  const listAdded = new ListTemplate(description, completed, index);
  localGet.push(listAdded);
  localStorage.setItem('listStorage', JSON.stringify(localGet));
  setTimeout(() => {
    todoInput.value = '';
  }, 1000);
  displayList();
};

window.removeList = () => {
  const deleteBtn = [...document.querySelectorAll('.fa-trash')];
  deleteBtn.forEach((item) => {
    item.addEventListener('click', () => {
      localGet.splice(deleteBtn.indexOf(item), 1);
      localGet.forEach((item, index) => {
        item.index = index + 1;
      });
      localStorage.setItem('listStorage', JSON.stringify(localGet));
      displayList();
    });
  });
};

window.updateList = (id) => {
  const updateInput = document.querySelector(`#input-${id}`).value;
  const updateCheckbox = document.querySelector(`#check-${id}`).checked;
  const updatedArray = localGet.map((item) => {
    if (item.index - 1 === id) {
      item.description = updateInput;
    }
    if (item.index - 1 === id) {
      item.completed = updateCheckbox;
    }
    return item;
  });

  localStorage.setItem('listStorage', JSON.stringify(updatedArray));
};

export { addList, displayList };
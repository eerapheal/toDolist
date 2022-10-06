import './style.css';
import { addList, displayList } from './modules/appbuilder.js'
import localGet from './modules/localstorage';

const addBtn = document.querySelector('.add');
const task = document.querySelector('.task');

window.addEventListener('load', () => {
  displayList();
});

addBtn.addEventListener('click', () => {
  addList(task.value, false, localGet.length + 1);
});

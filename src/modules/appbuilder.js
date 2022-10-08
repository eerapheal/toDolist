// import Template from './obarr.js';
// import localGet from './localstorage';

// const todoListContainer = document.querySelector('.listItem');

// const displayList = () => {
//   todoListContainer.innerHTML = '';
//   localGet.forEach((item, id) => {
//     todoListContainer.innerHTML
//     += `
//       <div class='toDoItem'>
//         <input class='item' id='check-${id}',
//          completed)' type='checkbox' value='${item.completed}'>
//         <input type='text' class='findInput' id='input-${id}' value='${item.description}' />
//         <i onclick='updateList(${id})' class='fa fas fa-check' id='options-${id}'></i>
//         <i onclick='removeList(${id})' class='fas fa-trash' id='delete-${id}'></i>
//       </div>
//     `;
//   });
// };

// const addList = (description, completed, index) => {
//   const listAdded = new Template(description, completed, index);
//   localGet.push(listAdded);
//   localStorage.setItem('listStorage', JSON.stringify(localGet));
//   displayList();
// };

// window.removeList = () => {
//   const deleteBtn = [...document.querySelectorAll('.fa-trash')];
//   deleteBtn.forEach((item) => {
//     item.addEventListener('click', () => {
//       localGet.splice(deleteBtn.indexOf(item), 1);
//       localGet.forEach((item, index) => {
//         item.index = index + 1;
//       });
//       localStorage.setItem('listStorage', JSON.stringify(localGet));
//       displayList();
//     });
//   });
// };

// window.updateList = (id) => {
//   const updateInput = document.querySelector(`#input-${id}`).value;
//   const updatedArray = localGet.map((item) => {
//     if (item.index - 1 === id) {
//       item.description = updateInput;
//     }
//     return item;
//   });

//   localStorage.setItem('listStorage', JSON.stringify(updatedArray));
// };

// export { addList, displayList };
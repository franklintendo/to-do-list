var todoInput = document.querySelector("#todo-text");
var todoForm = document.querySelector("#todo-form");
var todoList = document.querySelector("#todo-list");
var todoCountSpan = document.querySelector("#todo-count");
// create string
var todos = ["Learn HTML", "Learn CSS", "Learn JavaScript"];


for (let i = 0; i < todos.length; i++) {
    var listItem = document.createElement('li');
    listItem.textContent = todos[i];
    todoList.appendChild(listItem);
    console.log(todos[listItem]);  
}
// user types new todo and is captured
// todoInput.addEventListener('', function(event) {
//     event.preventDefault();
//     console.log(todoInput.value);
// });

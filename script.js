var todoInput = document.querySelector("#todo-text");
var todoForm = document.querySelector("#todo-form");
var todoList = document.querySelector("#todo-list");
var todoCountSpan = document.querySelector("#todo-count");
var todoItem = '';
// create string
var todos = ["Learn HTML", "Learn CSS", "Learn JavaScript"];

// loop to pull items from array and display on page
for (let i = 0; i < todos.length; i++) {
    var listItem = document.createElement('li');
    listItem.textContent = todos[i];
    todoList.appendChild(listItem);  
};

// pull value from user input 
todoInput.addEventListener('input', function(event){
    event.preventDefault();
    todoItem = todoInput.value;
    // todos.push(todoInput.value);
    console.log(todoItem);
}) 
todoInput.addEventListener('keydown', function(event){
  

    // if enter key is pressed then new todo item is push to the array.
    if (event.keyCode === 13) {
        todos.push(todoItem);
        todoInput.value="";
          // prevents from page reloading.
        event.preventDefault();
        console.log(todos);
    }
    
})

// add to todo array


// user types new todo and is captured
// todoInput.addEventListener('', function(event) {
//     event.preventDefault();
//     console.log(todoInput.value);
// });

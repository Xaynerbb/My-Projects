const todoList = [{name:'make dinner', dueDate: '2025-07-18'}, {name: 'wash dishes', dueDate: '2025-07-18'}];

renderTodolist();

function renderTodolist(){
  let todoListHTMl = '';
  todoList.forEach(function (todoObject, index){
    
    const { name, dueDate } = todoObject;
  
    const html = `
    <div>${name}</div>
    <div>${dueDate}</div>
    <button onclick='
      todoList.splice(${index}, 1);
      renderTodolist();
    ' class="delete-todo-button">Delete</button>
     `;
    todoListHTMl += html;
  
  });
  
  
  document.querySelector('.js-todolist')
  .innerHTML = todoListHTMl;
}



function addTodo (){
  const inputElement = document.querySelector('.js-name-input');
  const name = inputElement.value;

 const dateInputElement = document.querySelector('.js-due-date-input');
 const dueDate = dateInputElement.value

  todoList.push({//name: name,
    //dueDate: dueDate
    name, dueDate}
    
  );
  


  inputElement.value = '';

  renderTodolist();
}

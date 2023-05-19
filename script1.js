// Select the necessary elements
const form = document.querySelector('#todoForm');
const todoList = document.querySelector('#todoList');
const completedList = document.querySelector('#completedList');

// Function to create a new to-do item
function createTodoItem(todoText, todoDate) {
  // Create the list item
  const li = document.createElement('li');

  // Create the task text
  const span = document.createElement('span');
  span.textContent = todoText;
  li.appendChild(span);

  // Create the task date
  const dateSpan = document.createElement('span');
  dateSpan.textContent = todoDate;
  dateSpan.classList.add('date');
  li.appendChild(dateSpan);

  // Create the delete button
  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  deleteButton.classList.add('delete');
  li.appendChild(deleteButton);

  // Create the completed button
  const completedButton = document.createElement('button');
  completedButton.textContent = 'Completed';
  completedButton.classList.add('completed');
  li.appendChild(completedButton);

  // Add the new item to the pending tasks list
  todoList.appendChild(li);
}

// Function to add a new to-do item
function addTodoItem(event) {
  event.preventDefault();

  // Get the input value and date
  const todoInput = document.querySelector('#todoInput');
  const todoDate = new Date().toLocaleString();

  // Create a new to-do item
  createTodoItem(todoInput.value, todoDate);

  // Clear the input field
  todoInput.value = '';
}

// Function to delete a to-do item
function deleteTodoItem(event) {
  if (event.target.classList.contains('delete')) {
    const li = event.target.parentElement;
    li.remove();
  }
}

// Function to mark a to-do item as completed
function completeTodoItem(event) {
  if (event.target.classList.contains('completed')) {
    const li = event.target.parentElement;
    li.classList.add('completed');
    todoList.removeChild(li);
    completedList.appendChild(li);
  }
}

// Function to edit a to-do item
function editTodoItem(event) {
  if (event.target.tagName === 'SPAN') {
    const span = event.target;
    const input = document.createElement('input');
    input.type = 'text';
    input.value = span.textContent;
    span.replaceWith(input);
    input.addEventListener('blur', () => {
      span.textContent = input.value;
      span.classList.remove('hidden');
      input.replaceWith(span);
    });
    input.focus();
  }
}

// Event listeners
form.addEventListener('submit', addTodoItem);
todoList.addEventListener('click', deleteTodoItem);
todoList.addEventListener('click', completeTodoItem);
todoList.addEventListener('dblclick', editTodoItem);

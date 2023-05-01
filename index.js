const form = document.querySelector('form');
const newTaskInput = document.querySelector('.newtask input');
const tasksList = document.querySelector('.tasks');

// Prevent form submission from reloading the page
form.addEventListener('submit', (event) => {
  event.preventDefault();
});

// Add new task when "Add" button is clicked
document.querySelector('.push').addEventListener('click', () => {
  const taskName = newTaskInput.value.trim();
  if (!taskName) {
    alert('Please enter a task');
    return;
  }
  tasksList.innerHTML += `
    <div class="task">
      <span>${taskName}</span>
      <button class="delete">X</button>
    </div>
  `;
  newTaskInput.value = '';

  // Attach click event listener to delete button of newly added task
  const currentTask = tasksList.lastElementChild.querySelector('.delete');
  currentTask.addEventListener('click', () => {
    currentTask.parentNode.remove();
  });

  // Attach click event listener to newly added task
  const newTask = tasksList.lastElementChild;
  newTask.addEventListener('click', () => {
    newTask.classList.add('completed');
  });
});

// Attach click event listener to delete button of existing tasks
tasksList.addEventListener('click', (event) => {
  if (event.target.classList.contains('delete')) {
    event.target.parentNode.remove();
  }
});

// Attach click event listener to existing tasks
tasksList.addEventListener('click', (event) => {
  if (!event.target.classList.contains('delete')) {
    event.target.classList.add('completed');
  }
});

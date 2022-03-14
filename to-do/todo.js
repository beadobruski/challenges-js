const inputElement = document.querySelector('.new-task-input');
const addTaskButton = document.querySelector('.new-task-button');
const tasksContainer = document.querySelector('.tasks-container');

const validateInput = () => inputElement.value.trim().length > 0;

const handleAddTask = () => {
  const inputIsValid = validateInput();

  if (!inputIsValid) {
    return inputElement.classList.add('error');
  }

  const taskItemContainer = document.createElement('div');
  taskItemContainer.classList.add('task-item');

  const taskContent = document.createElement('p');
  taskContent.innerText = inputElement.value;

  taskContent.addEventListener('click', () => handleComplete(taskContent));

  const deleteItem = document.createElement('i');
  deleteItem.classList.add('far');
  deleteItem.classList.add('fa-trash-alt');

  deleteItem.addEventListener('click', () =>
    handleDeleteClick(taskContent, taskItemContainer)
  );

  tasksContainer.appendChild(taskItemContainer);
  taskItemContainer.appendChild(taskContent);
  taskItemContainer.appendChild(deleteItem);

  inputElement.value = '';
};

const handleComplete = (taskContent) => {
  const tasks = tasksContainer.childNodes;

  for (const task of tasks) {
    const currentTaskIsBeingClicked = task.firstChild.isSameNode(taskContent);
    if (currentTaskIsBeingClicked) {
      taskContent.classList.toggle('completed');
    }
  }
};

const handleDeleteClick = (taskContent, taskItemContainer) => {
  const tasks = tasksContainer.childNodes;

  for (const task of tasks) {
    const currentTaskIsBeingClicked = task.firstChild.isSameNode(taskContent);

    if (currentTaskIsBeingClicked) {
      taskItemContainer.remove();
    }
  }
};

const handleChange = () => {
  const inputIsValid = validateInput();

  if (inputIsValid) {
    inputElement.classList.remove('error');
  }
};

addTaskButton.addEventListener('click', () => handleAddTask());
inputElement.addEventListener('change', () => handleChange());

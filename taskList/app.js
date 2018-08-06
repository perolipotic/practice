const form = document.querySelector('#task-form');
const taskList = document.querySelector(".collection");
const clearBtn = document.querySelector(".clear-tasks");
const filter = document.querySelector("#filter");
const taskInput = document.querySelector("#task");

//load all events

loadEventListeners()

//load all event listteners

function loadEventListeners() {
  //DOM load Event
  document.addEventListener('DOMContentLoaded', getTask)

  form.addEventListener('submit', addTask);
  //REMOVE TASK EVENT
  taskList.addEventListener('click', removeTask);
  //CLEAR TASK EVENT
  clearBtn.addEventListener('click', clearTasks);
  //Filter
  filter.addEventListener('keyup', filterTasks)
}
//GET TASK FROM LS

function addTask(e) {

  if (taskInput.value === "") {
    alert('add a task');
  }
  console.log(taskInput.value)
  //create li elemnt 
  const li = document.createElement('li');
  li.classList = 'collection-item';

  //create text node and append to li
  li.appendChild(document.createTextNode(taskInput.value));

  //create new link element
  const link = document.createElement('a');
  link.className = 'delete-item secondary-content';

  //add icon HTML
  link.innerHTML = '<i class="fa fa-remove"></i>';
  li.appendChild(link);


  taskList.appendChild(li);

  //Store in LS
  storeTaskInLocalStorage(taskInput.value)

  //clear input 
  taskInput.value = '';


  e.preventDefault();
}

function getTask() {
  if (localStorage.getItem('tasks') === null) {
    tasks = []
  }
  else {
    tasks = JSON.parse(localStorage.getItem('tasks'))
    console.log(localStorage.getItem('tasks'))
  }
  tasks.forEach(function (task) {

    //create li elemnt 
    const li = document.createElement('li');
    li.classList = 'collection-item';

    //create text node and append to li
    li.appendChild(document.createTextNode(task));

    //create new link element
    const link = document.createElement('a');
    link.className = 'delete-item secondary-content';

    //add icon HTML
    link.innerHTML = '<i class ="fa fa-remove"><i/>';
    li.appendChild(link);


    taskList.appendChild(li);

  })
}


function storeTaskInLocalStorage(task) {
  let tasks;

  if (localStorage.getItem('tasks') === null) {
    tasks = []

  }
  else {
    tasks = JSON.parse(localStorage.getItem('tasks'))

  }
  tasks.push(task);

  localStorage.setItem('tasks', JSON.stringify(tasks));
}



function removeTask(e) {
  if (e.target.parentElement.classList.contains('delete-item')) {
    if (confirm('Are you sure?')) {
      e.target.parentElement.parentElement.remove();
      removeTaskFromLocalStorage(e.target.parentElement.parentElement)
    }
  };
}

function removeTaskFromLocalStorage(taskItem) {
  let tasks;
  console.log('test')
  if (localStorage.getItem('tasks') === null) {
    tasks = []
  }
  else {
    tasks = JSON.parse(localStorage.getItem('tasks'))
  }

  tasks.forEach(function (task, index) {
    console.log(taskItem.innerHTML)
    if (taskItem.textContent === task) {
      console.log('test2')
      tasks.splice(index, 1)
    }
  });
  localStorage.setItem('tasks', JSON.stringify(tasks))
}

function clearTasks() {
  while (taskList.firstChild) {
    taskList.removeChild(taskList.firstChild);
    clearTasksFromLocalStorage()
  }
}
function clearTasksFromLocalStorage() {
  localStorage.clear()
}

function filterTasks(e) {
  const text = e.target.value.toLowerCase();
  document.querySelectorAll('.collection-item').forEach(
    function (task) {
      const item = task.firstChild.textContent;

      if (item.toLowerCase().indexOf(text) != -1) {
        task.style.display = 'block'
      } else {
        task.style.display = 'none'
      }
    }
  );
} 
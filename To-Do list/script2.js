
document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskList = document.getElementById('taskList');
  
    // Load tasks from local storage on page load
    loadTasks();
  
    // Add task
    addTaskBtn.addEventListener('click', () => {
      const taskText = taskInput.value.trim();
      if (taskText !== '') {
        addTask(taskText);
        taskInput.value = '';
        saveTasks();
      }
    });
  
    // Remove task
    taskList.addEventListener('click', (e) => {
      if (e.target.tagName === 'BUTTON') {
        e.target.parentElement.remove();
        saveTasks();
      }
    });
  
    // Add task to the list
    function addTask(taskText) {
      const li = document.createElement('li');
      li.textContent = taskText;
      const removeBtn = document.createElement('button');
      removeBtn.textContent = 'Remove';
      li.appendChild(removeBtn);
      taskList.appendChild(li);
    }
  
    // Save tasks to local storage
    function saveTasks() {
      const tasks = [];
      taskList.querySelectorAll('li').forEach(task => {
        tasks.push(task.firstChild.textContent);
      });
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }
  
    // Load tasks from local storage
    function loadTasks() {
      const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
      tasks.forEach(task => {
        addTask(task);
      });
    }
  });
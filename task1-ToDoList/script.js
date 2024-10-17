document.addEventListener('DOMContentLoaded', () => {
  const taskInput = document.getElementById('task-input');
  const addTaskButton = document.getElementById('add-task-button');
  const taskList = document.getElementById('task-list');
  const filterButtons = document.querySelectorAll('.filter-buttons button');

  let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  let currentFilter = 'all'; 

  
  function renderTasks(filter = currentFilter) {
      taskList.innerHTML = '';
      currentFilter = filter;

      const filteredTasks = tasks.filter(task => {
          if (filter === 'completed') return task.completed;
          if (filter === 'pending') return !task.completed;
          return true;
      });

      filteredTasks.forEach((task, index) => {
          const taskItem = document.createElement('li');
          taskItem.className = `task-item ${task.completed ? 'completed' : ''}`;
          taskItem.innerHTML = `
              <span>${task.title}</span>
              <div class="task-buttons">
                  <button class="complete-btn" onclick="toggleComplete(${tasks.indexOf(task)})">&#10003;</button>
                  <button class="edit-btn" onclick="editTask(${tasks.indexOf(task)})">&#9998;</button>
                  <button class="delete-btn" onclick="deleteTask(${tasks.indexOf(task)})">&#10005;</button>
              </div>
          `;
          taskList.appendChild(taskItem);
      });
  }

  // Add a new task
  function addTask() {
      const taskTitle = taskInput.value.trim();
      if (taskTitle) {
          tasks.push({ title: taskTitle, completed: false });
          localStorage.setItem('tasks', JSON.stringify(tasks));
          taskInput.value = '';
          renderTasks();
      }
  }

  // Toggle task completion
  window.toggleComplete = function(index) {
      tasks[index].completed = !tasks[index].completed;
      localStorage.setItem('tasks', JSON.stringify(tasks));
      renderTasks();
  };

  // Edit a task
  window.editTask = function(index) {
      const newTitle = prompt('Edit the task', tasks[index].title);
      if (newTitle !== null) {
          tasks[index].title = newTitle.trim();
          localStorage.setItem('tasks', JSON.stringify(tasks));
          renderTasks();
      }
  };

  // Delete a task
  window.deleteTask = function(index) {
      tasks.splice(index, 1);
      localStorage.setItem('tasks', JSON.stringify(tasks));
      renderTasks();
  };

  // Handle filter buttons
  function handleFilterButtons(event) {
      filterButtons.forEach(button => button.classList.remove('active'));
      event.target.classList.add('active');
      renderTasks(event.target.dataset.filter);
  }

  // Event listeners
  addTaskButton.addEventListener('click', addTask);
  filterButtons.forEach(button => button.addEventListener('click', handleFilterButtons));

  renderTasks();
});
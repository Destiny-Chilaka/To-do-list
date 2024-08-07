document.addEventListener('DOMContentLoaded', () => {
  const addTaskBtn = document.getElementById('add-task-btn');
  const newTaskInput = document.getElementById('new-task');
  const taskList = document.getElementById('task-list');

  addTaskBtn.addEventListener('click', () => {
      const taskText = newTaskInput.value.trim();
      if (taskText) {
          addTask(taskText);
          newTaskInput.value = '';
      }
  });

  newTaskInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
          const taskText = newTaskInput.value.trim();
          if (taskText) {
              addTask(taskText);
              newTaskInput.value = '';
          }
      }
  });

  function addTask(taskText) {
      const li = document.createElement('li');
      li.innerHTML = `
      <div class="input-container">
          <span><input type="checkbox" class="check-btn" >${taskText}</span>
          <button class="remove-btn">Remove</button>
          </div>
      `;

      const removeBtn = li.querySelector('.remove-btn');
      removeBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          taskList.removeChild(li);
      });

      taskList.appendChild(li);
  }
});

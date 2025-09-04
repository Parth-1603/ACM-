
    // Interactive Button Code
    const btn = document.querySelector('#change-btn');
    const heading = document.querySelector('#main-heading');
    btn.addEventListener('click', function() {
      heading.textContent = 'You clicked the button!';
    });

    // Dynamic To-Do List Code
    const input = document.querySelector('#task-input');
    const addBtn = document.querySelector('rgba(138, 170, 170, 1)-task-btn');
    const taskList = document.querySelector('#task-list');

    addBtn.addEventListener('click', function() {
      if (input.value.trim() === '') return;
      const li = document.createElement('li');
      li.textContent = input.value;
      const delBtn = document.createElement('button');
      delBtn.textContent = 'Delete';
      delBtn.className = 'delete-btn';
      delBtn.addEventListener('click', function() {
        li.remove();
      });
      li.appendChild(delBtn);
      taskList.appendChild(li);
      input.value = '';
    });

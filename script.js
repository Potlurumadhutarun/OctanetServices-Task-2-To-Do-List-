document.getElementById('addTaskBtn').addEventListener('click', function() {
    const taskInput = document.getElementById('taskInput');
    const dueDateInput = document.getElementById('dueDateInput');
    const categoryInput = document.getElementById('categoryInput');
    const priorityInput = document.getElementById('priorityInput');

    const taskText = taskInput.value;
    const dueDate = dueDateInput.value;
    const category = categoryInput.value;
    const priority = priorityInput.value;

    if (taskText === '') {
        alert('Please enter a task');
        return;
    }

    const taskList = document.getElementById('taskList');

    const taskItem = document.createElement('li');
    taskItem.className = 'task';

    const taskContent = document.createElement('div');
    taskContent.innerHTML = `
        <strong>${taskText}</strong> <br>
        Due: ${dueDate} <br>
        Category: ${category} <br>
        Priority: ${priority}
    `;
    taskItem.appendChild(taskContent);

    const completeBtn = document.createElement('button');
    completeBtn.textContent = 'Complete';
    completeBtn.className = 'complete-btn';
    completeBtn.addEventListener('click', function() {
        taskItem.classList.toggle('complete');
    });
    taskItem.appendChild(completeBtn);

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.className = 'delete-btn';
    deleteBtn.addEventListener('click', function() {
        taskList.removeChild(taskItem);
    });
    taskItem.appendChild(deleteBtn);

    taskList.appendChild(taskItem);

    taskInput.value = '';
    dueDateInput.value = '';
    categoryInput.value = 'Work';
    priorityInput.value = 'Low';
});

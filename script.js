function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    if (taskText === '') return;

    const li = document.createElement('li');
    li.textContent = taskText;

    // Toggle completed on click
    li.addEventListener('click', () => {
        li.classList.toggle('completed');
    });

    // Add delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'X';
    deleteBtn.className = 'delete-btn';
    deleteBtn.onclick = (e) => {
        e.stopPropagation(); // prevent triggering 'completed'
        li.remove();
    };

    li.appendChild(deleteBtn);
    document.getElementById('taskList').appendChild(li);
    taskInput.value = '';
}
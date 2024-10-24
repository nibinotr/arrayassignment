// Select the necessary elements
const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const removeTaskBtn = document.getElementById('removeTaskBtn');
const taskList = document.getElementById('taskList');

// Array to store tasks
let tasks = [];

// Function to render tasks
function renderTasks() {
    taskList.innerHTML = '';  // Clear current tasks
    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.textContent = `${index + 1}. ${task}`;
        taskList.appendChild(li);
    });
}

// Add task
addTaskBtn.addEventListener('click', () => {
    const task = taskInput.value.trim();
    if (task !== '') {
        tasks.push(task);  // Add task to array
        taskInput.value = '';  // Clear input field
        renderTasks();  // Render updated task list
    }
});

// Remove last task
removeTaskBtn.addEventListener('click', () => {
    tasks.pop();  // Remove last task from array
    renderTasks();  // Render updated task list
});

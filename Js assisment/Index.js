// Task Manager CLI Simulation

let tasks = [];

// Function to add a new task
function addTask(name) {
    const trimmedName = name.trim();
    if (trimmedName) {
        const newTask = {
            id: Date.now(), // Unique ID using timestamp
            name: trimmedName,
            completed: false
        };
        tasks.push(newTask);
        console.log(`Task "${trimmedName}" added successfully.`);
    } else {
        console.log("Task name cannot be empty.");
    }
}

// Function to list all tasks
function listTasks() {
    if (tasks.length === 0) {
        console.log("No tasks available.");
        return;
    }
    console.log("Tasks List:");
    tasks.forEach(task => {
        console.log(`${task.id} - ${task.name} [${task.completed ? "Completed" : "Pending"}]`);
    });
}

// Function to mark a task as completed
function markTaskCompleted(id) {
    const task = tasks.find(task => task.id === id);
    if (task) {
        task.completed = true;
        console.log(`Task "${task.name}" marked as completed.`);
    } else {
        console.log(`Task with ID ${id} not found.`);
    }
}

// Function to delete a task
function deleteTask(id) {
    const initialLength = tasks.length;
    tasks = tasks.filter(task => task.id !== id);
    if (tasks.length < initialLength) {
        console.log(`Task with ID ${id} deleted.`);
    } else {
        console.log(`Task with ID ${id} not found.`);
    }
}

// Function to filter tasks by status
function filterTasks(status) {
    let filteredTasks = [];
    if (status.toLowerCase() === 'completed') {
        filteredTasks = tasks.filter(task => task.completed);
    } else if (status.toLowerCase() === 'pending') {
        filteredTasks = tasks.filter(task => !task.completed);
    } else {
        console.log("Invalid status. Use 'completed' or 'pending'.");
        return;
    }

    if (filteredTasks.length === 0) {
        console.log(`No ${status} tasks found.`);
    } else {
        console.log(`${status.charAt(0).toUpperCase() + status.slice(1)} Tasks:`);
        filteredTasks.forEach(task => {
            console.log(`${task.id} - ${task.name}`);
        });
    }
}

// Example Test Flow
addTask("Learn JavaScript");
addTask("Complete Bootcamp Assignment");
listTasks();

markTaskCompleted(tasks[0].id);
listTasks();

filterTasks('completed');
filterTasks('pending');

deleteTask(tasks[0].id);
listTasks();
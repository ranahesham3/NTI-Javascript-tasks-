let allTasks = [];

const addTaskBtn = document.querySelector('button');
const taskList = document.getElementById('taskList');

function displayTasks() {
    taskList.innerHTML = '';
    allTasks.forEach((el, index) => {
        const taskItem = document.createElement('li');

        switch (el.taskType) {
            case 'Task':
                taskItem.className = 'task';
                break;
            case 'In Progress':
                taskItem.className = 'in-progress';
                break;
            case 'Done':
                taskItem.className = 'done';
                break;
        }

        taskItem.innerHTML =
            `<b>${el.taskName}</b>,   Type: ${el.taskType}, Created at: ${el.dateAdded}` +
            `<span class="buttons"><button class="edit">Edit</button><button class="delete">Delete</button></span>`;

        taskItem.querySelector('.edit').addEventListener('click', () => {
            const newName = prompt('Enter new task name:', el.taskName);
            const newType = prompt(
                'Enter new task type (Task, In Progress, Done):',
                el.taskType
            );

            if (newName && newType) {
                el.taskName = newName;
                el.taskType = newType;
                displayTasks();
            }
        });

        taskItem.querySelector('.delete').addEventListener('click', () => {
            allTasks.splice(index, 1);
            displayTasks();
        });

        taskList.appendChild(taskItem);
    });
}

addTaskBtn.addEventListener('click', function () {
    let taskName = document.getElementById('taskName');
    let taskType = document.getElementById('taskType').value;
    if (taskName === '') {
        alert('Please provide a task name');
        return;
    }
    allTasks.push({
        taskName: taskName.value.trim(),
        taskType: taskType,
        dateAdded: new Date().toDateString(),
    });

    console.log(allTasks);
    displayTasks();
    taskName.value = '';
});

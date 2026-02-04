const todoInput = document.getElementById("todo-input")
const addTaskButton =document.getElementById("add-task-btn");
const TodoList = document.getElementById("todo-list");

let tasks =[]

addTaskButton.addEventListener("click",function(){
    const tasktext = todoInput.value.trim()
    if (tasktext === "") return;

    const newTask={
        id: Date.now(), // creates a unique id
        Text: tasktext,
        completed: false
    }
    tasks.push(newTask) // push to array
    todoInput.value = "" //clear input
    console.log(tasks);
    
})
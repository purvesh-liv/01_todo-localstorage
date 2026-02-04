

document.addEventListener("DOMContentLoaded",()=>{
    const todoInput = document.getElementById("todo-input");
    const addTaskButton = document.getElementById("add-task-btn");
    const TodoList = document.getElementById("todo-list");

    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
     
    tasks.forEach(task => renderTask(task))
        


    addTaskButton.addEventListener("click", function () {
      const tasktext = todoInput.value.trim();
      if (tasktext === "") return;

      const newTask = {
        id: Date.now(), // creates a unique id
        Text: tasktext,
        completed: false,
      };
      tasks.push(newTask); // push to array
      savedTaks(); // save to localstorage
      renderTask(newTask)
      todoInput.value = ""; //clear input
      console.log(tasks);
    });
    function renderTask(task) {
       const li = document.createElement("li") 
       li.setAttribute('data-id', task.id)

    if(task.completed) li.classList.add("completed")

       li.innerHTML= `
       <span>${task.Text}</span>
       <button>delete</button>`;

     li.addEventListener("click",(e) =>{
        if(e.target.tagName === "BUTTON") return
        task.completed = !task.completed
        li.classList.toggle("completed")
        savedTaks()
     })
      li.querySelector("button").addEventListener("click",(e)=>{
        e.stopPropagation() // prevent toggle from firing  || bubling event
        tasks = tasks.filter(t => t.id !== task.id)
        li.remove()
        savedTaks()
      })
       TodoList.appendChild(li)
    }

    function savedTaks() {
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }








})
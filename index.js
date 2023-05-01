const add = document.querySelector(".push");
const input = document.querySelector("#input-field");
const tasksList = document.querySelector(".tasks");
const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
});

let dataExists = false;

// Check if data exists in localStorage and load it if it does
if (localStorage.getItem("tasks")) {
  tasksList.innerHTML = localStorage.getItem("tasks");
  dataExists = true;
}

function mood() {
  if (!dataExists) {
    tasksList.innerHTML = "<p>No data available.</p>";
  }
}

add.onclick = () =>{
    if(input.value != ""){
        tasksList.innerHTML += `
            <div class="task">
                <span>${input.value}</span>
                <button class="delete">🗑</button>
            </div>`
        input.value = "";
        mood = "data";
        if (tasksList.querySelector("p")) {
            tasksList.removeChild(tasksList.querySelector("p"));
        }

        // Save tasks to localStorage
        localStorage.setItem("tasks", tasksList.innerHTML);
    } else {
        mood = "noData";
    }
};

// Use event delegation to handle delete button clicks
tasksList.addEventListener("click", (event) => {
  if (event.target.classList.contains("delete")) {
    event.target.parentNode.remove();
    if (tasksList.childElementCount == 0) {
      tasksList.innerHTML = `<p>No data available.</p>`;
      mood = "noData";
      // Remove tasks from localStorage if no tasks left
      localStorage.removeItem("tasks");
    } else {
      // Update tasks in localStorage
      localStorage.setItem("tasks", tasksList.innerHTML);
    }
  }
});

tasksList.addEventListener("click", (event) => {
  if (event.target.tagName === "SPAN") {
    if (event.target.classList.contains("completed")){
      event.target.classList.remove("completed");
    } else {
      event.target.classList.add("completed");
    }
    // Update tasks in localStorage
    localStorage.setItem("tasks", tasksList.innerHTML);
  }
});

mood();

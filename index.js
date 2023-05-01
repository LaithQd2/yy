document.querySelector(".push").onclick = function(){
    if(document.querySelector(".newtask input").value.length == 0){
        alert("Please inter a task");
    }else{
document.querySelector(".tasks").innerHTML += `
  <div class="task">
    <span>
      ${document.querySelector(".newtask input").value}
    </span>
    <button class="delete"><i class="fa-solid fa-trash-can-xmark"></i></button>
  </div>
`;
}
}

let currentTask = document.querySelectorAll(".delete")
for(let i=0; i<currentTask.length; i++){
    currentTask[i].onclick = function (){
        this.parentNode.remove();
    }
}

let task = document.querySelectorAll(".task")
for(let i=0; i<task.length; i++){
    task[i].onclick = function (){
        this.coassList.toggle("completed")
    }
}

document.querySelector(".newtask input").value = "";
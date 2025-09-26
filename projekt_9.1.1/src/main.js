const API_PATH = "http://localhost:3000";
let tasksEl;

function renderTasks() {
  return fetch(`${API_PATH}/tasks`)
    .then((res) => res.json())
    .then((data) => {
      data.forEach((task) => {
        const taskEl = document.createElement("li");
        const putEl = document.createElement("button")
        const spanEl = document.createElement("span")
        spanEl.innerText = `${task.id} ${task.title}`;
        putEl.innerText = "update";
        taskEl.appendChild(spanEl);
        tasksEl.appendChild(taskEl);
        tasksEl.appendChild(putEl);
      });
    });
}

const form = document.querySelector("form")
const inputValue = document.querySelector("input");

function addTask() {
  form.addEventListener("submit", (event) => {
    const title = inputValue.value;
    event.preventDefault();

    fetch(`${API_PATH}/tasks`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({ title: title }),
  });
  });

 window.location.reload()
}


function put() {

}

document.addEventListener("DOMContentLoaded", () => {
  tasksEl = document.querySelector("#tasks");
  renderTasks();
  
});

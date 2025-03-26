// Select necessary DOM elements
const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

// Function to create and add a task to the list
function addTask() {
  const taskText = taskInput.value.trim();
  
  if (taskText !== "") {
    const li = document.createElement("li");

    // Create task text
    const span = document.createElement("span");
    span.textContent = taskText;

    // Create delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "X";
    deleteBtn.onclick = function () {
      taskList.removeChild(li); // Remove the task when button is clicked
    };

    // Append span and delete button to the li
    li.appendChild(span);
    li.appendChild(deleteBtn);

    // Add the li to the task list
    taskList.appendChild(li);

    // Clear the input field
    taskInput.value = "";
  } else {
    alert("Please enter a task.");
  }
}

// Event listener to add a task when the button is clicked
addTaskBtn.addEventListener("click", addTask);

// Optional: Add task when "Enter" key is pressed
taskInput.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    addTask();
  }
});

const formEl = document.querySelector(".form");
const inputEl = document.querySelector(".input");
const listEl = document.querySelector(".list");

let listItems = JSON.parse(localStorage.getItem("listItems"));

formEl.addEventListener("submit", (e) => {
  e.preventDefault();
  toDoList();
});

const toDoList = (task) => {
  let newTask = inputEl.value;

  if (task) {
     newTask = task.name;
  }

  const toDoItem = document.createElement("li");

   if (task && task.checked) {
     toDoItem.classList.add("checked");
   }

  toDoItem.innerText = newTask;
  listEl.appendChild(toDoItem);
  inputEl.value = "";

  const checkIcon = document.createElement("div");
  checkIcon.innerHTML = `<i class="fa-regular fa-square-check">`;
  toDoItem.appendChild(checkIcon);

  const deleteIcon = document.createElement("div");
  deleteIcon.innerHTML = `<i class="fa-regular fa-trash-can">`;
  toDoItem.appendChild(deleteIcon);

  checkIcon.addEventListener("click", () => {
    toDoItem.classList.toggle("checked");
    updateLocalStorage();
  });

  deleteIcon.addEventListener("click", () => {
    listEl.removeChild(toDoItem);
    updateLocalStorage();
  });

  updateLocalStorage();

};

 const updateLocalStorage = () => {
   const toDoItems = document.querySelectorAll("li");
   listItems = [];

   toDoItems.forEach((item) => {
    listItems.push({
       name: item.innerText,
       checked: item.classList.contains("checked"),
     });
   });

   localStorage.setItem("listItems", JSON.stringify(listItems));
 };

 listItems.forEach((task) => {
  toDoList(task);
});
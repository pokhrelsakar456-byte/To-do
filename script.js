const input = document.getElementById("input-box");
const list = document.getElementById("list-container");
const message = document.getElementById("message");

function getList() {
  if (input.value === "") {
    message.innerText = "You need to write something!";
    message.style.display = "inline-block";
    setTimeout(() => {
      message.innerHTML = "";
      message.style.display = "none";
    }, 2000);
  } else if (input.value !== "") {
    message.innerHTML = "";
    let li = document.createElement("li");
    li.innerHTML = input.value;
    list.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  input.value = "";
  saveData();
}

list.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveData();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveData();
    }
  },
  false
);

function saveData() {
  localStorage.setItem("data", list.innerHTML);
}
function showTask() {
  list.innerHTML = localStorage.getItem("data");
}
showTask();

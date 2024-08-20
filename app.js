const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");

//  Use let for this not const bcz if we use const then it will not store data in localstorage, So use let keyword here:
let notes = document.querySelectorAll(".input-box");

//  For show data in browser:
function showData() {
  notesContainer.innerHTML = localStorage.getItem("notes");
}

showData();

// For store data inn browser:
function updateStorage() {
  localStorage.setItem("notes", notesContainer.innerHTML);
}

createBtn.addEventListener("click", () => {
  let inputBox = document.createElement("p");
  let img = document.createElement("img");
  inputBox.className = "input-box";
  inputBox.setAttribute("contenteditable", "true");
  img.src = "images/delete.png";
  notesContainer.appendChild(inputBox).appendChild(img);
  updateStorage();
});

//  for del  btn :

notesContainer.addEventListener("click", function (e) {
  if (e.target.tagName === "IMG") {
    e.target.parentElement.remove();
    updateStorage();
  } else if (e.target.tagName === "P") {
    notes = document.querySelectorAll(".input-box");
    notes.forEach((nt) => {
      nt.onkeyup = function () {
        updateStorage();
      };
    });
  }
});

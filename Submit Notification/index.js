let button = document.querySelector(".button");
let okButton = document.querySelector(".okbutton");
let parentDiv = document.querySelector(".all");
let container = document.querySelector(".container")

button.addEventListener("click",()=>{
  container.classList.add("open");
});
okButton.addEventListener("click",()=>{
    container.classList.remove("open");
})
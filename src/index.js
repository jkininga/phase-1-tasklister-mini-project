// const createStatsCollector = require("mocha/lib/stats-collector");

document.addEventListener("DOMContentLoaded", () => {
 
  let form = document.querySelector("form");


  form.addEventListener('submit', (e) => {
    e.preventDefault();
    
 //let userInputTasksSection = document.querySelector("#list h2");
 let existingListElement = document.querySelector("#tasks");
 let userInput = document.querySelector("#new-task-description").value
 let newTaskBox = document.createElement('li');
 newTaskBox.textContent = userInput;
 existingListElement.appendChild(newTaskBox);
 userInput = '';




  });
  


});

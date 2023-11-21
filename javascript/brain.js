let logContainer = document.getElementById("logContainer");
let addButton = document.getElementById("addButton");
let saveButton = document.getElementById("saveButton");

addButton.addEventListener("click", addLogRow);

function addLogRow() {
    let logRow = document.createElement("div");
    logRow.classList.add("logRow");

    let timeInput = document.createElement("input");
    timeInput.setAttribute("type", "time");
    timeInput.classList.add("timeInput");

    let descriptionInput = document.createElement("input");
    descriptionInput.setAttribute("type", "text");
    descriptionInput.setAttribute("placeholder", "What did you do?");
    descriptionInput.style.border = "none";
    descriptionInput.style.borderRadius = "0.2em";


    logRow.appendChild(timeInput);
    logRow.appendChild(descriptionInput);

    logContainer.appendChild(logRow);
}



saveButton.addEventListener("click");
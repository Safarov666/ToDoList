// BUTTONA CLICK EDENDE
let addButton = document.getElementById("addButton");
addButton.addEventListener("click", addItem);

// ENTERE CLICK EDENDE YARANSIN
let input = document.getElementById("input");
input.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {

        addItem();
    }
});

// ELAVE ET
function addItem() {
    let task = input.value.trim();

    if (task !== "") {
        let listItem = document.createElement("li");
        listItem.className = "taskItem";

        let checkboxInput = document.createElement("button");
        checkboxInput.className = "checkbox";
        checkboxInput.textContent = "✔";
        checkboxInput.addEventListener("click", markAsDone);

        let span = document.createElement("span");
        span.textContent = task;

        let deleteButton = document.createElement("button");
        deleteButton.className = "deleteButton";
        deleteButton.textContent = "Sil";
        deleteButton.addEventListener("click", deleteItem);

        listItem.appendChild(checkboxInput);
        listItem.appendChild(span);
        listItem.appendChild(deleteButton);
        document.getElementById("taskList").appendChild(listItem);

        input.value = "";
    }
}

//TAMAMLANMISH TAPSIRIQ
function markAsDone() {
    let listItem = this.parentNode;
    listItem.classList.toggle("done");

}

//DELETE ETMEK BUTTONU
function deleteItem() {
    let listItem = this.parentNode;
    let taskList = listItem.parentNode;

    taskList.removeChild(listItem);
}
class Task {
    constructor(title, description) {
        this.title = title;
        this.description = description;
    }

    addToList(table) {
        const row = rowTemplate.cloneNode(true);
        const cells = row.children;
    
        cells[0].innerHTML = this.title;
        cells[1].innerHTML = this.description;
        cells[2].addEventListener("click", () => {
            row.remove();
        });
    
        row.classList.remove("d-none");
        table.append(row);
    }
}

const titleInput = document.getElementById("title");
const descriptionInput = document.getElementById("description");
const addButton = document.getElementById("button");
const table = document.getElementById("table-body");
const rowTemplate = document.getElementById("row-template");

addButton.addEventListener("click", () => {
    var title = titleInput.value;
    var description = descriptionInput.value;

    const newTask = new Task(title, description);
    newTask.addToList(table);

    titleInput.value = null;
    descriptionInput.value = null;
});
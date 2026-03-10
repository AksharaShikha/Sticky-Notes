const addBtn = document.getElementById("addNote");
const container = document.getElementById("notesContainer");

let notes = JSON.parse(localStorage.getItem("notes")) || [];

function saveNotes(){
    localStorage.setItem("notes", JSON.stringify(notes));
}

function createNote(text = ""){
    
    const note = document.createElement("div");
    note.classList.add("note");

    const textarea = document.createElement("textarea");
    textarea.value = text;

    const delBtn = document.createElement("button");
    delBtn.innerText = "Delete";
    delBtn.classList.add("deleteBtn");

    note.appendChild(textarea);
    note.appendChild(delBtn);

    container.appendChild(note);

    textarea.addEventListener("input", () => {
        updateNotes();
    });

    delBtn.addEventListener("click", () => {
        note.remove();
        updateNotes();
    });
}

function updateNotes(){
    const textareas = document.querySelectorAll("textarea");
    notes = [];

    textareas.forEach(t => {
        notes.push(t.value);
    });

    saveNotes();
}

addBtn.addEventListener("click", () => {
    createNote();
});

notes.forEach(note => createNote(note));

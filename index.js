const noteContainer = document.getElementById('note-card-container');

addNote = () => {
    const note = document.createElement('li');
    const input = document.createElement('textarea');
    const text = document.createElement('p');

    input.maxLength = '255';
    note.classList.add('note-card');
    
    note.appendChild(input);
    note.appendChild(text);
    noteContainer.appendChild(note);

    const saveButton = document.createElement('button');
    saveButton.type = 'button';
    saveButton.innerHTML = 'Save';
    saveButton.id = 'save-button'

    const deleteButton = document.createElement('button');
    deleteButton.type = 'button';
    deleteButton.innerHTML = 'X';
    deleteButton.id = "close-button";

    note.appendChild(saveButton);
    note.appendChild(deleteButton);
} 

swap = () => {
    const items = document.querySelectorAll('.note-card');
    items[3].parentNode.insertBefore(items[3], items[1]);
} 


noteContainer.addEventListener('click', (event) => {
    if(event.target.tagName === 'BUTTON') {
        const button = event.target;
        const note = button.parentNode;
        const input = note.querySelector('textarea');
        const text = note.querySelector('p');
        switch (button.textContent) {
            case 'Save':
                text.innerHTML = input.value;
                button.innerHTML = 'Edit';
                input.hidden = true;
                break;
            case 'Edit':  
                button.innerHTML = 'Edit'; 
                input.hidden = false;
                input.value = text.textContent;
                button.innerHTML = 'Save';
                break;
            default:
                noteContainer.removeChild(note);
                break;
        }
    }
})
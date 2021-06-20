const noteContainer = document.getElementById('note-card-container');

addNote = () => {
    const note = document.createElement('li');
    const text = document.createElement('textarea');
    text.maxLength = '255';
    note.classList.add('note-card');
    
    note.appendChild(text);
    noteContainer.appendChild(note);

    const saveButton = document.createElement('button');
    saveButton.type = 'button';
    saveButton.innerHTML = 'Save';

    const deleteButton = document.createElement('button');
    deleteButton.type = 'button';
    deleteButton.innerHTML = 'Delete';

    note.appendChild(saveButton);
    note.appendChild(deleteButton);
} 

noteContainer.addEventListener('click', (event) => {
    if(event.target.tagName === 'BUTTON') {
        const button = event.target;
        const note = button.parentNode;
        switch (button.textContent) {
            case 'Save':
                // text.disabled = 'true';
                button.innerHTML = 'Edit';
                break;
            case 'Edit':  
                button.innerHTML = 'Edit'; 
                break;
            default:
                noteContainer.removeChild(note);
                break;
        }
    }
})
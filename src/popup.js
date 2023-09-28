import { loadProjectCard } from './projects';
import { projects } from "./index";

const body = document.querySelector('body');

export function createProject(parent) {
    let cover = document.createElement('div');
    cover.classList.add('cover');
    body.appendChild(cover);

    let popup = document.createElement('div');
    popup.classList.add('popup');
    cover.appendChild(popup);

    let cancel = document.createElement('button');
    cancel.innerText = 'cancel';
    cancel.classList.add('cancel');
    cancel.addEventListener('click', () => cover.remove());
    popup.appendChild(cancel);

    let fieldset = document.createElement('fieldset');
    popup.appendChild(fieldset);

    let titleInputLabel = document.createElement('label');
    titleInputLabel.innerText = 'Title';
    titleInputLabel.setAttribute('for', 'title');
    fieldset.appendChild(titleInputLabel);
    let titleInput = document.createElement('input');
    titleInput.setAttribute('id', 'title');
    titleInput.setAttribute('name', 'title');
    titleInput.setAttribute('required', '');
    fieldset.appendChild(titleInput);

    let descriptionInputLabel = document.createElement('label');
    descriptionInputLabel.innerText = 'Description';
    titleInputLabel.setAttribute('for', 'description');
    fieldset.appendChild(descriptionInputLabel);
    let descriptionInput = document.createElement('textarea');
    descriptionInput.setAttribute('id', 'description');
    descriptionInput.setAttribute('name', 'description');
    titleInput.setAttribute('required', '');
    fieldset.appendChild(descriptionInput);

    let dueDateInputLabel = document.createElement('label');
    dueDateInputLabel.innerText = 'Due Date';
    titleInputLabel.setAttribute('for', 'dueDate');
    fieldset.appendChild(dueDateInputLabel);
    let dueDateInput = document.createElement('input');
    dueDateInput.setAttribute('id', 'dueDate');
    dueDateInput.setAttribute('name', 'dueDate');
    dueDateInput.setAttribute('type', 'date');
    titleInput.setAttribute('required', '');
    fieldset.appendChild(dueDateInput);

    let add = document.createElement('button');
    add.innerText = 'Create Project';
    add.addEventListener('click', () => {
        let project = {
            title: titleInput.value,
            description: descriptionInput.value,
            tasks: [], dueDate: dueDateInput.value, 
            notes: [], 
            checklist: false
        }
        console.log(project);
        projects.push(project);
        loadProjectCard(parent, project);
        cover.remove();
    })
    fieldset.appendChild(add);
}
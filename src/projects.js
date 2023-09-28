import { projects } from "./index";
import { createProject } from "./popup";

export function loadProjects(parent) {
    parent.innerHTML = '';

    let heading = document.createElement('h2');
    heading.innerText = 'Projects';
    parent.appendChild(heading);

    let container = document.createElement('div');
    parent.appendChild(container);

    for (let project of projects) {
        loadProjectCard(container, project);
    }

    let add = document.createElement('button');
    add.classList.add('add');
    add.innerText = 'Create Project';
    parent.appendChild(add);
    add.addEventListener('click', () => createProject(container));
}

export function loadProjectCard(parent, project) {
    let card = document.createElement('div');
    card.classList.add('card');
    parent.appendChild(card);

    let title = document.createElement('h3');
    title.innerText = project.title;
    card.appendChild(title);

    let description = document.createElement('p');
    description.innerText = project.description;
    card.appendChild(description);

    let date = document.createElement('p');
    date.innerText = project.dueDate;
    card.appendChild(date);

    let notesHeading = document.createElement('h3');
    notesHeading.innerText = 'Notes';
    card.appendChild(notesHeading);
    let notes = document.createElement('ul');
    card.appendChild(notes);
    for (let note of project.notes) {
        let li = document.createElement('li');
        li.innerText = note;
        notes.appendChild(li);
    }
}
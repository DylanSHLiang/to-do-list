export function loadTasks(parent) {
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
}

function loadProjectCard(parent, project) {
    let card = document.createElement('div');
    card.classList.add('card');
    parent.appendChild(card);

    let name = document.createElement('h3');
    name.innerText = project.name;
    card.appendChild(name);
}
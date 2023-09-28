import { loadProjects } from './projects'

const content = document.querySelector('#content');

export function loadPage() {
    loadHeader();
    loadMain();
    loadFooter();
}

function loadHeader() {
    let header = document.createElement('header');
    content.appendChild(header);

    let title = document.createElement('h1');
    title.innerText = 'To Do List';
    header.appendChild(title);
}

function loadMain() {
    let main = document.createElement('main');
    content.appendChild(main);

    loadNav(main);

    let tab = document.createElement('div');
    main.appendChild(tab);
    loadProjects(tab);
}

function loadNav(main) {
    let nav = document.createElement('nav');
    main.appendChild(nav);

    let projects = document.createElement('button');
    projects.innerText = 'Projects';
    nav.appendChild(projects);

    createList(nav, 'Upcoming Tasks');

    createList(nav, 'Priority Tasks');
}

function createList(parent, name) {
    let div = document.createElement('list');
    parent.appendChild(div);
    let heading = document.createElement('h3');
    heading.innerText = name;
    heading.classList.add('listHeading');
    div.appendChild(heading);
    let list = document.createElement('ul');
    div.appendChild(list);
    for (let i = 1; i < 4; i++) {
        let li = document.createElement('li');
        li.innerText = `Task ${i}`;
        list.appendChild(li);
    }
}

function loadFooter() {
    let footer = document.createElement('footer');
    content.appendChild(footer);

    let sources = document.createElement('h3');
    sources.innerText = 'All my own work!';
    footer.appendChild(sources);

    let github = document.createElement('h3');
    github.innerText = 'Checkout my ';
    let a = document.createElement('a');
    a.innerText = 'GitHub'
    a.setAttribute('href', 'https://github.com/DylanSHLiang');
    a.setAttribute('target', '_blank');
    github.appendChild(a);
    github.innerHTML += '!';
    footer.appendChild(github);
    
    let copyright = document.createElement('h3');
    copyright.innerText = 'All my own work!';
    footer.appendChild(copyright);
}
export function loadPage() {
    let header = create('header');
    document.appendChild(header);

    let main = create('main');
    document.appendChild(main);

    let footer = create('footer');
    document.appendChild(footer);
}

function create(element) {
    return document.createElement(element);
}
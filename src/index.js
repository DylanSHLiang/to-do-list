import './style.css';
import { loadPage } from './dom';

const Task = (title, description, dueDate, notes) => {
    return { title, description, dueDate, notes };
}

const Project = (title, description, tasks, dueDate, notes, checklist) => {
    return { title, description, tasks, dueDate, notes, checklist }
}

export const tasks = [
    {title: 'summer', description: 'It is hot', dueDate: '01/10/2024', notes: ['DAMN IT IS HOT!!!', 'I gotta finish this mane']},
    {title: 'summer', description: 'It is hot', dueDate: '01/10/2024', notes: ['DAMN IT IS HOT!!!', 'I gotta finish this mane']},
    {title: 'summer', description: 'It is hot', dueDate: '01/10/2024', notes: ['DAMN IT IS HOT!!!', 'I gotta finish this mane']}
];
export const projects = [
    {title: 'summer', description: 'It is hot', tasks: [], dueDate: '01/10/2024', notes: ['DAMN IT IS HOT!!!', 'I gotta finish this mane'], checklist: false},
    {title: 'autumn', description: 'It is hot', tasks: [], dueDate: '01/10/2024', notes: [], checklist: false},
    {title: 'winter', description: 'It is hot', tasks: [], dueDate: '01/10/2024', notes: [], checklist: false},
    {title: 'spring', description: 'It is cold', tasks: [], dueDate: '01/10/2024', notes: [], checklist: false}
];


loadPage();
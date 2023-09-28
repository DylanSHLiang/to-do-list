import './style.css';
import { loadPage } from './dom';

const Task = (title, description, dueDate, priority, notes, checklist) => {
    return { title, description, dueDate, priority, notes, checklist };
}

const Project = (title, description, tasks, dueDate, priority, notes, checklist) => {
    return { title, description, tasks, dueDate, priority, notes, checklist }
}

export const tasks = [];
export const projects = [ {name: 'summer'}, {name: 'autumn'}, {name: 'winter'}, {name: 'spring'} ];


loadPage();
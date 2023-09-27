const Task = (title, description, dueDate, priority, notes, checklist) => {
    return { title, description, dueDate, priority, notes, checklist };
}

const Project = (title, description, tasks, dueDate, priority, notes, checklist) => {
    return { title, description, tasks, dueDate, priority, notes, checklist }
}
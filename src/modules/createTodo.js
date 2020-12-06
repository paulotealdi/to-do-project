import { toggleModal } from './utilFunctions';

function createTodo(title, description, duedate, priority) {
    const finished = false;
    const project = "default";
    
    return {
        title,
        description,
        duedate,
        priority,
        project,
        finished
    };
}

function setupTodoModal() {
    const modal = document.querySelector("#create-todo-wrapper");
    const createTodoButton = document.querySelector("#create-todo");

    createTodoButton.addEventListener('click', () => toggleModal(modal));
}

export { createTodo, setupTodoModal };
import { toggleModal } from './utilFunctions';

function createProject(name) {
    const project = {
        name,
        active: false,
        todoList: []
    }

    return project;
}

function setupProjectModal() {
    const button = document.querySelector('#create-project');
    const modal = document.querySelector('#create-project-wrapper');

    button.addEventListener('click', () => toggleModal(modal));
}

export { createProject, setupProjectModal };
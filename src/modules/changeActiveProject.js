import renderTodos from './renderTodos';
import { returnActiveProject } from './utilFunctions';

function changeActiveProject(projectList) {
    const projectDOMList = document.querySelectorAll('.project-div');

    projectDOMList.forEach(project => {
        project.addEventListener('click', (e) => {
            const id = e.target.id;
            const activeProject = returnActiveProject(projectList);

            if(activeProject !== undefined)
                activeProject.active = false;

            projectList[id].active = true;
            renderTodos(projectList);

            const createTodoButton = document.querySelector('#create-todo');
            createTodoButton.disabled = false;
        });
    });
}

export default changeActiveProject;
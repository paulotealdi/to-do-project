import renderTodos from './renderTodos';
import { returnActiveProject } from './utilFunctions';

function changeActiveProject(projectList) {
    const projectDOMList = document.querySelectorAll('.project-div');

    projectDOMList.forEach(project => {
        project.addEventListener('click', () => {
            const activeProject = returnActiveProject(projectList);

            if(activeProject !== undefined)
                activeProject.active = false;

            projectList[project.id].active = true;
            renderTodos(projectList);
    
            const createTodoButton = document.querySelector('#create-todo');
            createTodoButton.disabled = false;

            sessionStorage.setItem("projectList", JSON.stringify(projectList));
        });
    });
}

export default changeActiveProject;
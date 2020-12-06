import renderTodos from './modules/renderTodos';
import renderProjects from './modules/renderProjects';
import { createTodo, setupTodoModal } from './modules/createTodo';
import { returnActiveProject, setupModalCloseButtons } from './modules/utilFunctions';
import { createProject, setupProjectModal } from './modules/createProject';
import { changeTodo } from './modules/changeTodo';

const projectList = [{
    name: 'default',
    active: false,
    todoList: []
},
{
    name: 'main',
    active: true,
    todoList: []
}];

init();

function newTodo() {
    const todoTitle = document.querySelector("#todo-title").value || "Empty 😔";
    const todoDescription = document.querySelector("#todo-description").value || "Empty 😔";
    const todoDuedate = document.querySelector("#todo-duedate").value || "Empty 😔";
    const todoPriority = document.querySelector("#todo-priority").value || "Empty 😔";

    const newTodoObject = createTodo(todoTitle, todoDescription, todoDuedate, todoPriority);

    const activeProject = returnActiveProject(projectList);
    activeProject.todoList.push(newTodoObject);
}

function newProject() {
    const projectName = document.querySelector("#project-name").value || "Empty 😔";

    const project = createProject(projectName);

    projectList.push(project);
}

function init() {
    // Handle the submit todo event
    document.querySelector("#submit-todo").addEventListener('click', () => {
        newTodo();
        renderTodos(projectList);
    });

    // Handle the submit project event
    document.querySelector('#submit-project').addEventListener('click', () => {
        newProject();
        renderProjects(projectList);
    });

    document.querySelector('#change-todo').addEventListener('click', e => {
        const id = e.target.parentNode.getAttribute('data-id');
        const activeProject = returnActiveProject(projectList);
        changeTodo(activeProject.todoList, id);
        renderTodos(projectList);
    });
    
    renderProjects(projectList);
    renderTodos(projectList);
    setupTodoModal();
    setupProjectModal();
    setupModalCloseButtons();
}
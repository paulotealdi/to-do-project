import { createTodo, setupTodoModal } from './modules/createTodo';
import renderTodos from './modules/renderTodos';
import renderProjects from './modules/renderProjects';

const todoList = [];
const projectList = ['default', 'main', 'a', 'b', 'c'];

init();

function newTodo() {
    const todoTitle = document.querySelector("#todo-title").value || "Empty 😔";
    const todoDescription = document.querySelector("#todo-description").value || "Empty 😔";
    const todoDuedate = document.querySelector("#todo-duedate").value || "Empty 😔";
    const todoPriority = document.querySelector("#todo-priority").value || "Empty 😔";

    const newTodoObject = createTodo(todoTitle, todoDescription, todoDuedate, todoPriority);

    todoList.push(newTodoObject);
}

function init() {
    // Handle the submit todo event
    document.querySelector("#submit-todo").addEventListener('click', () => {
        newTodo();
        renderTodos(todoList);
    });
    
    //setupTodoModal();
    renderProjects(projectList);
    renderTodos(todoList);
}
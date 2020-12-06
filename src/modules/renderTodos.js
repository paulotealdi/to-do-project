import { returnTodoList, returnActiveProject, setupTodoCheckbox } from './utilFunctions';
import { changeTodoModal } from './changeTodo';
import { deleteTodo, deleteFinishedTodos } from './deleteTodo';

function renderTodos(projectList) {
    const todoList = returnTodoList(projectList);
    const activeProject = returnActiveProject(projectList);

    if(activeProject == undefined) {
        return;
    }

    const highPriorityDiv = document.createElement('div');
    const highPriorityTitle = document.createElement('h3');
    highPriorityDiv.classList.add('priority-div');
    highPriorityTitle.innerText = "High Priority";
    highPriorityTitle.classList.add('priority-title');
    highPriorityDiv.appendChild(highPriorityTitle);

    const mediumPriorityDiv = document.createElement('div');
    const mediumPriorityTitle = document.createElement('h3');
    mediumPriorityDiv.classList.add('priority-div');
    mediumPriorityTitle.innerText = "Medium Priority";
    mediumPriorityTitle.classList.add('priority-title');
    mediumPriorityDiv.appendChild(mediumPriorityTitle);

    const lowPriorityDiv = document.createElement('div');
    const lowPriorityTitle = document.createElement('h3');
    lowPriorityDiv.classList.add('priority-div');
    lowPriorityTitle.innerText = "Low Priority";
    lowPriorityTitle.classList.add('priority-title');
    lowPriorityDiv.appendChild(lowPriorityTitle);

    const todosWrapper = document.querySelector("#todos-wrapper");
    todosWrapper.innerHTML = "";

    const todosMenuDiv = document.createElement('div');
    todosMenuDiv.id = "todos-menu-div";

    const projectName = document.createElement('h3');
    projectName.innerText = activeProject.name;
    projectName.classList.add('title');

    const deleteFinished = document.createElement('button');
    deleteFinished.type = "button";
    deleteFinished.innerText = "Delete finished To-Do's";
    deleteFinishedTodos(deleteFinished, todoList, projectList);

    const numberOfTodos = document.createElement('span');
    numberOfTodos.innerText = `${todoList.length} ToDo's in this project`;

    todosMenuDiv.appendChild(projectName);
    todosMenuDiv.appendChild(deleteFinished);
    todosMenuDiv.appendChild(numberOfTodos);
    todosWrapper.appendChild(todosMenuDiv);

    if(todoList.length === 0) {
        const emptyText = document.createElement('h3');
        emptyText.id = "empty-text";
        emptyText.innerText = "Empty To-Do list!";
        todosWrapper.appendChild(emptyText);
    }

    todoList.forEach((todo, index) => {
        const todoDiv = document.createElement('div');
        todoDiv.classList.add('todo-div');

        const todoTitleDiv = document.createElement('div');
        const todoTitle = document.createElement('h3');
        todoTitleDiv.classList.add('title');
        todoTitleDiv.classList.add('todo-title-div');
        
        const todoDescriptionDiv = document.createElement('div');
        const todoDescription = document.createElement('p');
        todoDescriptionDiv.classList.add('todo-description-div');
        
        const todoDuedateDiv = document.createElement('div');
        const todoDuedate = document.createElement('span');
        todoDuedateDiv.classList.add('todo-duedate-div');

        const todoCheckbox = document.createElement('input');
        todoCheckbox.type = "checkbox";
        todoCheckbox.classList.add('todo-checkbox');
        setupTodoCheckbox(todoCheckbox, todo, projectList);

        const deleteTodoButton = document.createElement('span');
        deleteTodoButton.innerText = "X";
        deleteTodoButton.classList.add('close-button');
        deleteTodoButton.classList.add('delete-todo-button');

        deleteTodo(deleteTodoButton, todoList, projectList, index);

        if(todo.finished) {
            todoDiv.classList.add('finished-todo');
            todoCheckbox.checked = true;
        }

        todoTitle.innerText = todo.title;
        todoDescription.innerText = todo.description;
        todoDuedate.innerText = `Duedate: ${todo.duedate}`;
        
        todoTitleDiv.appendChild(todoTitle);
        todoDescriptionDiv.appendChild(todoDescription);
        todoDuedateDiv.appendChild(todoDuedate);

        todoDiv.appendChild(todoCheckbox);
        todoDiv.appendChild(todoTitleDiv);
        todoDiv.appendChild(todoDescriptionDiv);
        todoDiv.appendChild(todoDuedateDiv);
        todoDiv.appendChild(deleteTodoButton);

        if(todo.priority === "High") {
            highPriorityDiv.appendChild(todoDiv);
        } else if (todo.priority === "Medium") {
            mediumPriorityDiv.appendChild(todoDiv);
        } else if (todo.priority === "Low") {
            lowPriorityDiv.appendChild(todoDiv);
        }

        todoDiv.addEventListener('click', () => changeTodoModal(todo, index));

        todosWrapper.appendChild(highPriorityDiv);
        todosWrapper.appendChild(mediumPriorityDiv);
        todosWrapper.appendChild(lowPriorityDiv);
    });
}

export default renderTodos;
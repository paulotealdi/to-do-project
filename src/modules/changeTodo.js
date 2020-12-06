import { toggleModal } from './utilFunctions';

function changeTodoModal(todo, index) {
    const modal = document.querySelector("#change-todo-wrapper");
    modal.setAttribute('data-id', index);

    const titleInput = document.querySelector("#todo-title-edit");
    const descriptionInput = document.querySelector("#todo-description-edit");
    const priorityInput = document.querySelector("#todo-priority-edit");

    const todoTitle = todo.title;
    const todoDescription = todo.description;
    const todoPriority = todo.priority;

    titleInput.value = todoTitle;
    descriptionInput.value = todoDescription;
    priorityInput.value = todoPriority;

    toggleModal(modal);
}

function changeTodo(todoList, id) {
    const titleInput = document.querySelector("#todo-title-edit");
    const descriptionInput = document.querySelector("#todo-description-edit");
    const priorityInput = document.querySelector("#todo-priority-edit");
    const duedateInput = document.querySelector("#todo-duedate-edit");

    todoList[id].title = titleInput.value;
    todoList[id].description = descriptionInput.value;
    todoList[id].priority = priorityInput.value;
    todoList[id].duedate = duedateInput.value;
}

export { changeTodoModal, changeTodo };
function renderTodos(todoList) {
    const todosWrapper = document.querySelector("#todos-wrapper");
    todosWrapper.innerHTML = "";

    todoList.forEach(todo => {
        const todoDiv = document.createElement('div');
        todoDiv.classList.add('todo-div');

        const todoTitleDiv = document.createElement('div');
        const todoTitle = document.createElement('h3');
        todoTitleDiv.classList.add('title');
        todoTitleDiv.classList.add('todo-title-div')
        
        const todoDescriptionDiv = document.createElement('div');
        const todoDescription = document.createElement('p');
        todoDescriptionDiv.classList.add('todo-description-div');
        
        const todoDuedateDiv = document.createElement('div');
        const todoDuedate = document.createElement('span');
        todoDuedateDiv.classList.add('todo-duedate-div');
        
        const todoPriorityDiv = document.createElement('div');
        const todoPriority = document.createElement('span');
        todoPriorityDiv.classList.add('todo-priority-div');

        todoTitle.innerText = todo.title;
        todoDescription.innerText = todo.description;
        todoDuedate.innerText = `Duedate: ${todo.duedate}`;
        todoPriority.innerText = `Priority: ${todo.priority}`;
        
        todoTitleDiv.appendChild(todoTitle);
        todoDescriptionDiv.appendChild(todoDescription);
        todoDuedateDiv.appendChild(todoDuedate);
        todoPriorityDiv.appendChild(todoPriority);

        todoDiv.appendChild(todoTitleDiv);
        todoDiv.appendChild(todoDescriptionDiv);
        todoDiv.appendChild(todoDuedateDiv);
        todoDiv.appendChild(todoPriorityDiv);

        todosWrapper.appendChild(todoDiv);
    });
}

export default renderTodos;
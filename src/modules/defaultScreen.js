function renderDefaultScreen() {
    const todosScreen = document.querySelector('#todos-wrapper');
    const createTodoButton = document.querySelector('#create-todo');
    
    createTodoButton.disabled = true;

    todosScreen.innerHTML = "";

    const text = document.createElement('h3');
    text.innerText = "Select or create a project to show it's To-Do's!";
    text.id = "default-screen-text";

    todosScreen.appendChild(text);
}

export default renderDefaultScreen;
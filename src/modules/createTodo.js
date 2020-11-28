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

function toggleModal() {
    const modal = document.querySelector("#create-todo-wrapper");
    const modalBackground = document.querySelector("#modal-background");

    if (modal.style.display == "") {
        modal.style.display = "flex";
        modalBackground.style.display = "block";
    } else {
        modal.style.display = "";
        modalBackground.style.display = "";
    }
}

function setupTodoModal() {
    const createTodoButton = document.querySelector("#create-todo");
    const closeModalButton = document.querySelector("#close-modal");

    createTodoButton.addEventListener('click', () => {
        toggleModal();
    });

    closeModalButton.addEventListener('click', () => {
        toggleModal();
    });
}

export { createTodo, setupTodoModal };
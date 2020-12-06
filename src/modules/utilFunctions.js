function returnActiveProject(projectList) {
    const project = projectList.find(element => {
        return element.active === true;
    })

    return project;
}

function returnTodoList(projectList) {
    const project = returnActiveProject(projectList);
    return project.todoList;
}

function returnProjectList(projectObjectList) {
    const projectList = projectObjectList.map(element => {
        return element.name;
    })

    return projectList;
}

function toggleModal(modal) {
    const modalBackground = document.querySelector("#modal-background");
    
    modalBackground.classList.toggle('closed');
    modal.classList.toggle('closed');
}

function setupModalCloseButtons() {
    const closeButtons = document.querySelectorAll(".close-button-modal");

    closeButtons.forEach(button => {
        button.addEventListener('click', e => {
            toggleModal(e.target.parentNode);
        })
    })
}

function setupTodoCheckbox(todoCheckbox, todo, projectList) {
    todoCheckbox.addEventListener('change', e => {
        todo.finished = !todo.finished;
        e.target.parentNode.classList.toggle("finished-todo");
        sessionStorage.setItem("projectList", JSON.stringify(projectList));
    });

    todoCheckbox.addEventListener('click', e => e.stopPropagation());
}

export { returnTodoList, returnProjectList, returnActiveProject, toggleModal, setupModalCloseButtons, setupTodoCheckbox };
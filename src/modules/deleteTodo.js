import renderTodos from "./renderTodos";

function deleteTodo(deleteButton, todoList, projectList, index) {
    deleteButton.addEventListener('click', e => {
        e.stopPropagation();
        todoList.splice(index, 1);
        sessionStorage.setItem("projectList", JSON.stringify(projectList));
        renderTodos(projectList);
    });
}

function deleteFinishedTodos(deleteButton, todoList, projectList) {
    deleteButton.addEventListener('click', () => {
        for(let i = 0; i < todoList.length; i++) {
            if(todoList[i].finished) {
                todoList.splice(i, 1);
                i--;
            }
        }

        sessionStorage.setItem("projectList", JSON.stringify(projectList));
        renderTodos(projectList);
    });
}

export { deleteTodo, deleteFinishedTodos };
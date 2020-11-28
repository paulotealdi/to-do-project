function renderProjects(projectList) {
    const projectDiv = document.querySelector("#projects");
    projectDiv.innerHTML = "";

    projectList.forEach((project, index) => {
        const newDiv = document.createElement('div');
        const deleteProject = document.createElement('span');

        deleteProject.innerText = "X";
        deleteProject.classList.add('delete-project-button');
        deleteProject.classList.add('close-button');
        deleteProject.id = index;

        
        newDiv.classList.add('project-div');
        newDiv.innerText = project;
        
        newDiv.appendChild(deleteProject);
        projectDiv.appendChild(newDiv);
    });
    setupDeleteProjectEvent(projectList);
}

function setupDeleteProjectEvent(projectList) {
    const deleteButtons = [...document.querySelectorAll('.delete-project-button')];
    
    deleteButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const id = e.target.id;
            console.log(id);
            projectList.splice(id, 1);
            renderProjects(projectList);
        });
    });
}

export default renderProjects;
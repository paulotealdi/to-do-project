import { returnProjectList } from './utilFunctions';
import changeActiveProject from './changeActiveProject';
import renderDefaultScreen from './defaultScreen';

function renderProjects(projectObjectList) {
    const projectDiv = document.querySelector("#projects");
    projectDiv.innerHTML = "";

    const projectList = returnProjectList(projectObjectList);

    projectList.forEach((project, index) => {
        const newDiv = document.createElement('div');
        newDiv.id = index;
        const deleteProject = document.createElement('span');

        deleteProject.innerText = "X";
        deleteProject.classList.add('delete-project-button');
        deleteProject.classList.add('close-button');

        deleteProject.addEventListener('click', e => {
            e.stopPropagation();
            if(projectObjectList[index].active === true) {
                projectObjectList[index].active = false;
                renderDefaultScreen();
            }
            projectObjectList.splice(index, 1);
            sessionStorage.setItem("projectList", JSON.stringify(projectObjectList));
            renderProjects(projectObjectList);
        });

        newDiv.classList.add('project-div');

        const projectName = document.createElement('span');
        projectName.innerText = project;
        
        newDiv.appendChild(projectName);
        newDiv.appendChild(deleteProject);
        projectDiv.appendChild(newDiv);
    });
    
    changeActiveProject(projectObjectList);
}

export default renderProjects;
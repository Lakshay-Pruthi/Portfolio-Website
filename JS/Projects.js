let projects = document.getElementById('projects')

let projectData = fetch("JSON/projects.json")
.then((val)=>{
    return val.json()
})
.then((values)=>{
    for(elem in values){
        projects.innerHTML += `<div class="project-card">
                        <a href="${values[elem].hostedLink}" target="_blank">
                        <img class="project-img" src="${values[elem].imgLink}" alt="">
                        <div>
                            <h1>${values[elem].title}</h1>
                            <p>${values[elem].description}
                            </p>
                        </div>
                        </a>
                        <a class='projectGithubLink' href="${values[elem].githubLink}" target="blank">
                        <ion-icon name="logo-github"></ion-icon>
                         </a>
                    </div>`
    }
})
let web2Projects = document.getElementById("web2Projects");

let projectData2 = fetch("JSON/web2Projects.json")
  .then((val) => {
    return val.json();
  })
  .then((values) => {
    for (elem in values) {
      web2Projects.innerHTML += `<div class="mern-project-card">
                        <div>
                        <img src="${values[elem].imgLink}" alt="">
                        </div>
                        <div class='MERNPara'>
                            <h1>${values[elem].title}</h1>
                            <div  >
                            <p>${values[elem].description}</p>
                            <div class="MERNliveGit">
                        <a class='projectGithubLink' href="${values[elem].hostedLink}" target="_blank">
                         <ion-icon name="eye"></ion-icon>
                         </a>
                        <a class='projectGithubLink' href="${values[elem].githubLink}" target="_blank">
                        <ion-icon name="logo-github"></ion-icon>
                         </a>
                         </div>
                            
                         </div>
                        </div>
                        
                         
                    </div>`;
    }
  });

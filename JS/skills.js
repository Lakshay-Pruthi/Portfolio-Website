let skills = document.getElementById('skills')
let skillsData = fetch("JSON/skills.json")
.then((val)=>{
    return val.json()
})
.then((values)=>{
    for(elem in values){
        skills.innerHTML += `<li class="skillIcons"><img src="${values[elem].imgLink}" alt="">${values[elem].title}</li>`
    }
})
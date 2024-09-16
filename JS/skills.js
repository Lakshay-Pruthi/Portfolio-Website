let skills = document.getElementById("skills");
let skillsData = fetch("JSON/skills.json")
  .then((val) => {
    return val.json();
  })
  .then((data) => {
    let sData = data.Skills;
    console.log(sData);

    for (s in sData) {
      console.log(sData[s].imgLink);

      skills.innerHTML += `<li class="skillIcons"><img src=${sData[s].imgLink} alt="">${sData[s].title}</li>`;
    }
  });

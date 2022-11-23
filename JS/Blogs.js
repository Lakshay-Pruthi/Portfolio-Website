let blogs = document.getElementById('blogs')

let blogsData = fetch("JSON/blogs.json")
.then((val)=>{
    return val.json()
}).then((values)=>{
    for(elem in values){
        blogs.innerHTML += `<div class="blog-Card">
                            <a href="${values[elem].hostedLink}">
                            <img src="${values[elem].imgLink}" alt="">
                            </a>
                            <h1>${values[elem].title}</h1>       
                            </div>`
    }
})
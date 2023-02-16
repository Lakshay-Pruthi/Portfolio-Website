let testimonial = document.getElementById('testimonials')
let testimonialData = fetch("JSON/testimonial.json")
    .then((val) => {
        return val.json()
    })
    .then((values) => {
        for (elem in values) {
            testimonial.innerHTML += `<div class="testimonial">
            <img src="${values[elem].imgLink}" alt="">
            <p class="name">${values[elem].name}</p>
            <p class="post">${values[elem].post}</p>
            <p class="testimonial-details">"${values[elem].testimonialDetails}"</p>
        </div>`
        }
    })
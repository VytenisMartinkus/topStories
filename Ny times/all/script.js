const url = "https://api.nytimes.com/svc/topstories/v2/home.json?api-key=d3KwW8I9KQYnxL3g95M0csqgG58mvl3g"

const app = document.getElementById('app')

fetch(url)
.then(Response => Response.json())
.then(data => {
    

    const title = document.getElementById('title');

    title.innerHTML = `<img src="${data.results[1].multimedia[0].url}"><br><br>
    ${data.results[1].title}</a><br><br>
    ${data.results[1].abstract}<br><br><br>
    <a href="${data.results[1].url}">Read More...</a>`;
    
    const titlee = document.getElementById('title2')

    titlee.innerHTML = `<img src="${data.results[2].multimedia[0].url}"><br><br>
    ${data.results[2].title}<br><br>
    ${data.results[2].abstract}<br><br>
    <a href="${data.results[2].url}">Read More...</a>`;

    const titleee = document.getElementById('title3')

    titleee.innerHTML = `<img src="${data.results[3].multimedia[0].url}"><br><br>
    ${data.results[3].title}</a><br><br>
    ${data.results[3].abstract}<br><br>
    <a href="${data.results[3].url}">Read More...</a>`;

    const titlas = document.getElementById('title4')

    titlas.innerHTML = `<img src="${data.results[4].multimedia[0].url}"><br><br>
    ${data.results[4].title}</a><br><br>
    ${data.results[4].abstract}<br><br>
    <a href="${data.results[4].url}">Read More...</a>`;

    const sectionas = document.getElementById("section1")
    sectionas.innerText = `${data.results[1].section}`

    const antrasSectionass = document.getElementById("section2")
    antrasSectionass.innerText = `${data.results[2].section}`

    const treciasSectionass = document.getElementById("section3")
    treciasSectionass.innerText = `${data.results[3].section}`

    const ketvirtasSectionass = document.getElementById("section4")
    ketvirtasSectionass.innerText = `${data.results[4].section}`

    console.log(data)
    
})



const url = "https://api.nytimes.com/svc/topstories/v2/opinion.json?api-key=d3KwW8I9KQYnxL3g95M0csqgG58mvl3g"

const app = document.getElementById('app')

fetch(url)
.then(Response => Response.json())
.then(data => {console.log(data)

    const originalArray = data.results;

    const filteredArray = originalArray.filter(function(item) {

        return (item.section === "opinion");

    });            
        
            const title = document.getElementById('title');
        
            title.innerHTML = `<img src="${filteredArray[0].multimedia[0].url}"><br><br>
            ${filteredArray[0].title}</a><br><br>
            ${filteredArray[0].abstract}<br><br><br>
            <a href="${filteredArray[0].url}">Read More...</a>`;
            
            const titlee = document.getElementById('title2')
        
            titlee.innerHTML = `<img src="${filteredArray[1].multimedia[0].url}"><br><br>
            ${filteredArray[1].title}<br><br>
            ${filteredArray[1].abstract}<br><br>
            <a href="${filteredArray[1].url}">Read More...</a>`;
        
            const titleee = document.getElementById('title3')
        
            titleee.innerHTML = `<img src="${filteredArray[2].multimedia[0].url}"><br><br>
            ${filteredArray[2].title}</a><br><br>
            ${filteredArray[2].abstract}<br><br>
            <a href="${filteredArray[2].url}">Read More...</a>`;
        
            const titlas = document.getElementById('title4')
        
            titlas.innerHTML = `<img src="${filteredArray[3].multimedia[0].url}"><br><br>
            ${filteredArray[3].title}</a><br><br>
            ${filteredArray[3].abstract}<br><br>
            <a href="${filteredArray[3].url}">Read More...</a>`;
        
            const sectionas = document.getElementById("section1")
            sectionas.innerText = `${filteredArray[0].section}`
        
            const antrasSectionass = document.getElementById("section2")
            antrasSectionass.innerText = `${filteredArray[1].section}`
        
            const treciasSectionass = document.getElementById("section3")
            treciasSectionass.innerText = `${filteredArray[2].section}`
        
            const ketvirtasSectionass = document.getElementById("section4")
            ketvirtasSectionass.innerText = `${filteredArray[3].section}`
            
        
        
      });



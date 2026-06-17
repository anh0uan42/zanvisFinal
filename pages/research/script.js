import { researches } from '../data/researches.js'

const cardContainer = document.getElementById('card-container')

function renderList(){
    cardContainer.innerHTML = ""
    researches.forEach(article => {
        let card = document.createElement('div')
        card.classList.add('card')
        card.innerHTML = `
            <h3>${article.title}</h3>
            <div class="article-intro">
                <p>By: ${article.researcher}</p>
                <p>Field: ${article.field}</p>
            </div>
           <p>${article.description}...</p>
           <a href="research-article.html?id=${article.id}" class="read-more">Read More</a>
        `
        cardContainer.appendChild(card)
    })
}

renderList()
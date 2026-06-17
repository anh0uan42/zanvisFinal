import { highSchoolNews } from "../data/news.js";

export const cardContainer = document.getElementById('card-container')

function renderList(){
    cardContainer.innerHTML = ""
    highSchoolNews.forEach(article => {
        let card = document.createElement('div')
        card.classList.add('card')
        card.innerHTML = `
            <h3>${article.title}</h3>
            <div class="article-intro">
                <p>Author: ${article.author}</p>
                <p>Published: ${article.publishedDate}</p>
            </div>
           <p>${article.actualNews.slice(0, 100)}...</p>
           <a href="article.html?id=${article.id}" class="read-more">Read More</a>
        `
        cardContainer.appendChild(card)
    })
}

renderList()
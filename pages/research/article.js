import { researches } from "../data/researches.js"

const articleTitle = document.getElementById('article-title')
const author = document.getElementById('research-author')
const researchFeild = document.getElementById('research-feild')
const articleContent = document.getElementById('article-content')

const urlParams = new URLSearchParams(window.location.search)
const articleId = parseInt(urlParams.get('id'))

const article = researches.find(a => a.id == articleId)

if (article) {
    articleTitle.textContent = article.title
    author.textContent = article.researcher
    researchFeild.textContent = article.field
    articleContent.textContent = article.content
} else {
    articleTitle.textContent = "Article Not Found"
}

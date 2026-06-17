import { highSchoolNews } from "../data/news.js"

const articleTitle = document.getElementById('article-title')
const articleAuthor = document.getElementById('article-author')
const articleDate = document.getElementById('article-date')
const articleContent = document.getElementById('article-content')

const urlParams = new URLSearchParams(window.location.search)
const articleId = parseInt(urlParams.get('id'))

const article = highSchoolNews.find(a => a.id == articleId)

if (article) {
    articleTitle.textContent = article.title
    articleAuthor.textContent = article.author
    articleDate.textContent = article.publishedDate
    articleContent.textContent = article.actualNews
} else {
    articleTitle.textContent = "Article Not Found"
}

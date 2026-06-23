import { english } from "../../data/courses.js"

const subjectTitle = document.getElementById('subject-title')
const subjectDesc = document.getElementById('subject-desc')
const subjectDifficulty = document.getElementById('difficulty-level')
const topicList = document.getElementById('key-topics')
const highlight = document.getElementById('highlight')

const urlParams = new URLSearchParams(window.location.search)
const subjectId = parseInt(urlParams.get('id'))

const enroll = document.getElementById('enroll-course-btn')

const user = JSON.parse(localStorage.getItem("user"))

const subject = english.find(a => a.id == subjectId)

const isLoggedIn = localStorage.getItem('isLoggedIn')

if (!isLoggedIn) {
    enroll.addEventListener('click', () => {
        alert('Please sign in to enroll!')
    })
}


if (subject) {
    subjectTitle.textContent = subject.name
    subjectDesc.textContent = subject.description
    subjectDifficulty.textContent = subject.difficultyLevel
    subject.keyTopics.forEach(topic => {
        const li = document.createElement('li')
        li.textContent = topic
        topicList.appendChild(li)
    })
    highlight.classList.add(subject.difficultyLevel)
} else {
    subjectTitle.textContent = "Article Not Found"
}

enroll.addEventListener('click', () => {

    const duplicate = user.courses.some(course => course.id === subject.id)

    if (!duplicate) {
        user.courses.push(subject)
        localStorage.setItem('user', JSON.stringify(user))
    } else {
        alert('You already enrolled for this course')
    }
    
    window.location.href = "../../dash/dashboard.html"
})
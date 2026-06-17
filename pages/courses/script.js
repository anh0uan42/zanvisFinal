import { math, science, socialStudies, english } from "../data/courses.js";

const mathDiv = document.getElementById('math-div')
const socialStudiesDiv = document.getElementById('social-study-div')
const englishDiv = document.getElementById('english-div')
const scienceDiv = document.getElementById('science-div')

const render = () => {
    mathDiv.innerHTML = ""
    scienceDiv.innerHTML = ""
    englishDiv.innerHTML = ""
    socialStudies.innerHTML = ""

    math.forEach(subject => {
        let card = document.createElement('div')
        card.classList.add('card')
        card.classList.add('course-card')
        card.innerHTML = `
            <a href="math/math.html?id=${subject.id}">
            <h3>${subject.name}</h3>
            <p>${subject.description}</p>
            <div class="${subject.difficultyLevel} diff-level"><p>Difficulty Level: ${subject.difficultyLevel}</p></div>
            </a>
        `

        mathDiv.appendChild(card)
    })

    science.forEach(subject => {
        let card = document.createElement('div')
        card.classList.add('card')
        card.classList.add('course-card')
        card.innerHTML = `
            <a href="science/science.html?id=${subject.id}">
            <h3>${subject.name}</h3>
            <p>${subject.description}</p>
            <div class="${subject.difficultyLevel} diff-level"><p>Difficulty Level: ${subject.difficultyLevel}</p></div>
            </a>
        `

        scienceDiv.appendChild(card)
    })

    english.forEach(subject => {
        let card = document.createElement('div')
        card.classList.add('card')
        card.classList.add('course-card')
        card.innerHTML = `
            <a href="english/english.html?id=${subject.id}">
            <h3>${subject.name}</h3>
            <p>${subject.description}</p>
            <div class="${subject.difficultyLevel} diff-level"><p>Difficulty Level: ${subject.difficultyLevel}</p></div>
            </a>
        `

        englishDiv.appendChild(card)
    })

    socialStudies.forEach(subject => {
        let card = document.createElement('div')
        card.classList.add('card')
        card.classList.add('course-card')
        card.innerHTML = `
            <a href="social/social.html?id=${subject.id}">
            <h3>${subject.name}</h3>
            <p>${subject.description}</p>
            <div class="${subject.difficultyLevel} diff-level"><p>Difficulty Level: ${subject.difficultyLevel}</p></div>
            </a>
        `

        socialStudiesDiv.appendChild(card)
    })
}

render()
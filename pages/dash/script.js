const cardContainer = document.getElementById('courses-container')

const user = JSON.parse(localStorage.getItem('user'))

const userFullname = document.getElementById('user-full-name')

const coursesList = user.courses


userFullname.innerHTML = user.fullname

const renderCourses = () => {

    cardContainer.innerHTML = ''

    user.courses.forEach(course => {
        let card = document.createElement('div')
        card.classList.add('card')
        card.classList.add('course-card')
        card.innerHTML = `
            <a href="course-dash.html?id=${course.id}">
            <h3>${course.name}</h3>
            <p>${course.description}</p>
            <div class="${course.difficultyLevel} diff-level"><p>Difficulty Level: ${course.difficultyLevel}</p></div>
            </a>
        `
        cardContainer.appendChild(card)
    })
}

renderCourses()
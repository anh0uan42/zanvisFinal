const subjectTitle = document.getElementById('subject-title')
const subjectDesc = document.getElementById('subject-desc')
const subjectDifficulty = document.getElementById('difficulty-level')
const topicList = document.getElementById('key-topics')

const urlParams = new URLSearchParams(window.location.search)
const subjectId = parseInt(urlParams.get('id'))

console.log(subjectId)

const enroll = document.getElementById('enroll-course-btn')

const user = JSON.parse(localStorage.getItem("user"))

const dropBtn = document.getElementById('drop-btn')

let userCourses = user.courses

const subject = userCourses.find(a => a.id == subjectId)


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
    subjectTitle.textContent = "Course Not Found"
}

dropBtn.addEventListener('click', () => {
    userCourses = userCourses.filter(course => course.id !== subjectId)

    user.courses = userCourses

    localStorage.setItem('user', JSON.stringify(user))

    window.location.href = 'dashboard.html'
})
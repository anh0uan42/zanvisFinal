import { users } from "./pages/data/users.js"

const loginBtn = document.getElementById('signin')
const signupBtn = document.getElementById('signup')

const fullnameDisplay = document.getElementById('signed-in-username')

const enrollmentDiv = document.getElementById('enrollment')
const signedInDiv = document.getElementById('signed-in')

const signInForm = document.getElementById('sign-in')
const signUpForm = document.getElementById('sign-up')

const mobileMenuBtn = document.getElementById('mobile-menu')
const mobileMenu = document.getElementById('hidden-menu')

const signUpUsername = document.getElementById('sign-up-username')
const email = document.getElementById('email')
const signUpFullname = document.getElementById('fullname')
const signUpPwd = document.getElementById('sign-up-password')
const confirmPwd = document.getElementById('confirm-password')

const signInUsername = document.getElementById('username')
const signInPwd = document.getElementById('password')

const signOut = document.getElementById('sign-out')

let logIn = {
    loggedIn: localStorage.getItem('isLoggedIn'),
    user: JSON.parse(localStorage.getItem('user'))
}

if (logIn.loggedIn === "true") {
    fullnameDisplay.textContent = logIn.user.fullname
    enrollmentDiv.style.display = 'none'
    signedInDiv.style.display = ''
} else {
    enrollmentDiv.style.display = ''
    signedInDiv.style.display = 'none'
}


loginBtn.addEventListener('click', () => {
    signInForm.style.display = 'block'
    signUpForm.style.display = ''
})

signupBtn.addEventListener('click', () => {
    signUpForm.style.display = 'block'
    signInForm.style.display = ''
})

document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        signUpForm.style.display = ''
        signInForm.style.display = ''
    }
})

document.addEventListener('click', (event) => {
    if (!event.target.closest('#sign-in') && !event.target.closest("#signin") && !event.target.closest('#sign-up') && !event.target.closest("#signup")) {
        signUpForm.style.display = ''
        signInForm.style.display = ''
    }
})


mobileMenuBtn.addEventListener('click', () => {
    if (mobileMenu.style.display == 'none') {
        mobileMenu.style.display = 'block'
    } else {
        mobileMenu.style.display = 'none'
    }
})

signOut.addEventListener('click', () => {
    localStorage.removeItem('isLoggedIn')
    localStorage.removeItem('user')

    enrollmentDiv.style.display = ''
    signedInDiv.style.display = 'none'

    window.location.href = '/'
})

signInForm.addEventListener('submit', (event) => {
    event.preventDefault()

    const formData  = new FormData(signInForm)
    const username = formData.get('username')
    const password = formData.get('password')
    
    if (!username || !password) {
        alert('Username and Password are required!')
    }

    const signedInUser = users.find(user => user.username === username)

    if (signedInUser.password !== password) {
        alert('Incorrect Password!')
    }

    fullnameDisplay.textContent = signedInUser.fullname

    localStorage.setItem('isLoggedIn', 'true')
    localStorage.setItem('user', JSON.stringify(signedInUser))

    signUpForm.style.display = ''
    signInForm.style.display = ''
    fullnameDisplay.textContent = signedInUser.fullname

    enrollmentDiv.style.display = 'none'
    signedInDiv.style.display = ''

})

signUpForm.addEventListener('submit', (event) => {
    event.preventDefault()

    const formData = new FormData(signUpForm)
    const username = formData.get("sign-up-username")
    const password = formData.get("sign-up-password")
    const confirmPassword = formData.get("confirm-password")
    const fullname = formData.get("fullname")
    const email = formData.get("email")

    if (!username || !password || !confirmPassword || !fullname || !email) {
        alert('All Field Are Required!')
    }

    if (password !== confirmPassword) {
        alert('Password and confirm password are not match')
    }

    const newUser = {
        id: generateId(users),
        username: username,
        password: password,
        fullname: fullname,
        email: email,
        courses: []
    }

    users.push(newUser)

    fullnameDisplay.textContent = newUser.fullname

    localStorage.setItem('isLoggedIn', 'true')
    localStorage.setItem('user', JSON.stringify(newUser))

    signUpForm.style.display = ''
    signInForm.style.display = ''

    enrollmentDiv.style.display = 'none'
    signedInDiv.style.display = ''
})

const generateId = (array) => {
    const digit = array.length
    const newId = 100+1+digit
    return newId
}
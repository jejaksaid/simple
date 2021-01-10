// LOGIN SHOW AND HIDDEN
const signUp = document.getElementById('sign-up'),
    signIn = document.getElementById('sign-in'),
    loginIn = document.getElementById('login-in'),
    loginUp = document.getElementById('login-up')

signUp.addEventListener('click', ()=>{
    // REMOVE CLASSES FIRST IF THEY EXIST
    loginIn.classList.remove('block')
    loginUp.classList.remove('none')

    // ADD CLASSES
    loginIn.classList.add('none')
    loginUp.classList.add('block')
})

signIn.addEventListener('click', ()=>{
    // REMOVE CLASSES IF THEY EXIST
    loginIn.classList.remove('none')
    loginUp.classList.remove('block')

    // ADD CLASSES
    loginIn.classList.add('block')
    loginUp.classList.add('none')
})
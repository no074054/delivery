const cartButton = document.querySelector("#cart-button");
const modal = document.querySelector(".modal");
const close = document.querySelector(".close");

cartButton.addEventListener('click', toggleModal);

close.addEventListener('click', toggleModal);

modal.addEventListener('click', function (event) {
    if(event.target.classList.contains('is-open')) {
        toggleModal();
    }
});

function toggleModal() {
    modal.classList.toggle("is-open");
    if(modal.classList.contains("is-open")) {
        disableScroll();
    } else {
        enableScroll();
    }
}

new WOW().init();

const buttonAuth = document.querySelector(".button-auth");
const modalAuth = document.querySelector(".modal-auth");
const closeAuth = document.querySelector(".close-auth");

const logInForm = document.querySelector("#logInForm");
const loginInput = document.querySelector('#login');
const passwordInput = document.querySelector('#password');

const userName = document.querySelector('.user-name');
const buttonOut = document.querySelector('.button-out');

let login = localStorage.getItem('gloDelivery');

function toggleModalAuth() {
    modalAuth.classList.toggle("modal-auth-display");

    loginInput.style.borderColor = '';
    passwordInput.style.borderColor = '';

    if(modalAuth.classList.contains("modal-auth-display")) {
        disableScroll();
    } else {
        enableScroll();
    }
}

function authorized() {
    console.log('Авторизован');

    function logOut() {
        login = null;
        localStorage.removeItem('gloDelivery');

        buttonAuth.style.display = '';
        userName.style.display = '';
        buttonOut.style.display = '';

        buttonOut.removeEventListener('click', logOut);

        checkAuth();
    }

    userName.textContent = login;

    buttonAuth.style.display = 'none';
    userName.style.display = 'inline';
    buttonOut.style.display = 'block';

    buttonOut.addEventListener('click', logOut);
}

function notAuthorized() {
    console.log('Не авторизован');

    function logIn(event) {
        event.preventDefault();
        login = loginInput.value;

        if(login.trim() && passwordInput.value.trim()) { // if(login != '' && passwordInput.value != '') {
            localStorage.setItem('gloDelivery', login);

            toggleModalAuth();
    
            buttonAuth.removeEventListener('click', toggleModalAuth);
            closeAuth.removeEventListener('click', toggleModalAuth);
            logInForm.removeEventListener('submit', logIn);
    
            logInForm.reset();
    
            checkAuth();
        } else {
            loginInput.style.borderColor = '#ff0000';
            passwordInput.style.borderColor = '#ff0000';
            alert('Введите логин и пароль');
        }
    }

    buttonAuth.addEventListener('click', toggleModalAuth);
    closeAuth.addEventListener('click', toggleModalAuth);

    logInForm.addEventListener('submit', logIn);

    modalAuth.addEventListener('click', function (event) {
        if(event.target.classList.contains('modal-auth-display')) {
            toggleModalAuth();
        }
    });
}

function checkAuth() {
    if(login) {
        authorized();
    } else {
        notAuthorized();
    }
}

checkAuth();
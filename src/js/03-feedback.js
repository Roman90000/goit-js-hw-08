import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const inputEmail = document.querySelector('.feedback-form input');
const textareaEl = document.querySelector('.feedback-form textarea');

form.addEventListener("submit", onSubmitForm);
inputEmail.addEventListener("input", throttle(onInputText, 500));
textareaEl.addEventListener("input", throttle(ontextareaText, 500));


textareaInputSaved();

function onInputText(e) {
    const email = e.target.value;
    localStorage.setItem("email", email);
}

function ontextareaText(e) {
const textarea = e.target.value;
    localStorage.setItem("textarea", textarea);
}

function onSubmitForm(e) {
    e.preventDefault();
    e.currentTarget.reset();

    const email = localStorage.getItem("email");
    const textareaEl = localStorage.getItem("textarea");
}

function textareaInputSaved() {
    const savedEmail = localStorage.getItem("email");
    if (savedEmail) {
        inputEmail.value = savedEmail;
    }

    const savedtextarea = localStorage.getItem("textarea");
    if (savedtextarea) {
        textareaEl.value = savedtextarea;
    }
};

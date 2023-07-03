import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');

formEl.addEventListener("submit", onSubmitForm);
formEl.addEventListener("input", throttle(handlerInput, 500));
window.addEventListener("load", load);

let feedbackFormState = {};
const LOCALSTORAGE_KEY = "feedback-form-state";

function load() {
    try {
        const data = localStorage.getItem(LOCALSTORAGE_KEY);
        if (!data) {
            return
        };
        const feedbackFormState = JSON.parse(data);
        Object.entries(feedbackFormState).forEach(([key, val]) => {
            formEl.elements[key].value = val;
        });
    } catch (error) {
        console.log(error.message);
    };
};

function handlerInput(e) {
    feedbackFormState[e.target.name] = e.target.value.trim();
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(feedbackFormState));
};

function onSubmitForm(e) {
    e.preventDefault();
    e.currentTarget.reset();
    console.log(feedbackFormState);
    feedbackFormState = {};
    localStorage.removeItem(LOCALSTORAGE_KEY);
};
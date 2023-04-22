const form = document.getElementById('contact_form');
const name = document.getElementById('full-name');
const email = document.getElementById('email');
const text = document.getElementById('textarea');

form.addEventListener("submit", function (event) {
    event.preventDefault();

    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}
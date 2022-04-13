const form = document.getElementById('form');
form.addEventListener('submit', getFormValue);
function getFormValue(event) {
    event.preventDefault();  
    const text = form.querySelector('[text="name"]'),
    email = form.querySelector('[name="email"]'),
    password = form.querySelector('[name="password"]')
}
const data = {
    text: text.value,
    email: email.value,
    password: passsword.value
    
};
console.log(data);
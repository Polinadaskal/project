const form = document.getElementById('form');
form.addEventListener('submit', getFormValue);
function getFormValue(event) {
    event.preventDefault();  
}
const name = form.querySelector('[name="name"]'), //получаем поле name
    age = form.querySelector('[name="age"]') //получаем поле age
    const data = {
        name: name.value,
        age: age.value
    }
    console.log(data);

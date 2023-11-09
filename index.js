var form = document.querySelector('form');
var container = document.querySelector('.container');
var containers = document.querySelector('.container-3');
form.addEventListener('submit', runForm);
function runForm(e) {
    e.preventDefault();
    var input = document.querySelector('.email input').value;
    var gmailAnswer = document.createTextNode(input);
    var emailInput = document.getElementById('emails');
    emailInput.append(gmailAnswer);
    container.classList.add('hide');
    containers.classList.remove('hide');
}

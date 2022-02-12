// FORM
let formSuccess = document.querySelector('#form__success');
const formReset = document.querySelector('#form__reset');

function modalFormSucess() {
    formSuccess.classList.remove(
        'opacity-0',
        'pointer-events-none'
    )
    formSuccess.classList.add(
        'opacity-1',
        'pointer-events-all'
    )
}

formReset.addEventListener('click', function () {
    formSuccess.classList.remove(
        'opacity-1',
        'pointer-events-all'
    )
    formSuccess.classList.add(
        'opacity-0',
        'pointer-events-none'
    )
})

function sendmail() {
    const form = document.getElementById('form');
    const button = document.querySelector('button[type="submit"]');

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        button.innerHTML = 'Enviando ...';

        var data = new FormData(form);
        var ajax = new XMLHttpRequest();
        ajax.open('POST', './assets/php/submit.php', true);
        ajax.onload = function () {

            modalFormSucess()

            // button.setAttribute('disabled', false);
            button.innerHTML = 'Enviar';
            form.reset();
        }
        ajax.send(data);
    });
}
sendmail()
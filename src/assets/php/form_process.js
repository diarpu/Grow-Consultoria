import $ from "jquery";

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

$(function () {

  // Get the form.
  var formContact = $('#form');
  const textButton = document.querySelector('button[type="submit"]').innerHTML;

  $(formContact).submit(function (e) {
    e.preventDefault();

    // Serialize the form data.
    var formData = $(formContact).serialize();
    document.querySelector('button[type="submit"]').innerHTML = 'Enviando ...';
    // document.querySelector('button[type="submit"]').disabled = true;

    // Submit the form using AJAX.
    $.ajax({
        type: 'POST',
        url: $(formContact).attr('action'),
        data: formData
      })
      .done(function (response) {

        modalFormSucess()

        $('#name').val('');
        $('#phone').val('');
        $('#city').val('');
        $('#message').val('');
        $('#subject').val('');

        // document.querySelector('button[type="submit"]').innerHTML = "Enviado Correctamente"
        // setTimeout( function() {document.querySelector('button[type="submit"]').innerHTML = textButton; }, 4000 );
        // document.querySelector('button[type="submit"]').disabled = true;
        document.querySelector('button[type="submit"]').innerHTML = textButton;
      })
      .fail(function (data) {
        // Set the message text.
        if (data.responseText !== '') {
          // $(formMessages).text(data.responseText);
        } else {
          // $(formMessages).text('No se obtiene ningún dato');
          // document.getElementById("submitPhone").toggleAttribute('disabled', false);
          document.querySelector('button[type="submit"]').disabled = true;
          document.querySelector('button[type="submit"]').innerHTML = textButton;
        }
      });
  });

});


// SEND FORM WITH XHR
// const form = document.getElementById('form');
// const button = document.querySelector('button[type="submit"]');

// function sendmail(){
//   form.addEventListener('submit', function(e){
//     e.preventDefault();
//     button.innerHTML = 'Enviando ...';
//     button.setAttribute('disabled', 'disabled');
//     var data = new FormData(form);

//     var ajax = new XMLHttpRequest();
//     ajax.open('POST', './assets/php/envio.php', true);
//     ajax.onload = function(){

//       var formSuccess = document.querySelector('#form__success');
//       formSuccess.classList.add(
//         'opacity-1',
//         'pointer-events-all'
//       )

//       button.setAttribute('disabled', false);
//       button.innerHTML = 'Enviar';
//     }
//     ajax.send(data);
//   });
// }

// form.addEventListener('submit', sendmail);

// const formReset = document.querySelector('#form__reset');
// if(formReset.classList.contains('opacity-0')){
//   formReset.addEventListener('click', function(){
//     formSuccess.classList.remove(
//       'opacity-1',
//       'pointer-events-all'
//     )
//   })
// }
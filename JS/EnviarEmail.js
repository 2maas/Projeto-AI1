/*document.getElementById('form') .addEventListener('submit', function(event) {
   event.preventDefault();

   const serviceID = 'default_service';
   const templateID = 'template_ti1852t';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
        alert('Sent!');
    }, (err) => {
        alert(JSON.stringify(err));
    });
});*/


function GuardarEmailLocalStorage(){

    let Emails = JSON.parse(localStorage.getItem("EmailsEnviados")) || [];


    let NovoEmail = {
        email: document.getElementById("email"),
        assunto: document.getElementById("assunto"),
        mensagem: document.getElementById("mensagem"),
    };
    
    Emails.push(NovoEmail);
    localStorage.setItem("EmailsEnviados", JSON.stringify(Emails));
}

// ver isto nao sei se esta a guardar

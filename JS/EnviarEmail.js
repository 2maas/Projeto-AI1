document.getElementById('form') .addEventListener('submit', function(event) {
   event.preventDefault();

   const serviceID = 'default_service';
   const templateID = 'template_ti1852t';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
        alert('Sent!');
    }, (err) => {
        alert(JSON.stringify(err));
    });

    GuardarEmailLocalStorage();

});


function GuardarEmailLocalStorage(){

    let Emails = JSON.parse(localStorage.getItem("EmailsEnviados")) || [];

    // Data e hora
    const now = new Date();
    const hour = now.toLocaleString('pt-PT', { hour: '2-digit', minute: '2-digit'});
    const date = now.toLocaleString('pt-PT', { year: 'numeric', month: 'numeric', day: 'numeric' });
    const formattedDateTime = `${hour} - ${date}`;

    let NovoEmail = {
        nome: document.getElementById("nome").value,
        email: document.getElementById("email").value,
        assunto: document.getElementById("assunto").value,
        horario: formattedDateTime,
        mensagem: document.getElementById("mensagem").value,
    };
    
    Emails.push(NovoEmail);
    localStorage.setItem("EmailsEnviados", JSON.stringify(Emails));
}

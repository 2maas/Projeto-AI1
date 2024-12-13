document.getElementById('form').addEventListener('submit', function (event) {
    event.preventDefault();

    const serviceID = 'default_service';
    const templateID = 'template_ti1852t';

    emailjs.sendForm(serviceID, templateID, this)
        .then(() => {
            alert('Email enviado!');
        }, (err) => {
            alert(JSON.stringify(err));
        });
});
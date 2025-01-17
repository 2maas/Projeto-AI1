const now = new Date();
const hour = now.toLocaleString('pt-PT', { hour: '2-digit', minute: '2-digit'});
const date = now.toLocaleString('pt-PT', { year: 'numeric', month: 'numeric', day: 'numeric' });
const formattedDateTime = `${hour} - ${date}`;


function AppForms() {
    return  React.createElement('form', {id:'form'},
                React.createElement("label", {for:"nome"}, "Nome"),
                React.createElement("input", {type:"text", name:"nome",id:"nome", placeholder:"Nome", required: true}),
                React.createElement("label", {for:"assunto"}, "Assunto"),
                React.createElement("input", {type:"text", name:"assunto", id:"assunto", placeholder:"Assunto", required: true}),
                React.createElement("label", {for:"email"}, "Email"),
                React.createElement("input", {type:"text", name:"email", id:"email", placeholder:"Email", required: true}),
                React.createElement("label", {for:"mensagem"}, "Mensagem"),
                React.createElement("textarea", {type:"text", name:"mensagem", id:"mensagem", placeholder:"Escreva aqui...", required: true}),
                React.createElement("div", {id:"div_button"},
                    React.createElement("input", {type:"submit", id:"button", value:"Enviar"})
                )
    );
}

ReactDOM.render(AppForms(), document.getElementById('card_forms'));

document.getElementById('form') .addEventListener('submit', function(event) {
    event.preventDefault();
 
    const serviceID = 'default_service';
    const templateID = 'template_ti1852t';
 
    emailjs.sendForm(serviceID, templateID, this)
     .then(() => {
         alert('Email enviado!');
         document.getElementById('form').reset();
     }, (err) => {
         alert(JSON.stringify(err));
     });
 
     GuardarEmailLocalStorage();
 
 });
 

function GuardarEmailLocalStorage(){

    let Emails = JSON.parse(localStorage.getItem("EmailsEnviados")) || [];

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



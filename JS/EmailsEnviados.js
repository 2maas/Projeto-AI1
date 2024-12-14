function clicado(event){
    const card = event.target.closest(".card-emails");
    const linha1 = card.querySelector(".linha.linha1");
    const linha2 = card.querySelector(".linha.linha2");
    const texto = card.querySelector(".TextArea");

    if (!texto.classList.contains('visivel')) {
        linha1.style.transform = "rotate(0deg)";
        texto.classList.add('visivel');


    } else {
        linha1.style.transform = "rotate(90deg)";
        texto.classList.remove('visivel');
    }
}

function Emails(props){
    return  React.createElement('div', {className:'card-emails'},
                React.createElement('div',{ className: 'card-emails-sec'},
                    React.createElement('div', null,
                        React.createElement('p', {className:'assunto'}, props.assunto),
                        React.createElement('div', {className: 'emails-horario'},
                            React.createElement('label', {className:'email'}, props.email),
                            React.createElement('label', {className:'data-hora'}, props.horario)
                        ),
                    ),
                    React.createElement('div',{ style: {paddingRight: '20px'}},
                        React.createElement('button', {onClick: (e) => clicado(e)},
                            React.createElement('span', {className:'linha linha1'}),
                            React.createElement('span', {className:'linha linha2'})
                        )
                    )
                ),
                React.createElement('div',{ className:'TextArea'},
                    React.createElement('textarea', {disabled: true}, props.mensagem)
                )
            );
}


function App(){
    const emails = JSON.parse(localStorage.getItem("EmailsEnviados") || "[]");

    return React.createElement('div', null, emails.map((email, index) =>
            React.createElement(Emails, {
                key: index, 
                email: email.email,
                nome: email.nome,
                assunto: email.assunto,
                horario: email.horario,
                mensagem: email.mensagem
            })
        )
    );
}


ReactDOM.render(App(), document.getElementById('emails'));
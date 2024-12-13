function clicado(button){
    const card = button.closest(".card-emails");
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
    return  React.createElement('div',{ className: 'card-emails-sec'},
                React.createElement('div', null,
                    React.createElement('p', {id:'email'}, props.email),
                    React.createElement('p', {id:'data-hora'}, "teste")
                ),
                React.createElement('div',{ style: {paddingRight: '20px;'}},
                    React.createElement('button', {onClick: (e) => clicado(e)},
                        React.createElement('span', {className:'linha linha1'}),
                        React.createElement('span', {className:'linha linha2'})
                    )
                )
            ),
            React.createElement('div',{ className:'TextArea'},
                React.createElement('textarea', null, props.mensagem)
            );
}


function App(){
    const emails = JSON.parse(localStorage.getItem("EmailsEnviados") || "[]");

    return React.createElement('div', {className:'card-emails'}, emails.map((email, index) =>
            React.createElement(Emails, {
                key: index, 
                email: email.email,
                mensagem: email.message
            })
        )
    );
}


ReactDOM.render(App(), document.getElementById('emails'));
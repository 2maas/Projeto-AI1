function PCSMONTADOS(props) {
    return  React.createElement('div', {className: "card", onClick: function () {AbrirConfig(props);}},
                React.createElement('div',{ className: 'card-header'},
                    React.createElement('img', { src: props.CAIXA.imagem, className:"ImagemPrincipal" , alt: 'Imagem PC' }),
                ),
                React.createElement('div',{ className: 'card-body'},
                    React.createElement('h3', null , props.NomePC),
                    React.createElement('p', null , props.CPU.nome),
                    React.createElement('p', null , props.MOTHERBOARD.nome),
                    React.createElement('p', null , props.GPU.nome),
                ),
                React.createElement('div',{ className: 'card-footer'},
                    React.createElement('span', { className: 'preco'} , props.preco.toFixed(2).toString())
                )
    );
}

function App() {

    const PCS = JSON.parse(localStorage.getItem("ConfigGuardadas") || "[]");

    return React.createElement('div', {className:"DivMedioMontagens"}, PCS.map((pc, index) =>
            React.createElement(PCSMONTADOS, {
                key: index, 
                NomePC: pc.NomePC,
                CPU: pc.CPU,
                COOLER: pc.COOLER,
                MOTHERBOARD: pc.MOTHERBOARD,
                RAM: pc.RAM,
                ARMAZENAMENTO: pc.ARMAZENAMENTO,
                GPU: pc.GPU,
                CAIXA: pc.CAIXA,
                FONTE: pc.FONTE,
                preco: pc.preco
            })
        )
    );
}

function AbrirConfig(teste){
    const Tipocomponentes = ['CPU', 'COOLER', 'MOTHERBOARD', 'RAM', 'ARMAZENAMENTO', 'GPU', 'CAIXA', 'FONTE'];
    let storedItems = JSON.parse(localStorage.getItem('PCSMontados')) || {};

    Tipocomponentes.forEach(componente => {
        let testeComp =  teste[componente];
        storedItems[componente] = {id: testeComp.id, nome: testeComp.nome, preco: testeComp.preco, img: testeComp.imagem, desc: testeComp.descricao, watts: testeComp.watts};
        localStorage.setItem('PCSMontados', JSON.stringify(storedItems));
    });

    window.location.href = "PcMontado.html";
}

ReactDOM.render(App(), document.getElementById('PCS'));
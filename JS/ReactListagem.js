import { components } from './Lista.js';

// Mostrar Componentes
function ComponentesHTML(props) {
    return  React.createElement('div', {id:'DivP', key: props.id},
                React.createElement('div',{ className: 'option'},
                    React.createElement('img', { src: props.img, alt: 'Imagem Exemplo' }),
                    React.createElement('p', {id:'NomeComponente'}, props.nome),
                    React.createElement('p', {id:'DescricaoComponente'}, props.Descricao),
                    React.createElement('p', {id:'PrecoComponente'}, `${props.preco.toFixed(2)}€`),
                    React.createElement('button',{onClick: () => EscolherComponente(props.id, props.tipo, props.nome, props.preco, props.img, props.Descricao, props.watts, 'MontagemPC.html'), id:'Selecionar'},'Selecionar')
                ),
            React.createElement('hr')
    );
}

function App() {
    // Obter o parâmetro da URL
    const params = new URLSearchParams(window.location.search);
    const [filterType, id] = params.get('valor').split('/');

    let filteredComponents;

    if(filterType != "todos")
    {
        document.getElementById("titulo").innerHTML = 'Escolha um ' + filterType ;    
        
        if (filterType === "MOTHERBOARD" && id) {
            const selected = components.find(component => component.ID === id);
            if (selected) {
                const validarSockets = selected.Socket.split(',');
                filteredComponents = components.filter(component => component.type === 'MOTHERBOARD' && validarSockets.includes(component.Socket));
            }
        }
        else if (filterType == "RAM" && id) {
            const selected = components.find(component => component.ID === id);
            if (selected) {
                const validarDDR = selected.DDR.split(',');
                filteredComponents = components.filter(component => component.type === 'RAM' && validarDDR.includes(component.DDR));
            } 
        }
        else if (filterType == "FONTE" && id) {
            filteredComponents = components.filter(component => component.type === 'FONTE' && component.watts > id);            
        }
        else
        {
            filteredComponents = filterType ? 
            components.filter(component => component.type === filterType) : 
            [];
        }
    }
    else {
        
        document.getElementById("titulo").style.display = 'Produtos disponíveis';
        filteredComponents = components;
    }

    return React.createElement("div", { id: 'component-options' },
        filteredComponents.map((component) => React.createElement(ComponentesHTML,{key: component.ID,  id: component.ID, tipo: component.type, nome: component.name, Descricao: component.Descricao , preco: component.price, img: component.img, watts: component.watts})));       

}

ReactDOM.render(App(), document.getElementById('listar'));

function EscolherComponente(id, tipo, nome, preco, img, desc, watts, pagina) {
    let storedItems = JSON.parse(localStorage.getItem('selectedItems')) || {};
    storedItems[tipo] = { id, nome, preco, img, desc, watts };
    localStorage.setItem('selectedItems', JSON.stringify(storedItems));
    window.location.href = pagina;
}
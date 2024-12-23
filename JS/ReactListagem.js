import { components } from './Lista.js';

// Mostrar Componentes
function ComponentesHTML(props) {
    return  React.createElement('div', {id:'DivP', key: props.ID},
                React.createElement('div',{ className: 'option'},
                    React.createElement('img', { src: props.img, alt: 'Imagem Exemplo' }),
                    React.createElement('p', {id:'NomeComponente'}, props.name),
                    React.createElement('p', {id:'DescricaoComponente'}, props.Descricao),
                    React.createElement('p', {id:'PrecoComponente'}, `${props.price.toFixed(2)}€`),
                    React.createElement('button',{onClick: () => selectComponent(props.type, props.name, props.price,props.img,props.Descricao), id:'Selecionar'},'Selecionar')
                ),
            React.createElement('hr')
    );
}

function App1() {
    // Obter o parâmetro da URL
    const params = new URLSearchParams(window.location.search);
    const [filterType, textolink] = params.get('valor').split('/');

    let filteredComponents;

    if(filterType != "todos")
    {
        document.getElementById("titulo").innerHTML = 'Escolha um ' + filterType ;    
        
        if (filterType === "MOTHERBOARD" && textolink) {
            const selected = components.find(component => component.name === textolink && component.type === 'CPU');
            if (selected) {
                const validarSockets = selected.Socket.split(',');
                // Aqui você precisa verificar se o socket da motherboard está na lista de sockets válidos
                filteredComponents = components.filter(component => component.type === 'MOTHERBOARD' && validarSockets.includes(component.Socket));
            }
        }
        else if (filterType == "RAM" && textolink) {
            const selected = components.find(component => component.name === textolink && component.type === 'MOTHERBOARD');
            if (selected) {
                const validarDDR = selected.DDR.split(',');
                filteredComponents = components.filter(component => component.type === 'RAM' && validarDDR.includes(component.DDR));
            } 
        }
        else if (filterType == "Fonte" && textolink) {
            /*const selected = components.find(component => component.name === textolink && component.type === 'MOTHERBOARD');
            if (selected) {
                const validarDDR = selected.DDR.split(',');
                filteredComponents = components.filter(component => component.type === 'RAM' && validarDDR.includes(component.DDR));
            } */
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
        filteredComponents.map((component, index) => React.createElement(ComponentesHTML,{key: component.ID, type: component.type,name: component.name,Descricao: component.Descricao ,price: component.price,img: component.img})));       

}

ReactDOM.render(App1(), document.getElementById('listar'));

function selectComponent(type, nome, preco,img, desc) {
    // Pega os componentes da lista
    let storedItems = JSON.parse(localStorage.getItem('selectedItems')) || {};
    storedItems[type] = {nome, preco, img, desc};
    localStorage.setItem('selectedItems', JSON.stringify(storedItems));
    window.location.href = 'MontagemPC.html';
}
'use strict';

// Mostrar Componentes
function App(props) {
    return  React.createElement('div',null,
                React.createElement('div',{ className: 'option'},
                    React.createElement('img', { src: props.img, alt: 'Imagem Exemplo' }),
                    React.createElement('p', {id:'NomeComponente'}, props.name),
                    React.createElement('p', {id:'PrecoComponente'}, props.price + '€'),
                    React.createElement('button',{onClick: () => selectComponent(props.type, props.name, props.price,props.img)},'Selecionar')
                ),
            React.createElement('hr')
    );
}

function App1() {

    const components = [
        { type: 'CPU', Socket: 'AM4', name: 'AMD Ryzen 7 7800X3D', price: 489.90, img: '../imagens/Componentes/1.png' },
        { type: 'CPU', Socket: 'AM4', name: 'AMD Ryzen 5 7600X', price: 219.90, img: '../imagens/Componentes/2.png'},
        { type: 'COOLER', name: 'Water Cooler CPU Arctic Liquid Freezer III 360 All-In-One Preto', price: 74.90, img: '../imagens/Componentes/7.png' },
        { type: 'COOLER', name: 'Water Cooler CPU Arctic Liquid Freezer III 360 All-In-One Preto', price: 74.90, img: '../imagens/Componentes/7.png' },
        { type: 'MOTHERBOARD', name: 'Motherboard ATX MSI MPG Z790 Carbon WiFi Skt1700', price: 299.90, img: '../imagens/Componentes/10.png'},
        { type: 'MOTHERBOARD', name: 'Motherboard ATX MSI MPG Z790 Carbon WiFi Skt1700', price: 299.90, img: '../imagens/Componentes/10.png'},
        { type: 'CAIXA', name: 'Caixa ATX Zolyd Rivexa Tempered Glass ARGB Branca', price: 59.90, img: '../imagens/Componentes/12.png' },
        { type: 'CAIXA', name: 'Caixa ATX Zolyd Rivexa Tempered Glass ARGB Branca', price: 59.90, img: '../imagens/Componentes/12.png' },
        { type: 'FONTE', name: 'Fonte de Alimentação Seasonic Focus GX-850W 80 Plus Gold Full Modular', price: 129.90, img: '../imagens/Componentes/11.png'},
        { type: 'FONTE', name: 'Fonte de Alimentação Seasonic Focus GX-850W 80 Plus Gold Full Modular', price: 129.90, img: '../imagens/Componentes/11.png'},
        { type: 'ARMAZENAMENTO', name: 'SSD M.2 2280 Western Digital WD Black SN770 1TB 3D NAND NVMe PCIe', price: 79.90, img: '../imagens/Componentes/8.png' },
        { type: 'ARMAZENAMENTO', name: 'SSD 2.5" Samsung 870 EVO 500GB MLC V-NAND SATA', price: 64.90, img: '../imagens/Componentes/9.png' },
        { type: 'GPU', name: 'Placa Gráfica Gigabyte NVIDIA GeForce RTX 3060', price: 299.90, img: '../imagens/Componentes/3.png' },
        { type: 'GPU', name: 'Placa Gráfica MSI NVIDIA GeForce RTX 4070 SUPER', price: 729.90, img: '../imagens/Componentes/4.png' },
        { type: 'RAM', name: 'Memória RAM Kingston Fury Beast (AMD Expo) 16GB (2x8GB) DDR5-6000MHz', price: 74.90, img: '../imagens/Componentes/6.png' },
        { type: 'RAM', name: 'Memória RAM SO-DIMM Kingston Fury Impact 32GB (2x16GB) DDR5-5600MHz', price: 118.90, img: '../imagens/Componentes/5.png'},
    ];

    // Obter o parâmetro da URL
    const params = new URLSearchParams(window.location.search);
    const filterType = params.get('valor');

    document.getElementById("titulo").innerHTML = 'Escolha um ' + filterType ;    

    const filteredComponents = filterType ? 
        components.filter(component => component.type === filterType) : 
        [];

    return React.createElement("div", { id: 'component-options' },
        filteredComponents.map((component, index) => React.createElement(App,{type: component.type,name: component.name,price: component.price,img: component.img, })));
}

ReactDOM.render(App1(), document.getElementById('listar'));

function selectComponent(type, name, price,img) {
    // Pega os componentes da lista
    let storedItems = JSON.parse(localStorage.getItem('selectedItems')) || {};
    storedItems[type] = { name, price, img};
    localStorage.setItem('selectedItems', JSON.stringify(storedItems));
    window.location.href = 'MontagemPC.html';
}
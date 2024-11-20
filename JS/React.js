'use strict';

// Mostrar Componentes
function App(props) {
    return React.createElement('div',{ className: 'option'},
                React.createElement('img', { src: props.img, alt: 'Imagem Exemplo' }),
                React.createElement('h3', null, props.name),
                React.createElement('p', null, props.price),
                React.createElement('button',{onClick: () => selectComponent(props.type, props.name, props.price,props.img)},'Selecionar')
            );
}

function App1() {

    const components = [
        { type: 'CPU', Socket: 'AM4', name: 'AMD Ryzen 7 7800X3D', price: 489.90, img: '../imagens/1.jpg' },
        { type: 'CPU', Socket: 'AM4', name: 'AMD Ryzen 5 7600X', price: 219.90, img: '../imagens/2.jpg'},
        { type: 'COOLER', name: 'Water Cooler CPU Arctic Liquid Freezer III 360 All-In-One Preto', price: 74.90, img: '../imagens/7.jpg' },
        { type: 'MOTHERBOARD', name: 'Motherboard ATX MSI MPG Z790 Carbon WiFi Skt1700', price: 299.90, img: '../imagens/10.jpg'},
        { type: 'CAIXA', name: 'Caixa ATX Zolyd Rivexa Tempered Glass ARGB Branca', price: 59.90, img: '../imagens/12.jpg' },
        { type: 'FONTE', name: 'Fonte de Alimentação Seasonic Focus GX-850W 80 Plus Gold Full Modular', price: 129.90, img: '../imagens/11.jpg'},
        { type: 'ARMAZENAMENTO', name: 'SSD M.2 2280 Western Digital WD Black SN770 1TB 3D NAND NVMe PCIe', price: 79.90, img: '../imagens/8.jpg' },
        { type: 'ARMAZENAMENTO', name: 'SSD 2.5" Samsung 870 EVO 500GB MLC V-NAND SATA', price: 64.90, img: '../imagens/9.jpg' },
        { type: 'GPU', name: 'Placa Gráfica Gigabyte NVIDIA GeForce RTX 3060', price: 299.90, img: '../imagens/3.jpg' },
        { type: 'GPU', name: 'Placa Gráfica MSI NVIDIA GeForce RTX 4070 SUPER', price: 729.90, img: '../imagens/4.jpg' },
        { type: 'RAM', name: 'Memória RAM Kingston Fury Beast (AMD Expo) 16GB (2x8GB) DDR5-6000MHz', price: 74.90, img: '../imagens/6.jpg' },
        { type: 'RAM', name: 'Memória RAM SO-DIMM Kingston Fury Impact 32GB (2x16GB) DDR5-5600MHz', price: 118.90, img: '../imagens/5.jpg'},
    ];

    // Obter o parâmetro da URL
    const params = new URLSearchParams(window.location.search);
    const filterType = params.get('valor');

    document.getElementById("testeh1").innerHTML = 'Escolha uma ' + filterType ;    

    const filteredComponents = filterType ? 
        components.filter(component => component.type === filterType) : 
        [];

    return React.createElement("div", { id: 'component-options' },
        filteredComponents.map((component, index) => React.createElement(App,{type: component.type,name: component.name,price: component.price,img: component.img, })));
}


// Mostrar NavBar sem a SideBar
/*
function App() {
    return React.createElement('nav', { className: 'navbar' },
        React.createElement('div', { className: 'nav-titulo' },
            React.createElement('a', { href: '../index.html' },
                React.createElement('img', { src: '../imagens/logo.svg', style: { width: '130px', paddingRight: '5px' } })
            )
        ),
        React.createElement('div', { className: 'nav-conteudo' },
            React.createElement('ul', { className: 'nav-cont-ul' },
                React.createElement('li', null,
                    React.createElement('a', { href: 'MontagemPC.html' }, 'Monte o seu pc')
                ),
                React.createElement('li', null,
                    React.createElement('a', { href: 'SobreNos.html' }, 'Sobre nós')
                ),
                React.createElement('li', null,
                    React.createElement('a', { href: 'ProdutosDisponiveis.html' }, 'Produtos disponíveis')
                )
            )
        )
    );
}*/

ReactDOM.render(App1(), document.getElementById('teste'));
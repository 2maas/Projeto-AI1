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
        { type: 'CPU', Socket: 'AM4', name: 'AMD Ryzen 9 7950X', price: 699.90, img: '../imagens/Componentes/1.png' },
        { type: 'CPU', Socket: 'AM5', name: 'AMD Ryzen 7 5800X', price: 429.90, img: '../imagens/Componentes/2.png' },
        { type: 'COOLER', name: 'Corsair iCUE H150i Elite LCD XT', price: 279.99, img: '../imagens/Componentes/3.png' },
        { type: 'COOLER', name: 'Cooler CPU Arctic Freezer 34 eSports DUO 120mm Cinza', price: 39.90, img: '../imagens/Componentes/4.png' },
        { type: 'MOTHERBOARD', name: 'Motherboard ATX ASUS ROG STRIX B550-F Gaming', price: 199.90, img: '../imagens/Componentes/5.png' },
        { type: 'MOTHERBOARD', name: 'Motherboard Mini-ITX Gigabyte B650I Aorus Ultra', price: 319.90, img: '../imagens/Componentes/6.png' },
        { type: 'CAIXA', name: 'Caixa ATX Corsair iCUE 4000X RGB Tempered Glass Preta', price: 109.90, img: '../imagens/Componentes/7.png' },
        { type: 'CAIXA', name: 'Caixa Micro-ATX MSI MAG Pano M100R PZ Series Vidro Temperado', price: 99.90, img: '../imagens/Componentes/8.png' },
        { type: 'FONTE', name: 'Fonte Corsair RM750x 750W 80 Plus Gold Full Modular', price: 99.90, img: '../imagens/Componentes/9.png' },
        { type: 'FONTE', name: 'Fonte de Alimentação ATX MSI MAG A650BN 650W 80 Plus Bronze', price: 59.90, img: '../imagens/Componentes/10.png' },
        { type: 'ARMAZENAMENTO', name: 'SSD M.2 2280 Kingston KC3000 2TB 3D TLC NVMe PCIe Gen 4.0', price: 162.90, img: '../imagens/Componentes/11.png' },
        { type: 'GPU', name: 'Placa Gráfica ASUS ROG STRIX AMD Radeon RX 6800 XT', price: 599.90, img: '../imagens/Componentes/12.png' },
        { type: 'GPU', name: 'Placa Gráfica Zotac NVIDIA GeForce GTX 1660 Super', price: 239.90, img: '../imagens/Componentes/13.png' },





        { type: 'RAM', name: 'Memória RAM Corsair Vengeance LPX 16GB (2x8GB) DDR4-3200MHz', price: 49.90, img: '../imagens/Componentes/15.png' },
        { type: 'RAM', name: 'Memória RAM G.SKILL Trident Z RGB 32GB (2x16GB) DDR5-6000MHz', price: 179.90, img: '../imagens/Componentes/16.png' },
        { type: 'CPU', Socket: 'LGA1700', name: 'Intel Core i9-12900K', price: 589.90, img: '../imagens/Componentes/17.png' },
        { type: 'CPU', Socket: 'AM5', name: 'AMD Ryzen 5 5600G', price: 239.90, img: '../imagens/Componentes/18.png' },
        { type: 'COOLER', name: 'Deepcool AS500 Plus ARGB Air Cooler', price: 59.90, img: '../imagens/Componentes/19.png' },
        { type: 'COOLER', name: 'NZXT Kraken Z73 RGB 360mm', price: 229.90, img: '../imagens/Componentes/20.png' },
        { type: 'MOTHERBOARD', name: 'ASRock B650E Steel Legend ATX', price: 249.90, img: '../imagens/Componentes/21.png' },
        { type: 'MOTHERBOARD', name: 'Gigabyte Z690 AORUS Pro DDR5', price: 279.90, img: '../imagens/Componentes/22.png' },
        { type: 'CAIXA', name: 'Caixa ATX Cooler Master MasterBox TD500 Mesh ARGB', price: 109.90, img: '../imagens/Componentes/23.png' },
        { type: 'CAIXA', name: 'Caixa ATX Lian Li PC-O11 Dynamic', price: 129.90, img: '../imagens/Componentes/24.png' },
        { type: 'FONTE', name: 'Fonte EVGA SuperNOVA 850 G6 80 Plus Gold Full Modular', price: 149.90, img: '../imagens/Componentes/25.png' },
        { type: 'FONTE', name: 'Fonte Thermaltake Toughpower GF1 750W 80 Plus Gold', price: 119.90, img: '../imagens/Componentes/26.png' },
        { type: 'ARMAZENAMENTO', name: 'SSD Samsung 980 Pro 2TB PCIe Gen4', price: 169.90, img: '../imagens/Componentes/27.png' },
        { type: 'ARMAZENAMENTO', name: 'HDD 3.5" Western Digital Black 4TB', price: 129.90, img: '../imagens/Componentes/40.png' },
        { type: 'GPU', name: 'Placa Gráfica Sapphire AMD Radeon RX 7900 XT', price: 899.90, img: '../imagens/Componentes/41.png' },
        { type: 'GPU', name: 'Placa Gráfica EVGA NVIDIA GeForce RTX 3080 FTW3 Ultra', price: 799.90, img: '../imagens/Componentes/42.png' },
        { type: 'RAM', name: 'Memória RAM Crucial Ballistix 16GB (2x8GB) DDR4-3600MHz', price: 64.90, img: '../imagens/Componentes/43.png' },
        { type: 'RAM', name: 'Memória RAM ADATA XPG Spectrix D50 RGB 32GB (2x16GB) DDR4-3600MHz', price: 139.90, img: '../imagens/Componentes/44.png' },
        { type: 'COOLER', name: 'Corsair iCUE H150i Elite Capellix Liquid Cooler', price: 189.90, img: '../imagens/Componentes/45.png' },
        { type: 'MOTHERBOARD', name: 'MSI MAG B550 TOMAHAWK ATX', price: 169.90, img: '../imagens/Componentes/46.png' },
        { type: 'CAIXA', name: 'Caixa ITX NZXT H1 v2 Compact Case', price: 349.90, img: '../imagens/Componentes/47.png' },
        { type: 'ARMAZENAMENTO', name: 'SSD M.2 Samsung 870 QVO 2TB SATA', price: 99.90, img: '../imagens/Componentes/48.png' },
        { type: 'CPU', Socket: 'LGA1700', name: 'Intel Core i7-13700K', price: 419.90, img: '../imagens/Componentes/49.png' },
        { type: 'CPU', Socket: 'AM4', name: 'AMD Ryzen 3 3100', price: 99.90, img: '../imagens/Componentes/50.png' },
        { type: 'COOLER', name: 'ARCTIC Freezer 34 eSports DUO Air Cooler', price: 39.90, img: '../imagens/Componentes/51.png' },
        { type: 'COOLER', name: 'Thermaltake Floe DX RGB 280 TT Premium Edition', price: 149.90, img: '../imagens/Componentes/52.png' },
        { type: 'MOTHERBOARD', name: 'ASUS TUF GAMING X570-PLUS (Wi-Fi)', price: 229.90, img: '../imagens/Componentes/53.png' },
        { type: 'MOTHERBOARD', name: 'Gigabyte B550M DS3H Micro ATX', price: 109.90, img: '../imagens/Componentes/54.png' },
        { type: 'CAIXA', name: 'Caixa ATX Corsair 275R Airflow Mid-Tower', price: 89.90, img: '../imagens/Componentes/55.png' },
        { type: 'CAIXA', name: 'Caixa ATX Phanteks Eclipse P400A Digital', price: 99.90, img: '../imagens/Componentes/56.png' },
        { type: 'FONTE', name: 'Fonte Cooler Master V750 SFX Gold Full Modular', price: 159.90, img: '../imagens/Componentes/57.png' },
        { type: 'FONTE', name: 'Fonte Corsair HX1000 1000W 80 Plus Platinum Modular', price: 249.90, img: '../imagens/Componentes/58.png' },
        { type: 'ARMAZENAMENTO', name: 'SSD Kingston NV2 500GB NVMe Gen4', price: 44.90, img: '../imagens/Componentes/59.png' },
        { type: 'ARMAZENAMENTO', name: 'HDD Toshiba X300 Performance 6TB', price: 159.90, img: '../imagens/Componentes/60.png' },
        { type: 'GPU', name: 'Placa Gráfica ASUS Dual NVIDIA GeForce RTX 4060', price: 499.90, img: '../imagens/Componentes/61.png' },
        { type: 'GPU', name: 'Placa Gráfica PowerColor AMD Radeon RX 6700 XT', price: 429.90, img: '../imagens/Componentes/62.png' },
        { type: 'RAM', name: 'Memória RAM Corsair Dominator Platinum RGB 16GB (2x8GB) DDR4-3200MHz', price: 89.90, img: '../imagens/Componentes/63.png' },
        { type: 'RAM', name: 'Memória RAM TeamGroup T-Force Delta RGB 32GB (2x16GB) DDR5-5600MHz', price: 179.90, img: '../imagens/Componentes/64.png' },
        { type: 'COOLER', name: 'be quiet! Dark Rock Pro 4 Air Cooler', price: 79.90, img: '../imagens/Componentes/65.png' },
        { type: 'MOTHERBOARD', name: 'ASUS PRIME Z790-P WiFi ATX', price: 239.90, img: '../imagens/Componentes/66.png' },
        { type: 'CAIXA', name: 'Caixa ATX Fractal Design Meshify C Compact', price: 119.90, img: '../imagens/Componentes/67.png' },
        { type: 'ARMAZENAMENTO', name: 'SSD Corsair MP600 PRO LPX 1TB PCIe Gen4', price: 89.90, img: '../imagens/Componentes/68.png' },
        { type: 'GPU', name: 'Placa Gráfica ASUS TUF Gaming NVIDIA GeForce RTX 4080', price: 1299.90, img: '../imagens/Componentes/69.png' },
        { type: 'FONTE', name: 'Fonte NZXT C750 750W 80 Plus Bronze Modular', price: 129.90, img: '../imagens/Componentes/70.png' },
        { type: 'RAM', name: 'Memória RAM PNY XLR8 Gaming EPIC-X RGB 32GB (2x16GB) DDR5-6200MHz', price: 199.90, img: '../imagens/Componentes/71.png' },
    ];
    

    // Obter o parâmetro da URL
    const params = new URLSearchParams(window.location.search);
    const filterType = params.get('valor');

    let filteredComponents;

    if(filterType != "todos")
    {
        document.getElementById("titulo").innerHTML = 'Escolha um ' + filterType ;    
    
        filteredComponents = filterType ? 
        components.filter(component => component.type === filterType) : 
        [];
    }
    {
        document.getElementById("titulo").innerHTML = 'Listagem de todos os Componentes';
        filteredComponents = components;
    }

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
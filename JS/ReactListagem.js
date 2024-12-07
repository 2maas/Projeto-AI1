
// Mostrar Componentes
function App(props) {
    return  React.createElement('div',null,
                React.createElement('div',{ className: 'option'},
                    React.createElement('img', { src: props.img, alt: 'Imagem Exemplo' }),
                    React.createElement('p', {id:'NomeComponente'}, props.name),
                    React.createElement('p', {id:'PrecoComponente'}, `${props.price.toFixed(2)}€`),
                    React.createElement('button',{onClick: () => selectComponent(props.type, props.name, props.price,props.img)},'Selecionar')
                ),
            React.createElement('hr')
    );
}

function App1(props) {
    return  React.createElement('a',{className: 'card', href: ''},
                React.createElement('div',{ className: 'card-header'},
                    React.createElement('img', { src: props.img, alt: 'Imagem Exemplo' }),
                ),
                React.createElement('div',{ className: 'card-body'},
                    React.createElement('h3', null, props.name),
                ),
                React.createElement('div',{ className: 'card-body'},
                    React.createElement('span', {className: 'price'}, `${props.price.toFixed(2)}€`),
                )
    );
}

function App1() {
    

    const components = [
        { ID:"1", type: 'CPU', Socket: 'AM4', name: 'AMD Ryzen 9 7950X', price: 699.90, img: '../imagens/Componentes/1.png' },
        { ID:"2", type: 'CPU', Socket: 'AM5', name: 'AMD Ryzen 7 5800X', price: 429.90, img: '../imagens/Componentes/2.png' },
        { ID:"3", type: 'CPU', Socket: 'LGA1700', name: 'Intel Core i9-12900K', price: 339.90, img: '../imagens/Componentes/14.png' },
        { ID:"4", type: 'CPU', Socket: 'AM5', name: 'AMD Ryzen 5 5600G', price: 139.90, img: '../imagens/Componentes/15.png' },
        { ID:"5", type: 'CPU', Socket: 'LGA1700', name: 'Processador Intel Core i7-13700K (13ª Geração)', price: 369.90, img: '../imagens/Componentes/27.png' },
    
        { ID:"6", type: 'COOLER', name: 'Corsair iCUE H150i Elite LCD XT', price: 279.99, img: '../imagens/Componentes/3.png' },
        { ID:"7", type: 'COOLER', name: 'Cooler CPU Arctic Freezer 34 eSports DUO 120mm Cinza', price: 39.90, img: '../imagens/Componentes/4.png' },
        { ID:"8", type: 'COOLER', name: 'Water Cooler CPU NZXT Kraken Elite 360 RGB Preto', price: 309.90, img: '../imagens/Componentes/16.png' },
        { ID:"9", type: 'COOLER', name: 'Corsair iCUE H150i Elite Capellix Liquid Cooler', price: 259.90, img: '../imagens/Componentes/25.png' },
        
        { ID:"10", type: 'MOTHERBOARD', name: 'Motherboard ATX ASUS ROG STRIX B550-F Gaming', price: 199.90, img: '../imagens/Componentes/5.png' },
        { ID:"11", type: 'MOTHERBOARD', name: 'Motherboard Mini-ITX Gigabyte B650I Aorus Ultra', price: 319.90, img: '../imagens/Componentes/6.png' },
        { ID:"12", type: 'MOTHERBOARD', name: 'Motherboard ATX ASRock B650E Steel Legend WiFi', price: 289.90, img: '../imagens/Componentes/17.png' },
        { ID:"13", type: 'MOTHERBOARD', name: 'Motherboard ATX Gigabyte Z690 Aorus Elite AX WiFi', price: 209.90, img: '../imagens/Componentes/18.png' },
        { ID:"14", type: 'MOTHERBOARD', name: 'Motherboard Micro-ATX Gigabyte B550M DS3H', price: 119.90, img: '../imagens/Componentes/29.png' },
        { ID:"15", type: 'MOTHERBOARD', name: 'Motherboard ATX Asus Prime Z790-P WiFi', price: 259.90, img: '../imagens/Componentes/36.png' },
        
        { ID:"16", type: 'CAIXA', name: 'Caixa ATX Corsair iCUE 4000X RGB Tempered Glass Preta', price: 109.90, img: '../imagens/Componentes/7.png' },
        { ID:"17", type: 'CAIXA', name: 'Caixa Micro-ATX MSI MAG Pano M100R PZ Series Vidro Temperado', price: 99.90, img: '../imagens/Componentes/8.png' },
        { ID:"18", type: 'CAIXA', name: 'Caixa ATX Lian Li PC-O11 Dynamic', price: 169.90, img: '../imagens/Componentes/19.png' },
        { ID:"19", type: 'CAIXA', name: 'Caixa ATX Corsair iCUE 5000T RGB Tempered Glass Preta', price: 329.90, img: '../imagens/Componentes/30.png' },
        { ID:"20", type: 'CAIXA', name: 'Caixa ATX Fractal Design Meshify 2 Compact Lite Black', price: 109.90, img: '../imagens/Componentes/37.png' },
        
        { ID:"21", type: 'FONTE', name: 'Fonte Corsair RM750x 750W 80 Plus Gold Full Modular', price: 99.90, img: '../imagens/Componentes/9.png' },
        { ID:"22", type: 'FONTE', name: 'Fonte de Alimentação ATX MSI MAG A650BN 650W 80 Plus Bronze', price: 59.90, img: '../imagens/Componentes/10.png' },
        { ID:"23", type: 'FONTE', name: 'Fonte de Alimentação ATX EVGA GQ 650W 80 Plus Gold Semi Modular', price: 96.90, img: '../imagens/Componentes/20.png' },
        { ID:"24", type: 'FONTE', name: 'Fonte de Alimentação SFX Corsair SF Series (2024) SF750 750W 80 PLUS Platinum Full Modular', price: 183.90, img: '../imagens/Componentes/21.png' },
        { ID:"25", type: 'FONTE', name: 'Fonte de Alimentação ATX Corsair HX1000i 1000W 80 Plus Platinum Full Modular', price: 268.90, img: '../imagens/Componentes/31.png' },
        { ID:"26", type: 'FONTE', name: 'Fonte de Alimentação ATX NZXT C1200 (2023) 1200W 80 Plus Gold Full', price: 179.90, img: '../imagens/Componentes/39.png' },
    
        { ID:"27", type: 'ARMAZENAMENTO', name: 'SSD M.2 2280 Kingston KC3000 2TB 3D TLC NVMe PCIe Gen 4.0', price: 162.90, img: '../imagens/Componentes/11.png' },
        { ID:"28", type: 'ARMAZENAMENTO', name: 'SSD M.2 2280 Kingston NV2 500GB 3D QLC NVMe', price: 44.90, img: '../imagens/Componentes/32.png' },
        { ID:"29", type: 'ARMAZENAMENTO', name: 'SSD M.2 2280 Samsung 980 Pro 2TB', price: 169.90, img: '../imagens/Componentes/22.png' },
       
        { ID:"30", type: 'RAM', name: 'Memória RAM Corsair Vengeance LPX 16GB (2x8GB) DDR4-3200MHz', price: 49.90, img: '../imagens/Componentes/12.png' },
        { ID:"31", type: 'RAM', name: 'Memória RAM G.SKILL Trident Z5 RGB 32GB (2x16GB) DDR5-6400MHz CL32 Preta', price: 153.90, img: '../imagens/Componentes/13.png' },
        { ID:"32", type: 'RAM', name: 'Memória RAM Corsair Dominator Platinum RGB 16GB (2x8GB) DDR4-3600MHz', price: 89.90, img: '../imagens/Componentes/35.png' },
    
        { ID:"33", type: 'GPU', name: 'Placa Gráfica Sapphire AMD Radeon RX 7900 XT', price: 569.90, img: '../imagens/Componentes/23.png' },
        { ID:"34", type: 'GPU', name: 'Placa Gráfica Asus NVIDIA GeForce RTX 4070 SUPER', price: 639.90, img: '../imagens/Componentes/24.png' },
        { ID:"35", type: 'GPU', name: 'Placa Gráfica Asus NVIDIA GeForce RTX 4060 "Ada Lovelace" Dual White Edition', price: 359.90, img: '../imagens/Componentes/33.png' },
        { ID:"36", type: 'GPU', name: 'Placa Gráfica Powercolor AMD Radeon RX 7700 XT', price: 499.90, img: '../imagens/Componentes/34.png' },
        { ID:"37", type: 'GPU', name: 'Placa Gráfica MSI NVIDIA GeForce RTX 4080 SUPER', price: 1169.90, img: '../imagens/Componentes/38.png' },
        
    
    
    
    
        
        //{ type: 'GPU', name: 'Placa Gráfica ASUS ROG STRIX AMD Radeon RX 6800 XT', price: 599.90, img: '../imagens/Componentes/120000.png' },
        //{ type: 'GPU', name: 'Placa Gráfica Zotac NVIDIA GeForce GTX 1660 Super', price: 239.90, img: '../imagens/Componentes/1300000.png' },
        //{ type: 'COOLER', name: 'Deepcool AS500 Plus ARGB Air Cooler', price: 59.90, img: '../imagens/Componentes/1300000.png' },
        //{ type: 'CAIXA', name: 'Caixa ATX Cooler Master MasterBox TD500 Mesh ARGB', price: 109.90, img: '../imagens/Componentes/1300000.png' },
        //{ type: 'ARMAZENAMENTO', name: 'HDD 3.5" Western Digital Black 4TB', price: 129.90, img: '../imagens/Componentes/1300000.png' },
        //{ type: 'RAM', name: 'Memória RAM Crucial Ballistix 16GB (2x8GB) DDR4-3600MHz', price: 64.90, img: '../imagens/Componentes/1300000.png' },
        //{ type: 'RAM', name: 'Memória RAM ADATA XPG Spectrix D50 RGB 32GB (2x16GB) DDR4-3600MHz', price: 139.90, img: '../imagens/Componentes/1300000.png' },
        //{ type: 'CAIXA', name: 'Caixa ITX NZXT H1 v2 Compact Case', price: 349.90, img: '../imagens/Componentes/1300000.png' },
        //{ type: 'ARMAZENAMENTO', name: 'SSD M.2 Samsung 870 QVO 2TB SATA', price: 99.90, img: '../imagens/Componentes/1300000.png' },
        //{ type: 'COOLER', name: 'Thermaltake Floe DX RGB 280 TT Premium Edition', price: 149.90, img: '../imagens/Componentes/52.png' },
        //{ type: 'CAIXA', name: 'Caixa ATX Phanteks Eclipse P400A Digital', price: 99.90, img: '../imagens/Componentes/56.png' },
        //{ type: 'FONTE', name: 'Fonte Cooler Master V750 SFX Gold Full Modular', price: 159.90, img: '../imagens/Componentes/57.png' },
        //{ type: 'ARMAZENAMENTO', name: 'HDD Toshiba X300 Performance 6TB', price: 159.90, img: '../imagens/Componentes/60.png' },
        //{ type: 'RAM', name: 'Memória RAM TeamGroup T-Force Delta RGB 32GB (2x16GB) DDR5-5600MHz', price: 179.90, img: '../imagens/Componentes/64.png' },
        //{ type: 'ARMAZENAMENTO', name: 'SSD Corsair MP600 PRO LPX 1TB PCIe Gen4', price: 89.90, img: '../imagens/Componentes/68.png' },
        //{ type: 'RAM', name: 'Memória RAM PNY XLR8 Gaming EPIC-X RGB 32GB (2x16GB) DDR5-6200MHz', price: 199.90, img: '../imagens/Componentes/71.png' },
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
    else {
        document.getElementById("titulo").style.display = 'none';
        document.getElementById("Tab").style.display = 'none';
        filteredComponents = components;
    }

    const isMobile = window.innerWidth;

    // ver isto
    //if(isMobile >= 500)
    //{
        return React.createElement("div", { id: 'component-options' },
            filteredComponents.map((component, index) => React.createElement(App,{type: component.type,name: component.name,price: component.price,img: component.img, })));    
    //}
    //else
    //{
        //return React.createElement("div", { className: 'DivMedioMontagens' },
            //filteredComponents.map((component, index) => React.createElement(App1,{type: component.type,name: component.name,price: component.price,img: component.img, })));    
    
    //}

}

ReactDOM.render(App1(), document.getElementById('listar'));

function selectComponent(type, name, price,img) {
    // Pega os componentes da lista
    let storedItems = JSON.parse(localStorage.getItem('selectedItems')) || {};
    storedItems[type] = { name, price, img};
    localStorage.setItem('selectedItems', JSON.stringify(storedItems));
    window.location.href = 'MontagemPC.html';
}
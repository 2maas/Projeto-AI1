import { components } from './Lista.js';

const PC1 = [{ id:"4"},
    { id:"8"},
    { id:"10"},
    { id:"17"},
    { id:"23"},
    { id:"29"},
    { id:"32"},
    { id:"35"}
];

const PC2 = [{ id:"5"},
    { id:"7"},
    { id:"12"},
    { id:"19"},
    { id:"26"},
    { id:"28"},
    { id:"30"},
    { id:"33"}
];

const PC3 = [{ id:"2"},
    { id:"6"},
    { id:"15"},
    { id:"19"},
    { id:"21"},
    { id:"27"},
    { id:"31"},
    { id:"37"}
];

function AbrirPcMontado(escolhido){
    if(escolhido == 1){
        PC1.forEach(comp => {
            const componente = components.find(component => component.ID === comp.id);
            if (componente) {
                selectComponent(componente.ID, componente.type, componente.name, componente.price, componente.img, componente.Descricao);
            }
        });
        
    }
    else if(escolhido == 2){
        PC2.forEach(comp => {
            const componente = components.find(component => component.ID === comp.id);
            if (componente) {
                selectComponent(componente.ID, componente.type, componente.name, componente.price, componente.img, componente.Descricao);
            }
        });
        
    }
    else if(escolhido == 3){
        PC3.forEach(comp => {
            const componente = components.find(component => component.ID === comp.id);
            if (componente) {
                selectComponent(componente.ID, componente.type, componente.name, componente.price, componente.img, componente.Descricao);
            }
        });
        
    }
}

function selectComponent(id, tipo, nome, preco, img, desc) {
    // Pega os componentes da lista
    let storedItems = JSON.parse(localStorage.getItem('selectedItems')) || {};
    storedItems[tipo] = {id, nome, preco, img, desc};
    localStorage.setItem('selectedItems', JSON.stringify(storedItems));
    window.location.href = '/HTML/MontagemPC.html';
}


document.getElementById("pc1").addEventListener("click", function(){
    AbrirPcMontado(1)
});
document.getElementById("pc2").addEventListener("click", function(){
    AbrirPcMontado(2)
});
document.getElementById("pc3").addEventListener("click", function(){
    AbrirPcMontado(3)
});
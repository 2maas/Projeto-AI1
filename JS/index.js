import { components } from './Lista.js';

const PCS = [{ idcpu:"4", idcooler:"8", idmotherboard:"10", idram:"17", idarmazenamento:"23", idgpu:"29", idcaixa:"32", idfonte:"35"},
             { idcpu:"5", idcooler:"7", idmotherboard:"12", idram:"19", idarmazenamento:"26", idgpu:"28", idcaixa:"30", idfonte:"33"},
             { idcpu:"2", idcooler:"6", idmotherboard:"15", idram:"19", idarmazenamento:"21", idgpu:"27", idcaixa:"18", idfonte:"37"}]

function AbrirPcMontado(escolhido){
    const pcEscolhido = PCS[escolhido];

    for (const key in pcEscolhido) {
        const componente = components.find(component => component.ID === pcEscolhido[key]);
        if (componente) {
            EscolherComponente(componente.ID, componente.type, componente.name, componente.price, componente.img, componente.Descricao, 'HTML/PcMontado.html');
        }
    }

}

document.getElementById("pc1").addEventListener("click", function(){
    AbrirPcMontado(0)
});
document.getElementById("pc2").addEventListener("click", function(){
    AbrirPcMontado(1)
});
document.getElementById("pc3").addEventListener("click", function(){
    AbrirPcMontado(2)
});

function EscolherComponente(id, tipo, nome, preco, img, desc, pagina) {
    let storedItems = JSON.parse(localStorage.getItem('PCSMontados')) || {};
    storedItems[tipo] = { id, nome, preco, img, desc };
    localStorage.setItem('PCSMontados', JSON.stringify(storedItems));
    window.location.href = pagina;
}
let precototal = 0;
let index = 0;

let Componentes = [];
let ComponentesAtuaisCarrosel = [];
const Tipocomponentes = ['CPU', 'COOLER', 'MOTHERBOARD', 'RAM', 'ARMAZENAMENTO', 'GPU', 'CAIXA', 'FONTE'];

const divs = document.querySelectorAll('.imgs-secundarias .border-imgs');
window.onload = loadComponents;

function loadComponents() {

    let i=0;
    const storedItems = JSON.parse(localStorage.getItem('selectedItems')) || {};
    Tipocomponentes.forEach(componente => {
        if (storedItems[componente]) {
            mostrarNaTabela(storedItems[componente], componente);
        } else {
            Componentes.push({nome: "", preco: "", descricao: "", imagem: "../imagens/Componentes/SemComponente.png" });
            i++;
        }
    });

    document.getElementById("labelteste").innerHTML = "Valor Total: " + precototal.toFixed(2) + '€';

    MenosImagens();
}

function mostrarNaTabela(componenteLocalStorage, tipo) {
    if (componenteLocalStorage != '' && tipo != ''){
        document.getElementById(tipo + '-img').style.display = 'block';
        document.getElementById(tipo + '-img').src = componenteLocalStorage.img;
        Componentes.push({tipo: tipo, id: componenteLocalStorage.id, nome: componenteLocalStorage.nome, preco: componenteLocalStorage.preco, descricao: componenteLocalStorage.desc ,imagem: componenteLocalStorage.img});
        document.getElementById(tipo + '-info').textContent = componenteLocalStorage.nome;
        document.getElementById(tipo + '-preco').textContent = componenteLocalStorage.preco.toFixed(2)+'€';
        document.getElementById(tipo + '-botaoAdd').style.display = 'none';
        document.getElementById(tipo + '-botaoRemove').style.display = 'inline';

        precototal += componenteLocalStorage.preco;

        StyleComponentes(tipo);
    }
        
}

function redirectTo(pagina) {

    if(pagina == "MOTHERBOARD")
    {
        if(Componentes[0].tipo == "CPU")
            window.location.href = `listagem.html?valor=${encodeURIComponent(pagina)}/${encodeURIComponent(Componentes[0].id)}`;
        else
        PopUp("Tem que escolher uma CPU Primeiro");
    }
    else if(pagina == "RAM")
    {
        if(Componentes[2].tipo == "MOTHERBOARD")
            window.location.href = `listagem.html?valor=${encodeURIComponent(pagina)}/${encodeURIComponent(Componentes[2].id)}`;
        else
            PopUp("Tem que escolher uma MotherBoard Primeiro");
    }
    else if (pagina == "FONTE")
    {
        if(Componentes[0].tipo == "CPU" && Componentes[5].tipo == "GPU")
            window.location.href = `listagem.html?valor=${encodeURIComponent(pagina)}/${encodeURIComponent(Componentes[0].id)}-${encodeURIComponent(Componentes[5].id)}`;
        else if (Componentes[0].tipo != "CPU")
            PopUp("Tem que escolher uma CPU Primeiro");
        else
            PopUp("Tem que escolher uma GPU Primeiro");
    }
    else
        window.location.href = `listagem.html?valor=${encodeURIComponent(pagina)}`;

}

function StyleComponentes(tipo) {
    document.getElementById(tipo + '-td').style.display = 'flex';
    document.getElementById(tipo + '-td').style.gap = '5px';
}

// remover o componente da lista quando o remover
function RemoverComponenteTabela(tipo) {
    const Info = document.getElementById(tipo + '-info').textContent;
    const Preco = document.getElementById(tipo + '-preco').textContent;

    if (Info != '' && Preco != '') {
        let storedItems = JSON.parse(localStorage.getItem('selectedItems')) || {};

        if (storedItems[tipo]) {
            precototal -= storedItems[tipo].price;
            document.getElementById("labelteste").innerHTML = "Valor Total: " + precototal.toFixed(2) + '€';

            delete storedItems[tipo];
            localStorage.setItem('selectedItems', JSON.stringify(storedItems));

            document.getElementById(tipo + '-info').innerHTML = 'Nenhum';
            document.getElementById(tipo + '-preco').innerHTML = '';
            document.getElementById(tipo + '-img').src = '../imagens/Componentes/SemComponente.png';
            document.getElementById(tipo + '-td').style.display = 'table-cell';
            document.getElementById(tipo + '-botaoAdd').style.display = 'inline';
            document.getElementById(tipo + '-botaoRemove').style.display = 'none';

            StyleComponentes(tipo);
        }
    }


}

function MenosImagens(){
    ComponentesAtuais = [];
    index = 0;
    // Atualizar o conteúdo das divs com as imagens no load da pagina
    for (let i = 0; i < 5; i++) {
        const div = divs[i];
        const img = div.querySelector('img');

        // Verificar se existe uma imagem na div
        if (img) {
            img.src = Componentes[i].imagem;    
            if(i == 0)
            {
                document.getElementById("ImagemPrincipal").src = img.src;
                document.getElementById("NomeSelecinado").innerHTML = Componentes[i].nome;

                
                // substitui as | por <br> para mostrar como se fosse numa lista
                //document.getElementById("descricaoSelecinada").innerHTML = imagens[i].descricao.replace(/\s*\|\s*/g, '<br>');
            }   
                
            if(i < 4)
            {
                 
                ComponentesAtuais.push({nome: Componentes[i].nome, preco: Componentes[i].preco, descricao: Componentes[i].descricao ,imagem: img.src});
            }
            else
            {
                div.removeEventListener('click', MenosImagens);
                div.addEventListener('click',MaisImagens);
            }
                
            
            // Adicionar a borda verde apenas para o primeiro item
            if (i === 0) {
                div.style.borderColor = '#41b857';  // Definir a borda verde
            } else {
                div.style.borderColor = '';  // Remover a borda verde
            }

        }
    }
    
}        

function MaisImagens(){
    ComponentesAtuais = [];
    index = 0;
    for (let i = 4; i < 9; i++) {
        const div = divs[i - 4];
        
        const img = div.querySelector('img');

        // Verificar se existe uma imagem na div
        if (img) {
            if(i == 4)
            {
                img.src = Componentes[i].imagem;
                document.getElementById("ImagemPrincipal").src = img.src;
                document.getElementById("NomeSelecinado").innerHTML = Componentes[i].nome;

                // substitui as | por <br> para mostrar como se fosse numa lista
                //document.getElementById("descricaoSelecinada").innerHTML = imagens[i].descricao.replace(/\s*\|\s*/g, '<br>');
            }
                
            if(i < 8)
            {
                img.src = Componentes[i].imagem; 
                ComponentesAtuais.push({nome: Componentes[i].nome, preco: Componentes[i].preco, descricao: Componentes[i].descricao ,imagem: img.src});
            }else
            {
                div.removeEventListener('click', MaisImagens);
                div.addEventListener('click',MenosImagens);
                img.src = Componentes[0].imagem;   
            }
            
            // Adicionar a borda verde apenas para o primeiro item
            if (i == 4) {
                div.style.borderColor = '#41b857';  // Definir a borda verde
            } else {
                div.style.borderColor = '';  // Remover a borda verde
            }

        }
    }
}

function MudarimagemSetas(teste){
    index += teste;

    if (index < 0) {
        index = ComponentesAtuais.length - 1;  // Vai para a última imagem se o índice for menor que 0
    } else if (index >= ComponentesAtuais.length) {
        index = 0;  // Volta para a primeira imagem se o índice for maior ou igual ao tamanho do array
    }

    const imgteste = document.querySelectorAll(".imgs-secundarias img")[index];
    Mudarimagem(imgteste);
}

function Mudarimagem(img){
        ImagemPrincipal.style.opacity = 0;

        setTimeout(() => {
            ImagemPrincipal.src = img.src; 
            ImagemPrincipal.style.opacity = 1;
        }, 300);

        const borderImgs = document.querySelectorAll(".border-imgs");

        let teste = 0;

        //Restaurar a cor para a cor default
        borderImgs.forEach(imgs => {
            imgs.style.borderColor = "#5f5d5d"; 
        })

        img.parentElement.style.borderColor = "#41b857";

        if(!img.src.includes("imagens/Componentes/SemComponente.png"))
        {
            for (let i = 0; i < 5; i++) {
                //const tste = document.getElementById("NomeSelecinado").innerHTML;
                if(img.src == ComponentesAtuais[i].imagem)
                {
                    document.getElementById("NomeSelecinado").innerHTML = ComponentesAtuais[i].nome;

                    // substitui as | por <br> para mostrar como se fosse numa lista
                    //document.getElementById("descricaoSelecinada").innerHTML = ComponentesAtuais[i].descricao.replace(/\s*\|\s*/g, '<br>');
                    index = i;
                    break;
                }
            }     
        }
        else
        {
            // verficar onde esta a borda ver para atualizar o index
            for (let i = 0; i < borderImgs.length; i++) {
                if (borderImgs[i].style.borderColor === "rgb(65, 184, 87)") { 
                    index = i; 
                    break;
                }
            }

            document.getElementById("NomeSelecinado").innerHTML = "";
            document.getElementById("descricaoSelecinada").innerHTML = "";
        }
}

// ver esta func melhor
function baixar() {
    let conteudo = '';


    // Pega o conteúdo da área de texto
    const CPUInfo = document.getElementById("CPU-info").innerHTML;
    const CPUPreco = document.getElementById("CPU-preco").innerHTML;
    const CoolerInfo = document.getElementById("COOLER-info").innerHTML;
    const CoolerPreco = document.getElementById("COOLER-preco").innerHTML;
    const MotherboardInfo = document.getElementById("MOTHERBOARD-info").innerHTML;
    const MotherboardPreco = document.getElementById("MOTHERBOARD-preco").innerHTML;
    const RAMInfo = document.getElementById("RAM-info").innerHTML;
    const RAMPreco = document.getElementById("RAM-preco").innerHTML;
    const ArmazenamentoInfo = document.getElementById("ARMAZENAMENTO-info").innerHTML;
    const ArmazenamentoPreco = document.getElementById("ARMAZENAMENTO-preco").innerHTML;
    const GPUInfo = document.getElementById("GPU-info").innerHTML;
    const GPUPreco = document.getElementById("GPU-preco").innerHTML;
    const CaixaInfo = document.getElementById("CAIXA-info").innerHTML;
    const CaixaPreco = document.getElementById("CAIXA-preco").innerHTML;
    const FonteInfo = document.getElementById("FONTE-info").innerHTML;
    const FontePreco = document.getElementById("FONTE-preco").innerHTML;
    const Total = document.getElementById("labelteste").innerHTML;
    
    const now = new Date();

    // Formatar a hora
    const hour = now.toLocaleString('pt-PT', { hour: '2-digit', minute: '2-digit' , second: '2-digit' });

    // Formatar a data
    const date = now.toLocaleString('pt-PT', { year: 'numeric', month: 'numeric', day: 'numeric' });

    // Combinar a hora e data na ordem desejada
    const formattedDateTime = `${hour} - ${date}`;

    if(CPUInfo != "" && CPUPreco!= "")
        conteudo += "CPU: " + CPUInfo + " -> " + CPUPreco + '%0A';
    if(CoolerInfo != "" && CoolerPreco != "")
        conteudo += "Cooler: " + CoolerInfo + " -> " + CoolerPreco + '%0A';
    if(MotherboardInfo != "" && MotherboardPreco != "")
        "MotherBoard: " + MotherboardInfo + " -> " + MotherboardPreco + '%0A';
    if(RAMInfo != "" && RAMPreco!= "")
        conteudo += "RAM: " + RAMInfo + " -> " + RAMPreco + '%0A';
    if(ArmazenamentoInfo != "" && ArmazenamentoInfo != "")
        conteudo += "Armazenamento: " + ArmazenamentoInfo + " -> " + ArmazenamentoPreco + '%0A';
    if(GPUInfo != "" && GPUPreco != "")
        conteudo += "GPU: " + GPUInfo + " -> " + GPUPreco + '%0A';
    if(FonteInfo != "" && FontePreco != "")
        conteudo += "Fonte: " + FonteInfo + " -> " + FontePreco + '%0A';
    if(CaixaInfo != "" && CaixaPreco != "")
        conteudo += "Caixa: " + CaixaInfo + " -> " + CaixaPreco + '%0A';

    // %0A = "\n" so que na url
    conteudo += Total + '%0A' + "Gerado por PCChip8Builder " + formattedDateTime;

    // Cria o link para download
    const link = document.createElement("a");
    link.href = 'data:text/plain,' + conteudo ;
    link.download = "MontagemPC.txt";
    
    // Aciona o download
    link.click();
}

function PopUp(texto){
    const container = document.querySelector(".container-popup");
    
    if(!container.classList.contains("abertoPopUp"))
    {
        document.getElementById("texto").innerText = texto;
        container.classList.add('abertoPopUp');

        setTimeout(() => {
            container.style.animation = 'PopUpCima 0.5s ease forwards';
            setTimeout(() => {
                container.classList.remove("abertoPopUp");
                container.style.animation = '';
            }, 1000); 
        }, 5000);
    
    }

}


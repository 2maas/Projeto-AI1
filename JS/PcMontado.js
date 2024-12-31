let index = 0;
let precototal = 0;
let Componentes = [];
let ComponentesAtuaisCarrosel = [];
const Tipocomponentes = ['CPU', 'COOLER', 'MOTHERBOARD', 'RAM', 'ARMAZENAMENTO', 'GPU', 'CAIXA', 'FONTE'];
const divs = document.querySelectorAll('.imgs-secundarias .border-imgs');

window.onload = load;

function load() {
    const PCMontado = JSON.parse(localStorage.getItem('PCSMontados')) || {};
    Tipocomponentes.forEach(componente => {
        if (PCMontado[componente]) {
            Componentes.push({ tipo: componente, id: PCMontado[componente].id, nome: PCMontado[componente].nome, preco: PCMontado[componente].preco, descricao: PCMontado[componente].desc, imagem: PCMontado[componente].img, watts: PCMontado[componente].watts});
            precototal += PCMontado[componente].preco;
        }
    });

    MenosImagens();
}

function MenosImagens() {
    ComponentesAtuaisCarrosel = [];
    index = 0;
    // Atualizar o conteúdo das divs com as imagens no load da pagina
    for (let i = 0; i < 5; i++) {
        const div = divs[i];
        const img = div.querySelector('img');

        // Verificar se existe uma imagem na div
        if (img) {
            img.src = Componentes[i].imagem;
            if (i == 0) {
                document.getElementById("ImagemPrincipal").src = img.src;
                document.getElementById("NomeSelecinado").innerHTML = Componentes[i].nome;


                // substitui as | por <br> para mostrar como se fosse numa lista
                document.getElementById("descricaoSelecinada").innerHTML = Componentes[i].descricao.replace(/\s*\|\s*/g, '<br>');
                document.getElementById("precoSelecionado").innerHTML = Componentes[i].preco;
            }

            if (i < 4) {

                ComponentesAtuaisCarrosel.push({ nome: Componentes[i].nome, preco: Componentes[i].preco, descricao: Componentes[i].descricao, imagem: img.src });
            }
            else {
                div.removeEventListener('click', MenosImagens);
                div.addEventListener('click', MaisImagens);
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

function MaisImagens() {
    ComponentesAtuaisCarrosel = [];
    index = 0;
    for (let i = 4; i < 9; i++) {
        const div = divs[i - 4];

        const img = div.querySelector('img');

        // Verificar se existe uma imagem na div
        if (img) {
            if (i == 4) {
                img.src = Componentes[i].imagem;
                document.getElementById("ImagemPrincipal").src = img.src;
                document.getElementById("NomeSelecinado").innerHTML = Componentes[i].nome;

                // substitui as | por <br> para mostrar como se fosse numa lista
                document.getElementById("descricaoSelecinada").innerHTML = Componentes[i].descricao.replace(/\s*\|\s*/g, '<br>');
                document.getElementById("precoSelecionado").innerHTML = Componentes[i].preco;
            }

            if (i < 8) {
                img.src = Componentes[i].imagem;
                ComponentesAtuaisCarrosel.push({ nome: Componentes[i].nome, preco: Componentes[i].preco, descricao: Componentes[i].descricao, imagem: img.src });
            } else {
                div.removeEventListener('click', MaisImagens);
                div.addEventListener('click', MenosImagens);
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

function MudarimagemSetas(teste) {
    index += teste;

    if (index < 0) {
        index = ComponentesAtuaisCarrosel.length - 1;  // Vai para a última imagem se o índice for menor que 0
    } else if (index >= ComponentesAtuaisCarrosel.length) {
        index = 0;  // Volta para a primeira imagem se o índice for maior ou igual ao tamanho do array
    }

    const imgteste = document.querySelectorAll(".imgs-secundarias img")[index];
    Mudarimagem(imgteste);
}

function Mudarimagem(img) {
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

    if (!img.src.includes("imagens/Componentes/SemComponente.png")) {
        for (let i = 0; i < 5; i++) {
            //const tste = document.getElementById("NomeSelecinado").innerHTML;
            if (img.src == ComponentesAtuaisCarrosel[i].imagem) {
                document.getElementById("NomeSelecinado").innerHTML = ComponentesAtuaisCarrosel[i].nome;

                // substitui as | por <br> para mostrar como se fosse numa lista
                document.getElementById("descricaoSelecinada").innerHTML = ComponentesAtuaisCarrosel[i].descricao.replace(/\s*\|\s*/g, '<br>');
                document.getElementById("precoSelecionado").innerHTML = ComponentesAtuaisCarrosel[i].preco;
                index = i;
                break;
            }
        }
    }
    else {
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

function Config() {
    for (const comp of Componentes) {
        if (comp) {
            EscolherComponente(comp.id, comp.tipo, comp.nome, comp.preco, comp.imagem, comp.descricao, comp.watts, "MontagemPC.html");
        }
    }
}

function EscolherComponente(id, tipo, nome, preco, img, desc, watts, pagina) {
    let storedItems = JSON.parse(localStorage.getItem('selectedItems')) || {};
    storedItems[tipo] = { id, nome, preco, img, desc, watts };
    localStorage.setItem('selectedItems', JSON.stringify(storedItems));
    window.location.href = pagina;
}


function AbrirPopUp(){
    const container = document.querySelector(".container-popup");
    
    if(!container.classList.contains("abertoPopUp"))
    {
        document.getElementById("texto").innerText = "Deseja criar uma config através desta? Vai perder tudo caso já tenha começado.";
        container.classList.add('abertoPopUp');
    }
}

function FecharPopUp(){
    const container = document.querySelector(".container-popup");
    
    setTimeout(() => {
        container.style.animation = 'PopUpCima 0.5s ease forwards';
        setTimeout(() => {
            container.classList.remove("abertoPopUp");
            container.style.animation = '';
        }, 1000); 
    }, 500);
}
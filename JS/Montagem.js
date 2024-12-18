let precototal = 0;
// ler para a lista imgs oq esta no localstorage
let imagens = [];
let imagensAtuais = [];
let index;
const divs = document.querySelectorAll('.imgs-secundarias .border-imgs');
window.onload = loadComponents;

function loadComponents() {

    const storedItems = JSON.parse(localStorage.getItem('selectedItems')) || {};
    if (storedItems['CPU']) {
        mostrarNaTabela(storedItems['CPU'], 'CPU');
    }
    else
        imagens.push("../imagens/Componentes/SemComponente.png");
    if (storedItems['COOLER']) {
        mostrarNaTabela(storedItems['COOLER'], 'COOLER');
    }
    else
        imagens.push("../imagens/Componentes/SemComponente.png");
    if (storedItems['MOTHERBOARD']) {
        mostrarNaTabela(storedItems['MOTHERBOARD'], 'MOTHERBOARD');
    }
    else
        imagens.push("../imagens/Componentes/SemComponente.png");
    if (storedItems['RAM']) {
        mostrarNaTabela(storedItems['RAM'], 'RAM');
    }
    else
        imagens.push("../imagens/Componentes/SemComponente.png");
    if (storedItems['ARMAZENAMENTO']) {
        mostrarNaTabela(storedItems['ARMAZENAMENTO'], 'ARMAZENAMENTO');
    }
    else
        imagens.push("../imagens/Componentes/SemComponente.png");
    if (storedItems['GPU']) {
        mostrarNaTabela(storedItems['GPU'], 'GPU');
    }
    else
        imagens.push("../imagens/Componentes/SemComponente.png");
    if (storedItems['CAIXA']) {
        mostrarNaTabela(storedItems['CAIXA'], 'CAIXA');
    }
    else
        imagens.push("../imagens/Componentes/SemComponente.png");
    if (storedItems['FONTE']) {
        mostrarNaTabela(storedItems['FONTE'], 'FONTE');
    }
    else
        imagens.push("../imagens/Componentes/SemComponente.png");

    document.getElementById("labelteste").innerHTML = "Valor Total: " + precototal.toFixed(2) + '€';

    MenosImagens();
}

function mostrarNaTabela(Componente, tipo) {
    document.getElementById(tipo + '-img').style.display = 'block';
    document.getElementById(tipo + '-img').src = Componente.img;
    imagens.push({nome: Componente.nome, preco:Componente.preco, descricao: Componente.desc ,imagem: Componente.img});
    document.getElementById(tipo + '-info').textContent = Componente.nome;
    document.getElementById(tipo + '-preco').textContent = `${Componente.preco.toFixed(2)}€`;
    document.getElementById(tipo + '-botaoAdd').style.display = 'none';
    document.getElementById(tipo + '-botaoRemove').style.display = 'inline';

    precototal += Componente.price;

    StyleComponentes(tipo);

        
}

function redirectTo(pagina) {
    window.location.href = `listagem.html?valor=${encodeURIComponent(pagina)}`;
}

function StyleComponentes(tipo) {
    document.getElementById(tipo + '-td').style.display = 'flex';
    document.getElementById(tipo + '-td').style.gap = '5px';
}

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
    imagensAtuais = [];
    index = 0;
    // Atualizar o conteúdo das divs com as imagens no load da pagina
    for (let i = 0; i < 5; i++) {
        const div = divs[i];
        const img = div.querySelector('img');

        // Verificar se existe uma imagem na div
        if (img) {
            // Atualizar o src da imagem
            img.src = imagens[i].imagem;            

            if(i == 0)
            {
                document.getElementById("ImagemPrincipal").src = img.src;
                document.getElementById("NomeSelecinado").innerHTML = imagens[i].nome;
            }
                
            if(i < 4)
                imagensAtuais.push({nome: imagens[i].nome, preco: imagens[i].preco, descricao: imagens[i].descricao ,imagem: img.src});
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
    imagensAtuais = [];
    index = 0;
    for (let i = 4; i < 9; i++) {
        const div = divs[i - 4];
        
        const img = div.querySelector('img');

        // Verificar se existe uma imagem na div
        if (img) {
            // Atualizar o src da imagem
            img.src = imagens[i].imagem;

            if(i == 4)
            {
                document.getElementById("ImagemPrincipal").src = img.src;
                document.getElementById("NomeSelecinado").innerHTML = imagens[i].nome;
            }
                
            if(i < 8)
                imagensAtuais.push({nome: imagens[i].nome, preco: imagens[i].preco, descricao: imagens[i].descricao ,imagem: img.src});
            else
            {
                div.removeEventListener('click', MaisImagens);
                div.addEventListener('click',MenosImagens);
                img.src = imagens[0];
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
        index = imagensAtuais.length - 1;  // Vai para a última imagem se o índice for menor que 0
    } else if (index >= imagensAtuais.length) {
        index = 0;  // Volta para a primeira imagem se o índice for maior ou igual ao tamanho do array
    }

    const imgteste = document.querySelectorAll(".imgs-secundarias img")[index];
    Mudarimagem(imgteste);
}


function Mudarimagem(img){

    if(ImagemPrincipal.src != img.src)
    {
        ImagemPrincipal.style.opacity = 0;

        setTimeout(() => {
            ImagemPrincipal.src = img.src; 
            ImagemPrincipal.style.opacity = 1;
        }, 300);

        const borderImgs = document.querySelectorAll(".border-imgs");

        //Restaurar a cor para a cor default
        borderImgs.forEach(imgs => {imgs.style.borderColor = "#5f5d5d"})

        img.parentElement.style.borderColor = "#41b857";

        for (let i = 0; i < 5; i++) {
            if(img.src == imagensAtuais[i].imagem)
            {
                document.getElementById("NomeSelecinado").innerHTML = imagensAtuais[i].nome;
                index = i;
                break;
            }
        }       
    }
}
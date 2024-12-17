let imagens = [];
let index = 0;
const ImagemPrincipal = document.getElementById("ImagemPrincipal");

function Mudarimagem(img){
    ImagemPrincipal.style.opacity = 0;

    setTimeout(() => {
        ImagemPrincipal.src = img.src; 
        ImagemPrincipal.style.opacity = 1;
    }, 300);

    const borderImgs = document.querySelectorAll(".border-imgs");

    //Restaurar a cor para a cor default
    borderImgs.forEach(imgs => {imgs.style.borderColor = "#5f5d5d"})

    img.parentElement.style.borderColor = "#41b857";

    index = imagens.indexOf(img.src);
}

function MudarimagemSetas(teste){
    index += teste;

    if (index < 0) {
        index = imagens.length - 1;
    } else if (index >= imagens.length) {
        index = 0; 
    }

    const imgteste = document.querySelectorAll(".imgs-secundarias img")[index];
    Mudarimagem(imgteste);
}


const imagensSecundarias = document.querySelectorAll('.imgs-secundarias img'); 
for (let i = 0; i < imagensSecundarias.length; i++) {
    imagens.push(imagensSecundarias[i].src);
}
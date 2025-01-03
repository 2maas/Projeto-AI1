let precototal = 0;
let Componentes = [];
const Tipocomponentes = ['CPU', 'COOLER', 'MOTHERBOARD', 'RAM', 'ARMAZENAMENTO', 'GPU', 'CAIXA', 'FONTE'];
window.onload = loadComponents;
let WATTS = 0;

function loadComponents() {

    let i=0;
    const storedItems = JSON.parse(localStorage.getItem('selectedItems')) || {};
    Tipocomponentes.forEach(componente => {
        if (storedItems[componente]) {
            mostrarNaTabela(storedItems[componente], componente);
        } else {
            Componentes.push({tipo: componente, nome: "Nenhum", preco: "", descricao: "", imagem: "../imagens/Componentes/SemComponente.png" });
            i++;
        }
    });
    if(i < 8)
    {
        document.getElementById("RemoverTudo").style.display = 'inline';
    }
    else
    {
        document.getElementById("RemoverTudo").style.display = 'none';
    }


    document.getElementById("labelPreco").innerHTML = "Valor Total: " + precototal.toFixed(2) + '€';
}

function mostrarNaTabela(componenteLocalStorage, tipo) {
    if (componenteLocalStorage != '' && tipo != ''){
        document.getElementById(tipo + '-img').style.display = 'block';
        document.getElementById(tipo + '-img').src = componenteLocalStorage.img;
        Componentes.push({tipo: tipo, id: componenteLocalStorage.id, nome: componenteLocalStorage.nome, preco: componenteLocalStorage.preco, descricao: componenteLocalStorage.desc ,imagem: componenteLocalStorage.img, watts: componenteLocalStorage.watts});
        document.getElementById(tipo + '-info').textContent = componenteLocalStorage.nome;
        document.getElementById(tipo + '-preco').textContent = componenteLocalStorage.preco.toFixed(2)+'€';
        document.getElementById(tipo + '-botaoAdd').style.display = 'none';
        document.getElementById(tipo + '-botaoRemove').style.display = 'inline';
        document.getElementById(tipo + '-desc').innerText = componenteLocalStorage.desc;
        if(tipo!='FONTE' && tipo!='CAIXA'){
            if(componenteLocalStorage.watts==null)
                WATTS+=50;
            else
                WATTS+=componenteLocalStorage.watts;
        }
        document.getElementById('WATTS').innerText= WATTS + ' W';  
        precototal += componenteLocalStorage.preco;
        StyleComponentes(tipo);
    }
        
}

function redirectTo(COMP) {

    if(COMP == "MOTHERBOARD")
    {
        if(Componentes[0].tipo == "CPU" && Componentes[0].nome != "Nenhum")
            window.location.href = `listagem.html?valor=${encodeURIComponent(COMP)}/${encodeURIComponent(Componentes[0].id)}`;
        else
        PopUp("Tem que escolher uma CPU Primeiro");
    }
    else if(COMP == "RAM")
    {
        if(Componentes[2].tipo == "MOTHERBOARD" && Componentes[2].nome != "Nenhum")
            window.location.href = `listagem.html?valor=${encodeURIComponent(COMP)}/${encodeURIComponent(Componentes[2].id)}`;
        else
            PopUp("Tem que escolher uma MotherBoard Primeiro");
    }
    else if (COMP == "FONTE")
    {
        let PCCompleto = 0;
        Componentes.forEach(componente => {
            if(componente.nome != 'Nenhum')
                PCCompleto++;
        });

        if(PCCompleto == 7)
            window.location.href = `listagem.html?valor=${encodeURIComponent(COMP)}/${encodeURIComponent(WATTS)}`;
        else
            PopUp("Finalize a config do PC toda antes de escolher a fonte.");
    }
    else
        window.location.href = `listagem.html?valor=${encodeURIComponent(COMP)}`;

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
            precototal = 0;
            delete storedItems[tipo];
            localStorage.setItem('selectedItems', JSON.stringify(storedItems));

            WATTS = 0;
            Componentes = [];
            loadComponents();

            const Comp = Componentes.find(key => key.tipo == tipo)

            document.getElementById(tipo + '-info').innerHTML = Comp.nome;
            document.getElementById(tipo + '-preco').innerHTML = Comp.preco;
            document.getElementById(tipo + '-img').src = Comp.imagem;
            document.getElementById(tipo + '-desc').style.display = 'none';
            document.getElementById(tipo + '-td').style.display = 'table-cell';
            document.getElementById(tipo + '-botaoAdd').style.display = 'inline';
            document.getElementById(tipo + '-botaoRemove').style.display = 'none';
            document.getElementById('WATTS').innerText= WATTS + ' W';  

            StyleComponentes(tipo);
        }
    }
}

function RemoverComponentesTodos() {
    const storedItems = JSON.parse(localStorage.getItem('selectedItems')) || {};
    Tipocomponentes.forEach(componente => {
        if (storedItems[componente]) {
            RemoverComponenteTabela(componente);
            Componentes = [];
        }
    });
}

function transferir() {
    let conteudo = '';

    for (const comp of Componentes)
    {
        if(comp.nome != "Nenhum")
        {
            conteudo += comp.tipo + ": " + comp.nome + " -> " + comp.preco.toFixed(2) + '€' + '%0A';
        }
    }

    const now = new Date();
    // Formatar a hora
    const hour = now.toLocaleString('pt-PT', { hour: '2-digit', minute: '2-digit' , second: '2-digit' });
    // Formatar a data
    const date = now.toLocaleString('pt-PT', { year: 'numeric', month: 'numeric', day: 'numeric' });
    // Combinar a hora e data na ordem desejada
    const formattedDateTime = `${hour} - ${date}`;

    // %0A = "\n" so que na url
    conteudo += "Total -> " + precototal.toFixed(2) + '€' + '%0A' + "Gerado por PCChip8Builder " + formattedDateTime;

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

function GuardarConfig(){

    let PCCompleto = 0;
    Componentes.forEach(componente => {
        if(componente.nome != 'Nenhum')
            PCCompleto++;
    });

    if(PCCompleto == 8)
    {
        const nomepc = prompt("Nome da Configuração:");
        let PCS = JSON.parse(localStorage.getItem("ConfigGuardadas")) || [];
        const existe = PCS.some(pc => pc.NomePC === nomepc);
        
        if(!existe)
        {
            let NovoPC = {
                NomePC: nomepc,
                CPU: Componentes[0],
                COOLER: Componentes[1],
                MOTHERBOARD: Componentes[2],
                RAM: Componentes[3],
                ARMAZENAMENTO: Componentes[4],
                GPU: Componentes[5],
                CAIXA: Componentes[6],
                FONTE: Componentes[7],
                preco: precototal
            };
            
            PCS.push(NovoPC);
            localStorage.setItem("ConfigGuardadas", JSON.stringify(PCS));
            window.location.href = `PcsMontados.html`;
        }
        else
            PopUp("Já existe uma configuração com este nome. Escolha outro nome."); 
    }
    else
        PopUp("Finalize a config do PC toda antes de guardar.");    
}
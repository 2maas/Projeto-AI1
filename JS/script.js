function data_horaF(){
    const dateTimeElement = document.querySelectorAll('.data_hora_texto');
    const now = new Date();

    // Formatar a hora
    const hour = now.toLocaleString('pt-PT', { hour: '2-digit', minute: '2-digit' });

    // Formatar a data
    const date = now.toLocaleString('pt-PT', { year: 'numeric', month: 'numeric', day: 'numeric' });

    // Combinar a hora e data na ordem desejada
    const formattedDateTime = `${hour} - ${date}`;

    // Atualizar o elemento com a data e hora formatada
    dateTimeElement.forEach((element) => {
      element.textContent = formattedDateTime;
  });
}

setInterval(data_horaF, 1000);

data_horaF();


function abrirSidebar() {
    document.getElementById("mySidebar").classList.add("open");
    document.getElementById("overlay").style.display = "block";
    document.body.style.overflow = "hidden"; 
  }
  
  function fecharSidebar() {
    document.getElementById("mySidebar").classList.remove("open");
    document.getElementById("overlay").style.display = "none";
    document.body.style.overflow = ""; 
  }
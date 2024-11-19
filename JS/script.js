function data_horaF(){
    const dateTimeElement = document.getElementById('data_hora');
    const now = new Date();

    // Formatar a hora
    const hour = now.toLocaleString('pt-PT', { hour: '2-digit', minute: '2-digit' });

    // Formatar a data
    const date = now.toLocaleString('pt-PT', { year: 'numeric', month: 'numeric', day: 'numeric' });

    // Combinar a hora e data na ordem desejada
    const formattedDateTime = `${hour} - ${date}`;

    // Atualizar o elemento com a data e hora formatada
    dateTimeElement.textContent = formattedDateTime;
}

setInterval(data_horaF, 1000);

data_horaF();
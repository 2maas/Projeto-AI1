let count = 1;
document.getElementById("radio1").checked = true;
const slidesContainer = document.querySelector(".slide");

setInterval(function(){
  ImagemSeguinte();
}, 4000);

function ImagemSeguinte(){
  if (count == 3) {
    // Exibe o slide 6 por apenas 1 segundo
    document.getElementById("radio4").checked = true;
    setTimeout(() => {count = 1;
      slidesContainer.style.transition = "none"; // Remove transição temporariamente
      document.getElementById("radio1" ).checked = true;

      // Restaura a transição para os próximos slides
      setTimeout(() => {
        slidesContainer.style.transition = ""; // Retorna à transição padrão
      }, 50); // Tempo curto para o slide 6 (1 segundo)
    }, 1000);

  } 
  else
  {
    count++;
    document.getElementById("radio" + count).checked = true;
  }


}

function setManualSelection(index) {
  count = index;
  document.getElementById("radio" + count).checked = true;
}

for (let i = 1; i <= 3; i++) {
  document.getElementById("radio" + i).addEventListener("click", function() {
    setManualSelection(i);
  });
}



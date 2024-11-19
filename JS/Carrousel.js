let count = 1;
document.getElementById("radio1").checked = true;

setInterval(function(){
  nextImage();
}, 4000);

function nextImage(){
  count++;
  if(count > 3){
    count = 1;
  }
  document.getElementById("radio" + count).checked = true;
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



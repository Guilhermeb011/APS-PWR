// criação da função para abertura de aba

function abreTab(evt, tabInfo) {
  var i, tabcontent, tablinks;

  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  document.getElementById(tabInfo).style.display = "block";
  evt.currentTarget.className += " active";
}

var radio = document.querySelector('.manual-btn')
var cont = 1

document.getElementById('radio1').checked = true

//Função para presetar o time e afins das mudanças da imagem

setInterval(() => (
  proximaimg()
), 5000)

function proximaimg() {
  cont++

  if (cont > 3) (
    cont = 1
  )

  document.getElementById('radio' + cont).checked = true

}
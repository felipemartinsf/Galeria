let isa = document.querySelector('h1');
let schoneborn = 'Galeria da nossa viagem';
let campos = 'Obrigado';

schoneborn.split('').forEach((l, index) => {
    setTimeout(() => {
        isa.innerHTML += l;
        if (index === schoneborn.length - 1) {
            setTimeout(() => {
                isa.innerHTML = ''; 
                campos.split('').forEach((k, idx) => {
                    setTimeout(() => {
                        isa.innerHTML += k;
                    }, 80 * idx);
                });
            }, 1000); 
        }
    }, 80 * index);
});
function exibirtexto(){
var textosecreto = document.getElementById('secret-text')
textosecreto.style.display = 'block'
}
function exibirFoto(src,legenda) {
    var fotoMaior = document.getElementById('foto-maior');
    var fotoMaiorImg = document.getElementById('foto-maior-img');
    var fotoMaiorLegenda = document.getElementById('foto-maior-legenda');

    fotoMaiorImg.src = src;
    fotoMaiorLegenda.innerHTML = legenda;

    fotoMaior.style.display = 'block';
    fotoMaiorImg.style.transform = 'none';
    fotoMaiorImg.style.boxShadow = 'none';

  }
  document.getElementById('foto-maior').onclick = function() {
    this.style.display = 'none';
  };
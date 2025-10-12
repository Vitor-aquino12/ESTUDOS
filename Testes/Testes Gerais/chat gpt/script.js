
const overlay = document.getElementById('overlay');
const abrir = document.getElementById('abrir');
const voltar = document.getElementById('voltar');

abrir.addEventListener('click', () => {
  overlay.classList.add('mover'); // desliza pra direita
});

voltar.addEventListener('click', () => {
  overlay.classList.remove('mover'); // volta pra esquerda
});
 
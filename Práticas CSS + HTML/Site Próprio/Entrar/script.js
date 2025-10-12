const overlay = document.getElementById('overlay')
const abrir = document.getElementById('singbtn')
const voltar = document.getElementById('logbtn')

abrir.addEventListener('click', () => {
    overlay.classList.add('mover');
});

voltar.addEventListener('click', () => {
    overlay.classList.remove('mover');
});
const mario = document.querySelector('.mario');
const cano = document.querySelector('.cano');
const botaoIniciar = document.querySelector('.iniciar');

const pulo = () => {
    mario.classList.add('pulo');

    setTimeout(() => {
        mario.classList.remove('pulo');
    }, 500);
}

const loop = setInterval(() => {

    const posicaoDoCano = cano.offsetLeft;
    const posicaoDoMario = +window.getComputedStyle(mario).bottom.replace('px', '');

    if (posicaoDoCano <= 120 && posicaoDoCano > 0 && posicaoDoMario < 80) {
        cano.style.animation = 'none';
        cano.style.left = `${posicaoDoCano}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${posicaoDoMario}px`;

        mario.src = './imagens/gamerOver.png';
        mario.style.marginLeft = '5px';

        clearInterval(loop);
        botaoIniciar.style.display = 'block';
        
    }

}, 10);

document.addEventListener('click', pulo)

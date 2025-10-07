let btnMenu = document.getElementById('btn-menu');
let menu = document.getElementById('menu-mobile');
let overlay = document.getElementById('overlay-menu');
let btnFechar = document.querySelector('.btn-fechar');

btnMenu.addEventListener('click', () => {
    menu.classList.add('abrir-menu');
    overlay.classList.add('mostrar-overlay');
});

btnFechar.addEventListener('click', () => {
    menu.classList.remove('abrir-menu');
    overlay.classList.remove('mostrar-overlay');
});

overlay.addEventListener('click', () => {
    menu.classList.remove('abrir-menu');
    overlay.classList.remove('mostrar-overlay');
});

// Animação no botão de envio
const formButton = document.querySelector('form input[type="submit"]');

if (formButton) {
    formButton.addEventListener('click', () => {
        formButton.style.transform = 'scale(0.95)';
        setTimeout(() => {
            formButton.style.transform = 'scale(1)';
        }, 150);
    });
}

// abrir
btnMenu.addEventListener('click', () => {
    menu.classList.add('abrir-menu');
});

// fechar
btnFechar.addEventListener('click', () => {
    menu.classList.remove('abrir-menu');
    overlay.style.display = "none";
});

// overlay fecha também
overlay.addEventListener('click', () => {
    menu.classList.remove('abrir-menu');
    overlay.style.display = "none";
});

// fechar menu ao clicar em link
document.querySelectorAll('#menu-links a').forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.remove('abrir-menu');
        overlay.style.display = "none";
    });
});

// Conhecimentos
document.querySelector('a[href="#conhecimentos"]').addEventListener('click', (e) => {
    e.preventDefault(); // evita pulo instantâneo
    document.getElementById('conhecimentos').scrollIntoView({ behavior: 'smooth' });
    menu.classList.remove('abrir-menu');
    overlay.style.display = "none";
});

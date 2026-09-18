
const botaoSepia = document.querySelector('button:has(span:contains("Modo Sépia"))') || document.querySelector('.modo-sepia');
const botaoAlternarGeral = document.querySelector('header button'); // Botão com o ícone de sol/lua no topo


function alternarTema(classeTema) {
    const htmlElement = document.documentElement;
    

    htmlElement.classList.remove('dark-mode', 'sepia-mode', 'light-mode');
    

    htmlElement.classList.add(classeTema);
    

    localStorage.setItem('theme-preference', classeTema);
}


if (botaoSepia) {
    botaoSepia.addEventListener('click', () => alternarTema('sepia-mode'));
}

if (botaoAlternarGeral) {
    botaoAlternarGeral.addEventListener('click', () => {
        const atual = document.documentElement.classList.contains('light-mode') ? 'dark-mode' : 'light-mode';
        alternarTema(atual);
    });
}

const linksArtigos = document.querySelectorAll('span:contains("Ler artigo"), .ler-artigo, .categoria-btn');

linksArtigos.forEach(link => {
    link.addEventListener('click', (event) => {
        const urlDestino = link.getAttribute('data-href') || '#'; 
        
        if (urlDestino !== '#') {
            window.location.href = urlDestino;
        } else {
            console.warn("Aviso: Este link ainda não tem uma URL de destino configurada.");
        }
    });
});

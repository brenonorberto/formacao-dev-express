function ultima() {
    console.log('Função última');
}

function terciaria() {
    console.log('[INICIO] Função terciária');
    ultima();
    console.log('[FIM] Função terciária');
}

function secundaria() {
    console.log('[INICIO] Função secundária');
    terciaria();
    console.log('[FIM] Função secundária');
}

function principal() {
    console.log('[INICIO] Função principal');
    secundaria();
    console.log('[FIM] Função principal');
}

principal();
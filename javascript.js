// Lista de perguntas extraídas do documento [cite: 3, 10, 17, 23, 29, 35, 41, 47, 53, 59, 67, 73, 79, 86, 92]
const perguntas = [
    { q: "Qual é o bichinho muito simpático que é o símbolo da festa mais famosa de Brusque, a Fenarreco?", options: ["O Cãozinho", "O Gatinho", "O Marreco", "O Leão"], correct: 2 }, // [cite: 3, 6, 7]
    { q: "O que as pessoas adoram comer quando vão à festa da Fenarreco?", options: ["Hambúrguer de minhoca", "Sushi", "Marreco recheado", "Sopa de pedra"], correct: 2 }, // [cite: 10, 13, 14]
    { q: "Brusque é uma cidade muito famosa por fabricar o quê nas suas grandes fábricas?", options: ["Naves espaciais", "Roupinhas e tecidos", "Foguetes coloridos", "Algodão doce"], correct: 1 }, // [cite: 17, 19]
    { q: "Qual é o nome do rio grande que passa bem no meio da cidade de Brusque?", options: ["Rio Amazonas", "Rio de Janeiro", "Rio Itajaí-Mirim", "Rio de Chocolate"], correct: 2 }, // [cite: 23, 26]
    { q: "Onde os primeiros moradores fizeram suas primeiras casinhas?", options: ["Na lua", "Perto do Rio", "No fundo do mar", "Em cima de nuvens"], correct: 1 }, // [cite: 29, 31]
    { q: "Quem foram as pessoas que vieram de muito longe, de navio, para ajudar a construir Brusque?", options: ["Os astronautas", "Os imigrantes europeus", "Os marcianos", "Os dinossauros"], correct: 1 }, // [cite: 35, 37]
    { q: "Onde podemos ir em Brusque para ver macacos, pássaros e passear no meio de muitas árvores?", options: ["Na Padaria", "No Parque Zoobotânico", "No Banco", "Na Farmácia"], correct: 1 }, // [cite: 41, 43]
    { q: "Qual doce fofinho, que parece um bolo com farofinha doce em cima, é muito famoso em Brusque?", options: ["A Cuca", "Alho", "Gelo", "Cebola"], correct: 0 }, // [cite: 47, 48]
    { q: "Quando é outubro, a cidade fica toda enfeitada e feliz para qual festa gigante?", options: ["Festa Junina", "Natal", "Fenarreco", "Páscoa"], correct: 2 }, // [cite: 53, 56]
    { q: "Como é chamada a roupinha bonita que as pessoas usam para ir à Fenarreco?", options: ["Fato de mergulho", "Traje típico", "Fato de Super-herói", "Pijama"], correct: 1 }, // [cite: 59, 61, 62]
    { q: "Qual era o nome da primeira fábrica de tecidos de Brusque?", options: ["Fábrica de Brinquedos", "Fábrica de Nuvens", "Fábrica Renaux", "Fábrica de Pipoca"], correct: 2 }, // [cite: 67, 70]
    { q: "Em Brusque tem lugares enormes chamados FIP e Stop Shop. O que vamos lá comprar?", options: ["Roupas e sapatos", "Foguetes", "Elefantes", "Nuvens de chuva"], correct: 0 }, // [cite: 73, 74]
    { q: "Existe um lugar muito lindo e grandalhão em Brusque que parece um castelo. Qual é?", options: ["Santuário de Azambuja", "Castelo do Drácula", "Casa de Doces", "Palácio de Gelo"], correct: 0 }, // [cite: 79, 80, 81]
    { q: "Um senhor muito importante ajudou a criar Brusque. Ele era chamado de Barão de...?", options: ["Chocolate", "Queijo", "Schneeburg", "Morango"], correct: 2 }, // [cite: 86, 89]
    { q: "O que acontece na rua quando é o aniversário da cidade de Brusque?", options: ["Um desfile muito bonito", "Viagem à lua", "Chove sumo", "Todos viram estátuas"], correct: 0 } // [cite: 92, 93]
];

let perguntaAtual = 0;

// Esta função faz a troca de telas
window.iniciarJogo = function () {
    const telaInicial = document.getElementById('tela-inicial');
    const telaPerguntas = document.getElementById('tela-perguntas');

    if (telaInicial && telaPerguntas) {
        telaInicial.style.display = 'none';
        telaPerguntas.style.display = 'block';
        carregarPergunta();
    } else {
        console.error("Erro: Não encontrei as IDs 'tela-inicial' ou 'tela-perguntas' no seu HTML.");
    }
};

function carregarPergunta() {
    const pergunta = perguntas[perguntaAtual];
    document.getElementById('num-pergunta').innerText = perguntaAtual + 1;
    document.getElementById('texto-pergunta').innerText = pergunta.q;

    const containerRespostas = document.getElementById('opcoes-respostas');
    containerRespostas.innerHTML = '';

    pergunta.options.forEach((opt, index) => {
        const btn = document.createElement('button');
        btn.className = 'btn-resposta';
        btn.innerHTML = `<span>${opt}</span>`;
        btn.onclick = () => verificarResposta(index);
        containerRespostas.appendChild(btn);
    });
}

function verificarResposta(index) {
    const correta = perguntas[perguntaAtual].correct;
    const overlay = document.getElementById('overlay-feedback');
    const conteudo = document.getElementById('feedback-conteudo');

    overlay.style.display = 'flex';

    if (index === correta) {
        conteudo.className = 'feedback-card acerto';
        document.getElementById('feedback-titulo').innerText = "ACERTOU!";
        document.getElementById('feedback-subtitulo').innerText = "MUITO BEM!";
    } else {
        conteudo.className = 'feedback-card erro';
        document.getElementById('feedback-titulo').innerText = "FOI QUASE!";
        document.getElementById('feedback-subtitulo').innerText = "TENTE NA PRÓXIMA";
    }
}

window.proximaPergunta = function () {
    document.getElementById('overlay-feedback').style.display = 'none';
    perguntaAtual++;

    if (perguntaAtual < perguntas.length) {
        carregarPergunta();
    } else {
        alert("Parabéns! Você conheceu tudo sobre Brusque!");
        location.reload();
    }
};
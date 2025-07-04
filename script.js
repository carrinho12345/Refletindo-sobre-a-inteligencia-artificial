const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Assim que saiu da escola você se depara com uma nova tecnologia, um chat que consegue responder todas as dúvidas que uma pessoa pode ter, ele também gera imagens e áudios hiper-realistas. Qual o primeiro pensamento?",
        alternativas: [
            {
                texto: "Isso é assustador!",
                afirmacao: "No início ficou com medo do que essa tecnologia pode fazer."
            },
            {
                texto: "Isso é maravilhoso!",
                afirmacao: "Quis saber como usar IA no seu dia a dia."
            }
        ]
    },
    // Adicionando a nova pergunta sobre biologia
    {
        enunciado: "Você está estudando biologia e se depara com a seguinte informação: 'A fotossíntese é um processo biológico essencial para a produção de alimentos e oxigênio na Terra. Através da luz solar, plantas convertem dióxido de carbono e água em glicose e oxigênio.' Qual é sua reação?",
        alternativas: [
            {
                texto: "Isso é fascinante! A natureza tem formas incríveis de produzir energia.",
                afirmacao: "Você ficou maravilhado com a inteligência natural dos processos biológicos e começou a pesquisar mais sobre bioenergias."
            },
            {
                texto: "Interessante, mas será que a IA pode melhorar ou acelerar esse processo de alguma forma?",
                afirmacao: "Você passou a se interessar por como a IA pode simular ou otimizar processos biológicos e estuda mais sobre bioengenharia."
            }
        ]
    },
    // Restante das perguntas anteriores...
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();

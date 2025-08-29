const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você acredita que o futuro da agricultura será mais tecnológico ou mais sustentável?",
        alternativas: [
            {
                texto: "Acredito que a agricultura vai se transformar em um grande centro de inovação, com o uso de drones, inteligência artificial e sensores para aumentar a produtividade.",
                afirmacao: "Você é uma pessoa reflexiva e busca aprendizado e conhecimento."
            },
            {
                texto:  "O futuro está na agricultura regenerativa, com foco na preservação ambiental, na redução do uso de químicos e na adoção de práticas que promovam a saúde do solo.",
                afirmacao: "Você é uma pessoa observadora, pois se preocupa com o bem estar dos seus alunos."
            }    
           
        ]
    },
    {
       
            enunciado: "Qual é o papel da agroindústria no desenvolvimento do Brasil?",
            alternativas: [
                {
                    texto: "A agroindústria é essencial para a geração de empregos, exportação e crescimento econômico. Precisamos expandir cada vez mais para garantir o sucesso do país.",
                    afirmacao: "Você demonstra um perfil  de pesquisador e inovador que busca por meio da inovação soluções para o meio ambiente e sustentabilidade das gerações posteriores."
                },
                {
                    texto:  "O crescimento da agroindústria precisa estar mais alinhado com práticas de preservação ambiental e o respeito aos direitos das comunidades locais. ",
                    afirmacao: "Você é uma pessoa que dá ênfase em priorizar os recursos disponíveis, pensando no meio ambiente e sem descartar o viés econômico."
                }    
               
            ]
        },
        {
            enunciado: "Você acha que a agricultura familiar ainda tem espaço no mercado?",

            alternativas: [
                {
                    texto: "A agricultura familiar é a base de muitas comunidades e é importante para manter a diversidade produtiva e os sabores regionais",
                    afirmacao: "Você tem consciência que é importante ter uma boa auto-estima e procura se aprofundar mais sobre o assunto, vendo a vida de um jeito positivo."
                },
                {
                    texto:    "A agricultura familiar precisa se adaptar às novas demandas do mercado e incorporar tecnologias para aumentar a escala e a competitividade.",
               
                    afirmacao: "Você demomostra que precisa se conhecer mais e mostra uma consciência de uma crescente necessidade de cuidar mais da própria percepção e bem-estar emocional."
                }    
               
            ]
        },
]
   
let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta(){
    if(atual >= perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}
function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }

}
function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++
    mostraPergunta();
}
function mostraResultado(){
    caixaPerguntas.textContent = "Olha só o que podemos afirmar sobre você...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}



mostraPergunta();

const url = "https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais.json";

async function visualizarInformacoesGlobais(){
    const res = await fetch(url);
    const dados = await rest.json();

const pessoasConectadas = dados.total_pessoas_conectadas/le9;
const pessoasNoMundo = dados.total_pessoas_mundo/Ie9;
const horas = parseInt(dados.tempo_medio);
const minutos = Math.round((dados.tempo_medio - horas) * 60)
const porcentagemConectada = ((pessoasConectadas/pessoasNoMundo) * 100).toFixed(2)

const paragrafo = document.createElement('p');
paragrafo.classList.add('graficos-container_texto');
paragrafo.innerHTML = `Você sabia que o mundo tem <span>${pessoasNoMundo} bilhões</span> 
de pessoas e que aproximadamente <span>${pessoasConectadas} bilhôes</span> estão conectadas
em alguma rede social e passem em média<span>${horas} </span> horas e ${minutos} munutos conectadas.
<br> Isso significa que aproximadamente ${porcentagemConectada}% de  pessoas estão conectadas em alguma rede social.`

document.getElementById('graficos-container').appendChild(paragrafo) 
    
}

visualizarInformacoesGlobais();
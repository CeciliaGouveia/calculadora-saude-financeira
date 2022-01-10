const resultado = document.querySelector('.resultado');

const porcento = document.querySelector('.porcento');

const form = document.querySelector('.container');

form.addEventListener('submit', function (e) {

    e.preventDefault();

    const inputRendaUltimoMes = e.target.querySelector('.rendaUltimoMes');

    const inputRendaPenultimoMes = e.target.querySelector('.rendaPenultimoMes');

    const inputGastoUltimoMes = e.target.querySelector('.gastoUltimoMes');

    const inputGastoPenultimoMes = e.target.querySelector('.gastoPenultimoMes');

    const rendaUltimoMes = Number(inputRendaUltimoMes.value);

    const rendaPenultimoMes = Number(inputRendaPenultimoMes.value);

    const gastoUltimoMes = Number(inputGastoUltimoMes.value);

    const gastoPenultimoMes = Number(inputGastoPenultimoMes.value);

    const mediaRenda = mediaArtitmetica(rendaUltimoMes, rendaPenultimoMes);

    const mediaGasto = mediaArtitmetica(gastoUltimoMes, gastoPenultimoMes);

    porcentagem(mediaGasto, mediaRenda);

});

function mediaArtitmetica(dadoUltimoMes, dadoPenultimoMes) {
    const media = (dadoUltimoMes + dadoPenultimoMes) / 2;
    return media;
};

function porcentagem(mediaGasto, mediaRenda) {
    const percentual = Math.floor((mediaGasto / mediaRenda) * 100);

    if (percentual <= 50) {
        resultado.innerHTML = `Sua saúde financeira está sob controle. Que tal investir uma parte dessa gordurinha do mês no CDB Inter e utilizar a outra parte para relaxar um pouquinho?`
    } else if (percentual > 50 && percentual <= 80) {
    resultado.innerHTML = `Sua saúde financeira está na média do recomendado. Que tal investir essa gordurinha do mês no CDB Inter?`
    } else if (percentual > 80) {
        resultado.innerHTML = `Alerta vermelho! Sua saúde financeira merece atenção.`
    } else {
        resultado.innerHTML = `Dados inválidos.`
    };


    porcento.innerHTML = `Suas despesas tomaram ${percentual}% de sua renda.` 
};    

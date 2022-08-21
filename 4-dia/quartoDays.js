

function Jogar() {
    //variáveis do jogo
    let máximo = 10;
    let mínimo = 0;
    let memoria = Math.floor(Math.random() * (máximo - mínimo + 1) + mínimo)
    var numero = window.document.getElementById('numero').value
    let acertou = false


    // lógica da rodada do jogo 
    for (let contador = 0; contador < 2; contador++) {

        if (memoria == numero) {
            var resp = window.document.getElementById('result')
            resp.innerHTML = `acertou! Parabéns......o número era ${memoria}`
            acertou = true;
            break;
        }
        // aqui limpa o select
        numero = window.document.getElementById('numero').value = ""
        alert("Errado! voçê tem mais uma chance!");
        //aqui o for dá mais duas chances!
        numero = prompt('digite aqui o proximo valor !')
    }
    // aqui após três tentativa o game encerra!
    if (!acertou) {
        var resp = window.document.getElementById('result')
        resp.innerHTML = `Infelizmente, você não acertou. o número era ${memoria}`
    }
}
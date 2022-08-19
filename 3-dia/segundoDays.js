

function Resposta() {
    let res1 = window.document.getElementById('res1').value
    let res2 = window.document.getElementById('res2').value
    let res3 = window.document.getElementById('res3').value
    let resposta = window.document.getElementById('container')

    if (res1 && res2 && res3) {

        resposta.innerHTML = `Olá ${res1}, você tem ${res2} anos e já
    está aprendendo ${res3}!`;

    } else {

        resposta.innerHTML = `Responda todas as perguntas para seguir adiante!`
    }

}


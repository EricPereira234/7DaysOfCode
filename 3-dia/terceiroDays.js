

function Resposta() {
    //variáveis do sistema!
    let name = prompt('Qual o seu nome ?');
    let pergunta1 =
        prompt(`você quer seguir para área de Front-End ou seguir para a
    área de Back-End ?`);
    let pergunta2;
    let pergunta3;
    let pergunta4;
    let pergunta5;
    let pergunta6;
    let contador = 0;
    //fim das variáveis !

    if (pergunta1 == 'Front-End') {
        pergunta2 = prompt(`quer aprender React ou aprender Vue ?`)
        pergunta3 = prompt(`você deseja se especializar nesta área ou 
        continuar evoluindo para ser um Fullstack ?`)
    } if (pergunta1 == 'Back-End') {
        pergunta2 = prompt(`você poderá aprender C# ou aprender Java !`)
    }

    //repetição de um bloco de perguntas
    while (contador < 1) {
        pergunta4 =
            prompt(`Tem mais alguma tecnologia que você gostaria de aprender?`)
        pergunta5 =
            prompt(`Tem mais alguma tecnologia que você gostaria de aprender?`)
        pergunta6 =
            prompt(`Tem mais alguma tecnologia que você gostaria de aprender?`)
        contador++;

    }

    //aqui exibe a mensagem final para o usuário
    let resposta = window.document.getElementById('container')
    resposta.innerHTML = `Olá <b>${name}</b> ! <br/> você escolheu ser ${pergunta1},
    e você quer aprender ${pergunta2}, <br/>
    e você pretende ainda aprender ${pergunta4}, ${pergunta5}, ${pergunta6}.<br/>
     <b> parabéns continue assim!</b>
    `
}
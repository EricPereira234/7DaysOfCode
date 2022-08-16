let numeroUm = 1
let stringUm = '1'
let numeroTrinta = 30
let stringTrinta = '30'
let numeroDez = 11
let stringDez = '10'


// primeira comparação
if (numeroUm == stringUm) {

    let resultado = window.document.getElementById('res1')

    resultado.innerHTML = `As variáveis numeroUm =  ${numeroUm} e
    stringUm =  ${stringUm} tem o mesmo valor, mas tipos
    diferentes`;

} else {

    resultado.innerHTML = `As variáveis numeroUm = ${numeroUm} e
    stringUm = ${stringUm} não tem o mesmo valor`
}



//segunda comparação
if (numeroTrinta === stringTrinta) {

    let resultado2 = window.document.getElementById('res2')

    resultado2.innerHTML = `As variáveis numeroTrinta = ${numeroTrinta} e
    stringTrinta = ${stringTrinta} tem o mesmo valor e mesmo
    tipo`

} else {

    let resultado2 = window.document.getElementById('res2')

    resultado2.innerHTML = `As variáveis  numeroTrinta = ${numeroTrinta} e
stringTrinta = ${stringTrinta} não tem o mesmo tipo`

}



//terceira comparação
if (numeroDez == stringDez) {

    let resultado3 = window.document.getElementById('res3')

    resultado3.innerHTML = `As variáveis numeroDez = ${numeroDez} e
stringDez = ${stringDez} tem o mesmo valor, mas tipos
diferentes`

} else {

    let resultado3 = window.document.getElementById('res3')

    resultado3.innerHTML = `As variáveis numeroDez = ${numeroDez} e
stringDez = ${stringDez} não tem o mesmo valor`

}

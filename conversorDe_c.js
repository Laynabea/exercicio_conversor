let resposta = document.getElementById('resposta')

function calcular(){
    let celsius = Number(document.getElementById('celsius').value)

    let resultado = ((celsius * 9/5) + 32)

    resposta.innerHTML = ("Resultado = ", resultado)
}







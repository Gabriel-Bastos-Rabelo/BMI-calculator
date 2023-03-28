function calcularPeso() {
    const form = document.querySelector(".form")
    const resultado = document.querySelector(".calculo-resultado")

    function enviarDados(evento) {
        evento.preventDefault()
        const altura = document.getElementById("altura")
        const peso = document.getElementById("peso")
        if (verificarValores(peso.value, altura.value)) {
            resultado.innerHTML = "Dados inválidos"
        }
        else {
            const imc = peso.value / ((altura.value * altura.value) / 10000)
            const imc_situação = imc_resultado(imc)
            resultado.innerHTML = `<h2>O seu imc é igual a: ${imc.toFixed(2)} e sua situação é: ${imc_situação}</h2>`
            console.log(imc)
        }
    }




    form.addEventListener("submit", enviarDados)
}
calcularPeso()

function imc_resultado(imc) {
    if (imc < 18.5) {
        return "Abaixo do peso"
    } else if (imc >= 18.5 && imc < 24.9) {
        return "Peso Normal"
    } else if (imc >= 25 && imc < 29.9) {
        return "Sobrepeso"
    } else if (imc >= 30 && imc < 34.9) {
        return "Obesidade grau 1"

    } else if (imc >= 35 && imc < 39.9) {
        return "Obesidade grau 2"
    } else {
        return "Obesidade grau 3"
    }
}

function verificarValores(peso, altura) {
    if (peso === "" || altura === "") {
        return true

    } else {
        return false
    }

}
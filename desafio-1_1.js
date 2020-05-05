// Desafio Cálculo de IMC
const pacient = {
    name: 'Keaune',
    weight: 90,
    height: 1.80
}

function calculateBMI (pacient) {
    const bmi = pacient.weight / (pacient.height * pacient.height)

    if (bmi >= 30) {
        console.log(`${pacient.name}, seu imc é ${bmi.toFixed(2)}, você está acima do peso.`)
    } else {
        console.log(`${pacient.name}, seu imc é ${bmi.toFixed(2)}, você não está acima do peso.`)
    }
}

calculateBMI(pacient)
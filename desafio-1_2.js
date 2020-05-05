// Desafio cálculo de aposentadoria
const users = [
    {
        name: 'Lira',
        sex: 'F',
        age: 59,
        contribution: 28
    },
    {
        name: 'Matteo',
        sex: 'M',
        age: 65,
        contribution: 35
    }
]

function calculateRetirement() {
    for (let user of users) {

        const calculation = user.age + user.contribution

        if (user.sex == 'F' && user.contribution >= 30 && calculation >= 85) {
            console.log(`${user.name}, você já pode se aposentar!`)
        } else if (user.sex == 'M' && user.contribution >= 35 && calculation >= 95) {
            console.log(`${user.name}, você já pode se aposentar!`)
        } else {
            console.log(`${user.name}, você ainda não pode se aposentar!`)
        }
    }
}

calculateRetirement(users)
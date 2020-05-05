// Desafio soma de despesas e receitas
const users = [
    {
        name: 'Salvio',
        income: [115.3, 48.7, 98.3, 14.5],
        expenses: [85.3, 13.5, 19.9]
    },
    {
        name: 'Marcio',
        income: [24.6, 214.3, 45.3],
        expenses: [185.3, 12.1, 120.0]
    },
    {
        name: 'Lucia',
        income: [9.8, 120.3, 340.2, 45.3],
        expenses: [450.2, 29.9]
    }
]

function sendMessageOfUsersBalance (users) {
    for (let user of users) {
        const balanceResult = calculateBalance(user.income, user.expenses)
    
        if (balanceResult >= 0) {
            console.log(`${user.name} possui balance POSITIVO de ${balanceResult.toFixed(2)}.`)
        } else {
            console.log(`${user.name} possui balance NEGATIVO de ${balanceResult.toFixed(2)}.`)
        }
    }
}

function sumNumbers(numbers) {
    let sum = 0
    for (let number of numbers) {
        sum += number
    }
    return sum
}

function calculateBalance(income, expenses) {
    let totalIncome = sumNumbers(income)
    let totalExpenses = sumNumbers(expenses)
    let balance = totalIncome - totalExpenses
    return balance
}

sendMessageOfUsersBalance(users)
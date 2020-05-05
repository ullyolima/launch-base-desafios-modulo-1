// Desafio aplicação: operações bancárias
const user = {
    name: 'Maria',
    transactions: [],
    balance: 0
}

function createTransaction(transaction) {
    user.transactions.push(transaction)

    if (transaction.type == 'credit') {
        user.balance += transaction.value

    } else if (transaction.type == 'debit') {
        user.balance -= transaction.value
    }
}

function getHigherTransactionByType(typeOfTransaction) {
    let higherTransaction = { type: typeOfTransaction, value: 0 }

    for (transaction of user.transactions) {

        if (transaction.type == typeOfTransaction && transaction.value > higherTransaction.value) {
            higherTransaction.value = transaction.value
        }
    }

    return higherTransaction
}

function getAverageTransactionValue() {
    let sum = 0

    for (transaction of user.transactions) {
        sum += transaction.value
    }

    const averageOfTransactions = sum / user.transactions.length
    return averageOfTransactions
}

function getTransactionsCount() {
    let transactionsCount = { credit: 0, debit: 0 }

    for (transaction of user.transactions) {

        if (transaction.type == 'credit') {
            transactionsCount.credit += 1
            
        } else if (transaction.type == 'debit') {
            transactionsCount.debit += 1
        }
    }

    return transactionsCount
}

createTransaction({ type: 'credit', value: 50 })
createTransaction({ type: 'credit', value: 120 })
createTransaction({ type: 'debit', value: 80 })
createTransaction({ type: 'debit', value: 30 })

console.log(`Balance: ${user.balance}`)

getHigherTransactionByType('credit')
getHigherTransactionByType('debit')

getAverageTransactionValue()

getTransactionsCount()




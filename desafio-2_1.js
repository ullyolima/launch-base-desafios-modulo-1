// Desafio construção e impressão de objetos
const company = {
    name: 'Rocketseat',
    color: 'Roxo',
    focus: 'Programação',
    address: {
        street: 'Rua Guilherme Gembala',
        number: 260
    }
}

console.log(`A empresa ${company.name} está localizada em ${company.address.street}, ${company.address.number}.`)
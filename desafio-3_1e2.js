// Desafio usuários e tecnologias + Desafio de busca por tecnologia
const search = 'CSS'
const users = [
    {
        name: 'Lilian',
        technologies: ['JavaScript', 'NodeJS', 'SQL', 'CSS']
    },
    {
        name: 'Domi',
        technologies: ['C#', '.NET', 'CSS']
    },
    {
        name: 'Charlie',
        technologies: ['NodeJS', 'SQL']
    }
]

function sendMessageUsersTechs(users) {
    for (user of users) {
        console.log(`${user.name} trabalha com ${user.technologies}.`)
    }
}

function verifyCss(user) {
    for (let tech of user.technologies) {
        if (tech == search) {
            return true
        }
    }
}

function sendMessageUsersCss(users) {
    for (user of users) {
        const trabalhaComCss = verifyCss(user)
        if (trabalhaComCss) {
            console.log(`O usuário ${user.name} trabalha com CSS`)
        }
    }
}

sendMessageUsersTechs(users)
sendMessageUsersCss(users)
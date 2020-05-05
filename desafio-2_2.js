// Desafio vetores e objetos
const developer = {
    name: 'Kira',
    age: 45,
    technologies: [
        {
            name: 'C++',
            specialty: 'Desktop'
        },
        {
            name: 'Python',
            specialty: 'Data Science'
        },
        {
            name: 'JavaScript',
            specialty: 'Web/Mobile'
        }
    ]
}

console.log(`${developer.name} tem ${developer.age} anos e usa a tecnologia ${developer.technologies[0].name} com especialidade em ${developer.technologies[0].specialty}.`)
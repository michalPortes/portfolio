const axios = require('axios').default

// API's do github
export const Repository = async () => {
  return await axios.get('https://api.github.com/users/michalPortes/repos')
}

export const Profile = async () => {
  return await axios.get('https://api.github.com/users/michalPortes')
}

export const ReadMe = async () => {
  return await axios.get(
    'https://api.github.com/repos/michalPortes/michalPortes/readme',
    {
      headers: {
        'Content-Type': 'text/plain; charset=utf-8'
      }
    }
  )
}

//Poke API

export const Pokemons = async () => {
  return await axios.get(`https://pokeapi.co/api/v2/pokemon/ditto`)
}

// JSON para a listagem dos trabalhos
export const JOBS = [
  {
    id: 1,
    year: 2023,
    title: 'Desenvolvedor de Software',
    periodStart: `set de 2022`,
    periodEnd: `a moment`,
    description: `- Desenvolvimento front-end Web e Mobile tendo como principal linguagem o React, e realizar manutenções para Web nas linguagens Angular | VB.NET.`,
    tecnologies: `Principais tecnologias: React.Js | JavaScript | Angular | .NET | Oracle SQL Developer | Bootstrap | Pentaho`
  },
  {
    id: 2,
    year: 2022,
    title: 'Controlador de produdao (Dev)',
    periodStart: `jun 2021`,
    periodEnd: `set 2022`,
    description: `- Desenvolvimento de sistema web para geração e análise de documentações.`,
    tecnologies: `Principais tecnologias: Angular | .NET | Oracle SQL Developer | Bootstrap | Pentaho`
  },
  {
    id: 3,
    year: 2021,
    title: 'Mecanico montador estrutural de aeronaves',
    periodStart: `jan 2019`,
    periodEnd: `fev 2021`,
    description: ``,
    tecnologies: ``
  },
  {
    id: 4,
    year: 2018,
    title: 'Menor Aprendiz',
    periodStart: `jan 2015`,
    periodEnd: `fev 2018`,
    description: `- Aprendiz do SENAI de SJC`,
    tecnologies: ``
  }
]

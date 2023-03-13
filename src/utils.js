import { FaReact, FaAngular, FaSass } from 'react-icons/fa'
import { DiJavascript1 } from 'react-icons/di'
import { SiStyledcomponents } from 'react-icons/si'
import { TbSql } from 'react-icons/tb'

const axios = require('axios').default

// API's do github
export const Repository = async () => {
  return await axios.get('https://api.github.com/users/michalPortes/repos')
}

export const Profile = async () => {
  return await axios.get('https://api.github.com/users/michalPortes')
}

//Poke API

export const Pokemons = async () => {
  return await axios.get(`https://pokeapi.co/api/v2/pokemon/ditto`)
}

//                               ##############JSONS##############

export const TECH = [
  {
    id: 2,
    name: 'JavaScript',
    icon: <DiJavascript1 />,
    URL: 'https://developer.mozilla.org/pt-BR/docs/Web/JavaScript'
  },
  {
    id: 1,
    name: 'React',
    icon: <FaReact />,
    URL: 'https://reactjs.org/'
  },

  {
    id: 4,
    name: 'StyledComponents',
    icon: <SiStyledcomponents />,
    URL: 'https://styled-components.com/docs'
  },
  {
    id: 5,
    name: 'Sass',
    icon: <FaSass />,
    URL: 'https://sass-lang.com/documentation/'
  },
  {
    id: 2,
    name: 'SQL',
    icon: <TbSql />,
    URL: 'https://docs.oracle.com/en/database/oracle/'
  },
  {
    id: 3,
    name: 'Angular',
    icon: <FaAngular />,
    URL: 'https://angular.io/docs'
  }
]

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

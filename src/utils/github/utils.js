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
    id: 1,
    name: 'JavaScript',
    icon: <DiJavascript1 />,
    URL: 'https://developer.mozilla.org/pt-BR/docs/Web/JavaScript'
  },
  {
    id: 2,
    name: 'React',
    icon: <FaReact />,
    URL: 'https://reactjs.org/'
  },

  {
    id: 3,
    name: 'StyledComponents',
    icon: <SiStyledcomponents />,
    URL: 'https://styled-components.com/docs'
  },
  {
    id: 4,
    name: 'Sass',
    icon: <FaSass />,
    URL: 'https://sass-lang.com/documentation/'
  },
  {
    id: 5,
    name: 'SQL',
    icon: <TbSql />,
    URL: 'https://docs.oracle.com/en/database/oracle/'
  },
  {
    id: 6,
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
    description: `Desenvolvimento de Aplicativos Web em uma plataforma de análise e modificação de dados, sendo responsável por: 
                  <br>
                  <br>
                  <br>
                  - Desenvolver e manter a aplicação web, trabalhando tanto no front-end quanto no back-end, para garantir a melhor experiência do usuário e um desempenho eficiente da plataforma.
                  <br>
                  <br>
                  - Gerenciar o fluxo de dados, garantindo que os dados sejam extraídos de forma automatizada do sistema SAP e ajustados com o Pentaho para a integração com a plataforma.
                  <br>
                  <br>
                  - Administrar servidores Windows com robôs de resgate de dados, garantindo a disponibilidade contínua da plataforma.
                  <br>
                  <br>
                  - Trabalhar em colaboração com a equipe de desenvolvimento para garantir que a plataforma atenda às necessidades dos clientes e esteja sempre atualizada com as últimas tecnologias e práticas recomendadas.
                  <br>
                  <br>
                  - Utilização das plataformas de jira e confluence para armazenamento de códigos e documentações.`,

    tecnologies: `Principais tecnologias: JavaScript | React.Js | Angular | .NET | Oracle SQL Developer | Bootstrap | Pentaho`
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

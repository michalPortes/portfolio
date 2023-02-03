const axios = require('axios').default

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

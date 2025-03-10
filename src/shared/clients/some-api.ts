import axios from 'axios'

const someApi = axios.create({
  baseURL: process.env.API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

export { someApi }

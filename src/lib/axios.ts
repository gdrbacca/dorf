import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://dorf-server.vercel.app',
  // baseURL: 'http://localhost:3333/',
})

import axios from 'axios'

const BACKEND_URL = 'http://localhost:4000'

export const client = axios.create({
  baseURL: BACKEND_URL,
  timeout: 15000,
})

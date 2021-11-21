import axios from 'axios'
import mock from '../mocks/$mock'

const mocked = process.env.REACT_APP_MOCKED

const API_URL = 'http://localhost:4000'

const client = axios.create({
    baseURL: API_URL,
    timeout: 15000
})


if (mocked === 'true') mock(client)

export { client }

import axios from 'axios'

const api = axios.create({
	baseURL: 'https://backend.lucasgodoy04.repl.co'
})

export default api
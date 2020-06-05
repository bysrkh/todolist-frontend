const axios = require('axios')

const http = new axios.create({
    baseURL: 'http://localhost:8080/api'
})

export default http

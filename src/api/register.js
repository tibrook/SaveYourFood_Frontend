import axios from 'axios'

const API_URL = 'http://localhost:3000/users'

async function register(userData) {
    try {
        const response = await axios.post(API_URL, userData)
        console.log('Response:', response)
        return response
    } catch (error) {
        console.error('Error occurred:', error)
        if (
            error.response &&
            error.response.data &&
            error.response.data.statusCode
        ) {
            return error.response.data
        } else {
            console.error('Non-HTTP error:', error.message)
            return { error: error.message }
        }
    }
}

export { register }

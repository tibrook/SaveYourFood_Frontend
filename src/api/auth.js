import axios from 'axios'
import store from '../store'
const API_URL = 'http://127.0.0.1:3000/auth/login'
const auth = {
    async login(credentials) {
        try {
            const response = await axios.post(API_URL, credentials)
            if (response && response.status) {
                let token
                switch (response.status) {
                    case 201:
                        console.log(response)
                        token = response.data.access_token
                        localStorage.setItem('token', token)
                        store.commit('SET_TOKEN', token)
                        return token
                    default:
                        return response
                }
            }
            return response
        } catch (error) {
            // Handle error here
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
    },
    logout() {
        localStorage.removeItem('token')
        store.commit('CLEAR_TOKEN')
    },

    isAuthenticated() {
        const token = localStorage.getItem('token')
        console.log('*** Method isAuthenticated *** ', token)
        return !!token
    },
}
export default auth

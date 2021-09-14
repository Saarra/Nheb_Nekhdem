import axios from 'axios'

export const register = (newUser) => async(dispatch)=> {
    try {
        const res = await axios.post('/api/user', newUser)
        console.log(res)
    } catch (error) {
        console.log(error, 'user not register')
    }
}
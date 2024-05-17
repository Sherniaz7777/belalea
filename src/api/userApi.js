import axios from "axios"



class UserApi{
    createUser (data){
        return axios.post("https://api.escuelajs.co/api/v1/users", data, {
            headers: {
                "Content-Type": "application/json"}
        })
    }
    loginUser (data){
        return axios.post("https://api.escuelajs.co/api/v1/auth/login", data, {
            headers: {
                "Content-Type": "application/json"
            }
        })
    }
    getProfile(token){
        if (token) {
            return axios.get("https://api.escuelajs.co/api/v1/auth/profile",{
                headers:
                {Authorization:`Bearer ${token}`
            }
            })
        }
    }

}

export default new UserApi
import { axiosInstance } from "."


// Registration Flow
export const RegisterUser = async (values)=>{
    try {
        const response = await axiosInstance.post('http://localhost:8000/api/users/register', values)
        return response.data 
    } catch (error) {
        console.log(error)
    }

}

//Login flow
export const LoginUser = async (values)=>{
    try {
        const response = await axiosInstance.post('http://localhost:8000/api/users/login', values)
        return response.data 
    } catch (error) {
        console.log(error)
    }

}

// to get current or valid user 
export const GetCurrentUser = async () =>{
    try {
        const response = await axiosInstance.get('http://localhost:8000/api/users/get-valid-user')
        return response.data
    } catch (error) {
       console.log(error)
    }
}
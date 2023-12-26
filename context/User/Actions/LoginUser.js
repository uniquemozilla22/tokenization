import API from "../../../api/APIService"


export const LoginUser = (username, password) =>{
    const [data, message, error] = new ApiService().postRequest("users",{username, password});
    
}
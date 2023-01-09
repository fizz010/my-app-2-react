import axios from "axios";

// import React from 'react'
const USERS_REST_API_URL='http://localhost:8080/apps'

class UserService{
    getUsers(){
       return axios.get(USERS_REST_API_URL)
    }
}

export default new UserService();
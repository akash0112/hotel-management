import axios from "axios";
export const register=async (userdata)=>
    await axios.post(`${process.env.REACT_APP_API}/register`,userdata)
export const login=async (userdata)=>
 await axios.post(`${process.env.REACT_APP_API}/login`,userdata)
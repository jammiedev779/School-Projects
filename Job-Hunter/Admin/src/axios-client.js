import axios from "axios";
import {useStateContext} from "./context/ContextProvider.jsx";
import { json } from "react-router-dom";

const axiosClient = axios.create({
  baseURL: `http://localhost:8000/api`
})

axiosClient.interceptors.request.use((config) => {
  const token = localStorage.getItem('ACCESS_TOKEN');
  config.headers.Authorization = `Bearer ${token}`
  return config;
})

axiosClient.interceptors.response.use((response) => {
  return response
}, (error) => {
  const { response } = error;
  console.log("Axiser:" + response.status)
  if (response.status === 401) {
    localStorage.removeItem('ACCESS_TOKEN')
    // window.location.reload();
  } else if (response.status === 404) {
    //Show not found
  } else if (response.status === 422) {
  
    return json({ message:'not found 422' });    
  }
  
  throw error;
})

export default axiosClient

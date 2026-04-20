import { httpClient } from "../api/auth.api";
import { endpoints } from "../constants/endpoint";
import type { AuthResponse, LoginPayload, Product, RegisterPayLoad } from "../types/cloth";

//get all  

export const getAllProduct = async (): Promise<Product[]> => {
  const res = await httpClient.get(endpoints.getAllProduct);
  return res.data;
};
//login 

 export const loginUser=(data:LoginPayload)=>httpClient.post(endpoints.login,data);
//register
 export const registerUser=(data:RegisterPayLoad)=>httpClient.post(endpoints.register,data)

 //getSingleId
 const getSingleId=(id:string | number)=>{
  return httpClient.get<AuthResponse>(endpoints.getAllProductById(id))
 }
import { httpClient } from "../api/auth.api";
import { endpoints } from "../constants/endpoint";
import type { Product } from "../types/cloth";

//get all  

export const getAllProduct = async (): Promise<Product[]> => {
  const res = await httpClient.get(endpoints.getAll);
  return res.data;
};
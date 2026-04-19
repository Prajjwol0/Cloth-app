
import type ApiData from "../types/coth";
import { httpClient } from "../api/auth.api";
import { endpoints } from "../constants/endpoint";

//get all
export const ClothApi = (data: ApiData[]) => httpClient.get(endpoints.getAll);

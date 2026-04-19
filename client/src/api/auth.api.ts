import axios from "axios";
import { Env } from "./env";

export const httpClient=axios.create({
baseURL:Env.baseAppUrl,
})
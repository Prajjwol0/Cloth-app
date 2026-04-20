import { useQuery } from "@tanstack/react-query";
import { getAllProduct } from "../services/cloth-service";


export const useGetAllProductApi = () => {
  return useQuery({
    queryKey: ["PRODUCTS"],
    queryFn: getAllProduct,
  });
};

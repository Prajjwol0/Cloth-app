import { useMutation, useQuery } from "@tanstack/react-query";

import { getAllProduct, loginUser } from "../services/cloth-service";

const useLogin = () => {
  return useMutation({
    mutationFn: loginUser,
  });
};

// export const UseGetById=(id:string|number)=>{
//     return useQuery({
//       queryKey:["PRODUCT", id],
//       queryFn: ()=>getAllProduct(id), 
//     });
// };
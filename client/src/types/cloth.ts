export default interface ApiData{

    id:string;
    name:string;
    created:string;
}

   export  interface Product {
    id: string;
    category:string;
    image:string;
    price:string;
    title:string;
    discription:string;
  };

  export interface ProductsProps{
    products: Product[];
  }

  export interface LoginPayload{
    email:string;
    password:string;

  }
   export interface RegisterPayLoad{
    email:string;
    username:string;
    password:string;
   }
   export interface ILogout{
    status:number,
    message:string,
    data:null
   }

   export interface AuthResponse{
    token:string;
    user:{
      id:number
      email:string;
      username:string
    }
   }
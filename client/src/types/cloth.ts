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


export const endpoints = {
  register: "api/user/register",
  login:"api/user/login",
  getAllProduct: "/products",
  postAllProduct: "/products",
  getAllProductById: (id: string | number) => `/products${id}`,
};

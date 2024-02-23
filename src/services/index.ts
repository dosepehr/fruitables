import instance from "./axiosInstance";

// get products
export const getProducts = () => {
  const data = instance.get("/products");
  return data;
};

// get product
export const getProduct = (id: number) => {
  return instance.get(`/products/${id}`);
};

import ProductsSelector from "./components/ProductsSelector";
import ProductsList from "./components/ProductsList";
import Layout from "@/components/modules/Layout/Layout";
const Products = () => {
  return (
    <>
      <Layout>
        <div className="mt-10 flex items-center justify-between mb-8">
          <p className="text-4xl font-semibold text-darkGray">
            Our Organic Products
          </p>
          <ProductsSelector />
        </div>
        <ProductsList />
      </Layout>
    </>
  );
};

export default Products;

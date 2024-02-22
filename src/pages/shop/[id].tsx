import Breadcrumb from "@/components/modules/Breadcrumb/Breadcrumb";
import { useRouter } from "next/router";
import Image from "next/image";
import Layout from "@/components/modules/Layout/Layout";
const Product = () => {
  const router = useRouter();

  return (
    <>
      <Breadcrumb href="" text="" />
      <Layout>
        <div className="flex flex-col gap-4 lg:flex-row">
          <div className="lg:w-1/3">
            <div>
              <Image
                className="rounded-[0.625rem] border border-[#dee2e6]"
                width={1000}
                height={1000}
                alt=""
                src="/images/best-product-1.jpg"
              />
            </div>
          </div>
          <div className="lg:w-1/3">
            <p className="mb-3 text-2xl font-bold text-darkGray">Brocoli</p>
            <p className="mb-3 text-lightGray">Category: Vegetables</p>
            <p className="mb-3 text-2xl font-bold text-darkGray">3.35$</p>
            <p className="mb-3 text-lightGray">
              The generated Lorem Ipsum is therefore always free from repetition
              injected humour, or non-characteristic words etc. Susp endisse
              ultricies nisi vel quam suscipit. Sabertooth peacock flounder;
              chain pickerel hatchetfish, pencilfish snailfish
            </p>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Product;

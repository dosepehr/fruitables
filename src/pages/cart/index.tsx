import Breadcrumb from "@/components/modules/Breadcrumb/Breadcrumb";
import Layout from "@/components/modules/Layout/Layout";
import TableProduct from "@/components/templates/cart/TableProduct";
import { useAppStore } from "@/store/StoreProvider";
import React from "react";

const Cart = () => {
  const { basket } = useAppStore((state) => state);
  return (
    <>
      <Breadcrumb href="/cart" text="cart" />
      <Layout>
        <div className="mt-10 flex">
          <div className="flex w-full flex-col">
            <div className="overflow-x-auto">
              <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                <div className="overflow-hidden">
                  <table className="min-w-full">
                    <thead className="border-b bg-gray-100">
                      <tr>
                        <th className="px-6 py-4 text-left text-sm font-medium text-gray-900">
                          Product
                        </th>
                        <th className="px-6 py-4 text-left text-sm font-medium text-gray-900">
                          Name
                        </th>

                        <th className="px-6 py-4 text-left text-sm font-medium text-gray-900">
                          Price
                        </th>
                        <th className="px-6 py-4 text-left text-sm font-medium text-gray-900">
                          Quantity
                        </th>
                        <th className="px-6 py-4 text-left text-sm font-medium text-gray-900">
                          Total
                        </th>
                        <th className="px-6 py-4 text-left text-sm font-medium text-gray-900">
                          Handle
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {basket.map((item) => (
                        <TableProduct key={item.id} {...item} />
                      ))}
                    </tbody>
                  </table>
                  <p className="text-lg text-darkGray">total : 2.99 $</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Cart;

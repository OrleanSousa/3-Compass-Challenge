import React from "react";
import ProductCard from "../../card-product/CardProdutcs";
import products from "../../../data/products.json"; // Importing JSON with products
import ButtonCard from "./ButtonCard";

const OutProducts: React.FC = () => {
 
  return (
    <div className="flex flex-col w-full max-w-[1236px] mx-[102px]">
      <h1 className="self-center font-bold text-[40px] my-8">Our Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-[32px]">
        {products.slice(0, 8).map((product) => (
          <ProductCard
          key={product.id}
          id={product.id}  // Certifique-se de que o id está sendo passado corretamente
          productName={product.productName}
          description={product.description}
          price={product.price}
          originalPrice={product.originalPrice}
          discount={product.discount}
          isNew={product.isNew}
          image={product.image}
        />
        ))}   
      </div>
      <ButtonCard/>
    </div>
  );
};

export default OutProducts;

import React, { useState } from 'react';
import { HiViewGrid } from "react-icons/hi";
import { VscSettings } from "react-icons/vsc";
import SubHeader from '../subHeader/SubHeader';
import ProductCard from '../card-product/CardProdutcs';
import products from "../../assets/data/products.json";
import { MdOutlineViewDay } from "react-icons/md";

const ShopPages = () => {
  // Estado para controlar o número de produtos exibidos
  const [productLimit, setProductLimit] = useState(16);

  // Função para lidar com mudanças no input
  const handleProductLimitChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value, 10);
    if (!isNaN(value) && value > 0) {
      setProductLimit(value); // Atualiza o estado com o valor digitado
    }
  };

  return (
    <>
      <SubHeader />
      <div className='w-[1440px] h-[100px] bg-backFilter flex items-center px-[100px] justify-between'>
        <div className="flex justify-around">
          <div className='flex justify-center items-center w-[85px] h-[30px] gap-y-2 mr-[23px]'>
            <VscSettings size={19} />
            <p className="text-[20px] font-semibold ml-[12px]">Filter</p>
          </div>
          <div className='flex m-auto '>
            <HiViewGrid size={19} />
          </div>
          <div className='flex m-auto ml-[24px] mr-[30px]'>
            <MdOutlineViewDay size={19} />
          </div>
          <div className='flex items-center justify-end border-l border-gray50 w-[237px] h-[37px]'>
            <p className="text-[16px] font-semibold">Showing 1–{Math.min(productLimit, products.length)} of {products.length} results</p>
          </div>
        </div>
        <div className="flex flex-row gap-[29px]">
          <div className='flex justify-center items-center gap-[17px]'>
            <p className="text-[20px]">Show</p>
            <input 
              type="number" 
              placeholder="16" 
              className="w-[55px] h-[55px] text-center"
              value={productLimit} 
              onChange={handleProductLimitChange} 
            />
          </div>
          <div className='flex  items-center gap-[17px]'>
            <p className="text-[20px] text-start">Sort by</p>
            <input type="text" placeholder="Default" className="w-[188px] h-[55px] text-center" />
          </div>
        </div>
      </div>
      <div className='mt-[46px] flex justify-center'>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.slice(0, productLimit).map((product) => (
            <ProductCard
              key={product.id}
              productName={product.productName}
              description={product.description}
              originalPrice={product.originalPrice}
              price={product.price}
              discount={product.discount}
              isNew={product.isNew}
              image={product.image}
            />
          ))}
        </div>
      </div>
      
    </>
  );
};

export default ShopPages;

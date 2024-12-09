import { useState } from 'react';
import { HiViewGrid } from "react-icons/hi";
import { VscSettings } from "react-icons/vsc";
import SubHeader from '../subHeader/SubHeader';
import ProductCard from '../card-product/CardProdutcs';
import products from '../../data/products.json';
import { MdOutlineViewDay } from "react-icons/md";

// Importing the custom hook
import useProductLimit from '../../hooks/useProductLimit';

const ShopPages = () => {
  // State to control the current page
  const [currentPage, setCurrentPage] = useState<number>(1);

  // Using custom hook to control product limit
  const { productLimit, handleProductLimitChange } = useProductLimit(16);

  // Function to go to the next page
  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= Math.ceil(products.length / productLimit)) {
      setCurrentPage(page);
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
            <p className="text-[16px] font-semibold">Showing {(currentPage - 1) * productLimit + 1}–{Math.min(currentPage * productLimit, products.length)} of {products.length} results</p>
          </div>
        </div>
        <div className="flex flex-row gap-[29px]">
          <div className='flex justify-center items-center gap-[17px]'>
            <p className="text-[20px]">Show</p>
            <input 
              type="number" 
              placeholder="16" 
              className="w-[55px] h-[55px] text-center [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none" 
              value={productLimit} 
              onChange={handleProductLimitChange} 
            />
          </div>
          <div className='flex items-center gap-[17px]'>
            <p className="text-[20px] text-start">Sort by</p>
            <input type="text" placeholder="Default" className="w-[188px] h-[55px] text-center" />
          </div>
        </div>
      </div>
      <div className='mt-[46px] flex justify-center '>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.slice((currentPage - 1) * productLimit, currentPage * productLimit).map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
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
      <div className='flex m-auto justify-between w-[392px] h-[90px] items-end mb-[85px]'>
        {/* Pagination Buttons */}
        {[1, 2, 3].map((page) => (
          <button
            key={page}
            onClick={() => handlePageChange(page)}
            className={`w-[60px] h-[60px] rounded-[10px] ${
              currentPage === page ? 'bg-buttonBord' : 'bg-buttonShop'
            }`}
          >
            {page}
          </button>
        ))}
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          className='bg-buttonShop w-[98px] h-[60px] rounded-[10px]'
        >
          Next
        </button>
      </div>
    </>
  );
};

export default ShopPages;

import { useState } from "react";
import { HiViewGrid } from "react-icons/hi";
import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";
import SubHeader from "../subHeader/SubHeader";
import ProductCard from "../card-product/CardProdutcs";
import products from "../../data/products.json";
import { MdOutlineViewDay } from "react-icons/md";

// Importa o custom hook
import useProductSort from "../../hooks/useProductSort";

const ShopPages = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const { sortedProducts, handleSortChange } = useProductSort(products); // Usando o hook personalizado

  // Controla o limite de produtos por página
  const [productLimit, setProductLimit] = useState<number>(16);

  // Controla a mudança do limite de produtos
  const handleProductLimitChange = (e) => {
    const limit = parseInt(e.target.value, 10);
    setProductLimit(limit > 0 ? limit : 16); // Valor padrão caso seja inválido
  };

  // Função para controle de paginação
  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= Math.ceil(products.length / productLimit)) {
      setCurrentPage(page);
    }
  };

  return (
    <>
      <SubHeader />
      <div className="w-[1440px] h-[100px] bg-backFilter flex items-center px-[100px] justify-between">
        <div className="flex justify-around">
          <div className="flex justify-center items-center w-[85px] h-[30px] gap-y-2 mr-[23px]">
            <HiOutlineAdjustmentsHorizontal size={19} />
            <p className="text-[20px] font-semibold ml-[12px]">Filter</p>
          </div>
          <div className="flex m-auto ">
            <HiViewGrid size={19} />
          </div>
          <div className="flex m-auto ml-[24px] mr-[30px]">
            <MdOutlineViewDay size={19} />
          </div>
          <div className="flex items-center justify-end border-l border-gray50 w-[237px] h-[37px]">
            <p className="text-[16px] font-semibold">
              Showing {(currentPage - 1) * productLimit + 1}–{Math.min(currentPage * productLimit, sortedProducts.length)}{" "}
              of {sortedProducts.length} results
            </p>
          </div>
        </div>
        <div className="flex flex-row gap-[29px]">
          <div className="flex justify-center items-center gap-[17px]">
            <p className="text-[20px]">Show</p>
            <input
              type="number"
              placeholder="16"
              className="w-[55px] h-[55px] text-center [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
              value={productLimit}
              onChange={handleProductLimitChange}
            />
          </div>
          <div className="flex items-center gap-[17px]">
            <p className="text-[20px] text-start">Sort by</p>
            <select
              className="w-[188px] h-[55px] text-center border rounded-md"
              onChange={(e) => handleSortChange(e.target.value)}
            >
              <option value="default">Default</option>
              <option value="price">Price</option>
              <option value="newest">Newest</option>
              <option value="cheapest">Cheapest</option>
              <option value="mostExpensive">Most Expensive</option>
            </select>
          </div>
        </div>
      </div>
      <div className="mt-[46px] flex justify-center ">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {sortedProducts
            .slice((currentPage - 1) * productLimit, currentPage * productLimit)
            .map((product) => (
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
      <div className="flex m-auto justify-between w-[392px] h-[90px] items-end mb-[85px]">
        {[1, 2, 3].map((page) => (
          <button
            key={page}
            onClick={() => handlePageChange(page)}
            className={`w-[60px] h-[60px] rounded-[10px] ${
              currentPage === page ? "bg-buttonBord" : "bg-buttonShop"
            }`}
          >
            {page}
          </button>
        ))}
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          className="bg-buttonShop w-[98px] h-[60px] rounded-[10px]"
        >
          Next
        </button>
      </div>
    </>
  );
};

export default ShopPages;

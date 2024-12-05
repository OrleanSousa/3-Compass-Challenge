import { RiDeleteBin7Fill } from "react-icons/ri";
import sofa from "../../assets/sofa5.png";

const CartPage = () => {
  return (
    <>
      <div className="flex w-full h-[547px] px-[100px] pt-[72px]">
        <div className="w-[1240px] h-[390px] flex">
          <div className="w-[817px]">
            {/* Header da tabela */}
            <div className="h-[55px] bg-buttonShop flex items-center gap-[137px]">
              <div className="flex w-[217px] justify-between ml-[142px]">
                <p className="font-medium">Product</p>
                <p className="font-medium">Price</p>
              </div>
              <div className="flex w-[175px] justify-between">
                <p className="font-medium">Quantity</p>
                <p className="font-medium">Subtotal</p>
              </div>
            </div>

            {/* Linha de item */}
            <div className="w-full flex items-center mt-[52px]">
              {/* Imagem */}
              <div className="bg-buttonBord bg-opacity-[0.22] rounded-[10px] w-[105px] h-[105px] flex justify-center items-center">
                <img src={sofa} alt="Product" />
              </div>

              {/* Detalhes do Produto */}
              <div className="flex flex-grow items-center justify-between ">
                {/* Nome do Produto */}
                <p className="text-gray50 w-[150px] text-center">Asgaard sofa</p>

                {/* price */}
                <p className="text-gray50 text-center">Rs. 250,000.00</p>

                {/* acount */}
                <div className="flex items-center border border-gray50 rounded-[10px] px-4 py-2 w-[106.54px] justify-between">
                  <button className="text-lg font-bold ">-</button>
                  <input
                    type="number"
                    className="text-center border-none focus:outline-none w-10 [appearance:textfield] 
                      [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none "
                    value="1"
                    min="1"
                    id="quantity"
                  />
                  <button className="text-lg font-bold">+</button>
                </div>

                {/* Subtotal */}
                <p className="text-gray50 text-center">Rs. 250,000.00</p>

                {/* Ícone de exclusão */}
                <div className="w-[28px] h-[28px] flex justify-center items-center mr-[15px]">
                  <a className="cursor-pointer"> 
                    <RiDeleteBin7Fill className="text-textOrange text-[26px]" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </>
  );
};

export default CartPage;

import { RiDeleteBin7Fill } from "react-icons/ri";
import { useCart } from "../../hooks/useCart"; // Importe o hook useCart
import sofa from "../../assets/sofa5.png";

const CartPage = () => {
  const { cart, removeFromCart } = useCart(); // Pegue o carrinho e a função de remoção

  return (
    <>
      <div className="flex w-full h-[547px] px-[100px] pt-[72px] ">
        <div className="w-[1240px] h-[390px] flex gap-[30px]">
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

            {/* Renderiza os itens do carrinho */}
            {cart.length > 0 ? (
              cart.map((item) => (
                <div key={item.id} className="w-full flex items-center mt-[52px]">
                  {/* Imagem */}
                  <div className="bg-buttonBord bg-opacity-[0.22] rounded-[10px] w-[105px] h-[105px] flex justify-center items-center">
                    <img src={item.image || sofa} alt={item.name} />
                  </div>

                  {/* Detalhes do Produto */}
                  <div className="flex flex-grow items-center justify-between ">
                    {/* Nome do Produto */}
                    <p className="text-gray50 w-[150px] text-center">{item.name}</p>

                    {/* Preço */}
                    <p className="text-gray50 text-center">Rs. {item.price.toLocaleString()}</p>

                    {/* Quantidade */}
                    <div className="flex items-center border border-gray50 rounded-[10px] px-4 py-2 w-[106.54px] justify-between">
                      <button className="text-lg font-bold">-</button>
                      <input
                        type="number"
                        className="text-center border-none focus:outline-none w-10 [appearance:textfield] 
                          [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none "
                        value={item.quantity}
                        min="1"
                        id="quantity"
                      />
                      <button className="text-lg font-bold">+</button>
                    </div>

                    {/* Subtotal */}
                    <p className="text-gray50 text-center">Rs. {(item.price * item.quantity).toLocaleString()}</p>

                    {/* Ícone de exclusão */}
                    <div className="w-[28px] h-[28px] flex justify-center items-center mr-[15px]">
                      <a
                        className="cursor-pointer"
                        onClick={() => removeFromCart(item.productName)} // Chama a função de remoção ao clicar
                      >
                        <RiDeleteBin7Fill className="text-textOrange text-[26px]" />
                      </a>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-gray50 text-center">Your cart is empty.</p>
            )}
          </div>

          {/* Totais do carrinho */}
          <div className="w-[393px] h-[390px] bg-buttonShop flex flex-col items-center pt-[15px]">
            <h2 className="text-[32px] font-semibold">Cart Totals</h2>
            <div className="flex mt-[61px] w-[243px] mb-[31px] justify-between">
              <p className="font-medium">Subtotal</p>
              <p className="text-gray50">
                Rs.{" "}
                {cart.reduce((total, item) => total + item.price * item.quantity, 0).toLocaleString()}
              </p>
            </div>
            <div className="flex w-[243px] mb-[42px] justify-between">
              <p className="font-medium">Total</p>
              <p className="text-[20px] text-textOrange">
                Rs.{" "}
                {cart.reduce((total, item) => total + item.price * item.quantity, 0).toLocaleString()}
              </p>
            </div>
            <button className="w-[222px] h-[58.95px] rounded-[15px] border border-black text-[20px]">
              Check Out
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartPage;

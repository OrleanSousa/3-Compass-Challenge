import { RiDeleteBin7Fill } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux"; // Importando useDispatch e useSelector
import { removeFromCart, updateQuantity } from "../../redux/cart/cartSlice"; // Importando as ações
import { RootState } from "../../redux/store"; // Importando o tipo do estado
import { CartItem } from "../../redux/cart/cartTypes";
import { Link } from "react-router-dom";

const CartPage: React.FC = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state: RootState) => state.cart.items); // Selecionando os itens do carrinho

  // Função para diminuir a quantidade
  const decreaseQuantity = (item: CartItem) => {
    const newQuantity = item.quantity - 1;
    if (newQuantity > 0) {
      dispatch(updateQuantity({ id: item.id, quantity: newQuantity })); // Atualiza a quantidade
    } else {
      dispatch(removeFromCart(item.id)); // Remove o item se a quantidade for 0
    }
  };

  // Função para aumentar a quantidade
  const increaseQuantity = (item: CartItem) => {
    const newQuantity = item.quantity + 1;
    dispatch(updateQuantity({ id: item.id, quantity: newQuantity })); // Atualiza a quantidade
  };

  return (
    <>
      <div className="flex w-full px-[100px] h-full pt-[72px]">
        <div className="w-full max-w-[1240px] flex flex-row gap-[30px] mb-[85px]">
          {/* Lista de Itens do Carrinho */}
          <div className="w-full lg:w-[70%] flex flex-col gap-[30px]">
            {/* Header da Tabela */}
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
              cart.map((item: CartItem) => (
                <div key={item.id} className="w-full flex items-center gap-[20px] py-[15px]">
                  {/* Imagem */}
                  <div className="bg-buttonBord bg-opacity-[0.22] rounded-[10px] w-[105px] h-[105px] flex justify-center items-center">
                    <img src={item.image} alt={item.productName

                    } />
                  </div>

                  {/* Detalhes do Produto */}
                  <div className="flex flex-grow items-center justify-between">
                    {/* Nome do Produto */}
                    <p className="text-gray50 text-center w-[150px]">{item.productName}</p>

                    {/* Preço */}
                    <p className="text-gray50 text-center">Rs. {item.price.toLocaleString()}</p>

                    {/* Quantidade */}
                    <div className="flex items-center border border-gray50 rounded-[10px] px-4 py-2 w-[106.54px] justify-between">
                      <button className="text-lg font-bold" onClick={() => decreaseQuantity(item)}>
                        -
                      </button>
                      <input
                        type="number"
                        className="text-center border-none focus:outline-none w-10 [appearance:textfield] 
                          [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                        value={item.quantity}
                        min="1"
                        id="quantity"
                        readOnly
                      />
                      <button className="text-lg font-bold" onClick={() => increaseQuantity(item)}>
                        +
                      </button>
                    </div>

                    {/* Subtotal */}
                    <p className="text-gray50 text-center">Rs. {(item.price * item.quantity).toLocaleString()}</p>

                    {/* Ícone de exclusão */}
                    <div className="w-[28px] h-[28px] flex justify-center items-center mr-[15px]">
                      <a
                        className="cursor-pointer"
                        onClick={() => dispatch(removeFromCart(item.id))} // Dispara a ação para remover o item
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
          <div className="w-full lg:w-[30%] h-[390px] bg-buttonShop flex flex-col items-center pt-[15px]">
            <h2 className="text-[32px] font-semibold">Cart Totals</h2>
            <div className="flex mt-[61px] w-[243px] mb-[31px] justify-between">
              <p className="font-medium">Subtotal</p>
              <p className="text-gray50">
                Rs.{" "}
                {cart.reduce((total: number, item: CartItem) => total + item.price * item.quantity, 0).toLocaleString()}
              </p>
            </div>
            <div className="flex w-[243px] mb-[42px] justify-between">
              <p className="font-medium">Total</p>
              <p className="text-[20px] text-textOrange">
                Rs.{" "}
                {cart.reduce((total: number, item: CartItem) => total + item.price * item.quantity, 0).toLocaleString()}
              </p>
            </div>
            <Link to='/checkout'>
            
            <button  className="w-[222px] h-[58.95px] rounded-[15px] border border-black text-[20px]">
              Check Out
            </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartPage;

import { IoIosArrowForward } from "react-icons/io";
import { Link, useParams } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { FaStarHalf } from "react-icons/fa";
import { updateQuantity, removeFromCart, addToCart } from "../../redux/cart/cartSlice";
import { CartItem } from "../../redux/cart/cartTypes";
import { RootState } from "../../redux/store";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { FaFacebook,  FaLinkedin  } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";


const SingleProduct = () => {
  
  const { id } = useParams();  // Recebe o id do produto via URL
  const dispatch = useDispatch();
  const cart = useSelector((state: RootState) => state.cart.items);
  
  // Estado para armazenar os dados do produto
  const [product, setProduct] = useState<CartItem | undefined>(undefined);

  // Função para buscar os dados do produto
  const fetchProductData = async (productId: string) => {
    try {
      // Substitua pelo caminho real para seu arquivo JSON ou API
      const response = await fetch(`../../data/products.json`);
      const data = await response.json();
      const productData = data.find((product: CartItem) => product.id === parseInt(productId));
      setProduct(productData);
    } catch (error) {
      console.error("Erro ao carregar os dados", error);
    }
  };

  useEffect(() => {
    if (id) {
      fetchProductData(id);
    }
  }, [id]);

  // Função para adicionar ao carrinho
  const handleAddToCart = () => {
    if (product) {
      const existingProduct = cart.find(item => item.id === product.id);
      if (existingProduct) {
        // Se o produto já existe no carrinho, atualizamos a quantidade
        dispatch(updateQuantity({ id: product.id, quantity: existingProduct.quantity + 1 }));
      } else {
        // Se não existe, adicionamos ao carrinho com quantidade 1
        dispatch(addToCart({ ...product, quantity: 1 }));
      }
    }
  };

  // Função para diminuir a quantidade
  const decreaseQuantity = (product: CartItem) => {
    
    const existingProduct = cart.find(item => item.id === product.id);
    if (existingProduct && existingProduct.quantity > 0) {
      dispatch(updateQuantity({ id: product.id, quantity: existingProduct.quantity - 1 }));
    } else if (existingProduct) {
      // Se a quantidade for 1, removemos o item
      dispatch(removeFromCart(product.id));
    }
  };

  // Função para aumentar a quantidade
  const increaseQuantity = (product: CartItem) => {
    const existingProduct = cart.find(item => item.id === product.id);
    if (existingProduct) {
      dispatch(updateQuantity({ id: product.id, quantity: existingProduct.quantity + 1 }));
    }
  };

  if (!product) {
    return <div>Loading...</div>;  // Exibe uma mensagem enquanto o produto está sendo carregado
  }

  return (
    <>
      <div className="w-[1440px] h-[100px] bg-backFilter flex items-center px-[100px] justify-between">
        <div className="flex justify-around gap-[25px]">
          <div className="flex items-center w-[82px] justify-between">
            <Link to="/"><p className="text-gray50">Home</p></Link>
            <IoIosArrowForward />
          </div>
          <div className="flex items-center w-[82px] justify-between">
            <Link to="/shop"><p className="text-gray50">Shop</p></Link>
            <IoIosArrowForward />
          </div>
          <div className="w-[142px] h-[37px] border-l border-l-gray50 flex items-center justify-end">
            <p>{product.productName}</p>
          </div>
        </div>
      </div>

      <div className="flex items-center w-[1440px] h-[820px] px-[99px]">
        <div className="flex w-[1241px] h-[730px] justify-between">
          <div className="w-[553px] h-[500px] flex">
            <div className="w-[76px] h-[416px] flex flex-col justify-between">
              <div className="bg-buttonShop rounded-[10px]">
                <img src={product.image} alt={product.productName} />
              </div>
              <div className="bg-buttonShop rounded-[10px]">
                <img src={product.image} alt={product.productName} />
              </div>
              <div className="bg-buttonShop rounded-[10px]">
                <img src={product.image} alt={product.productName} />
              </div>
              <div className="bg-buttonShop rounded-[10px]">
                <img src={product.image} alt={product.productName} />
              </div>
            </div>
            <div className="w-[477px] h-[500px] flex justify-center">
              <div className="w-[419px] h-[500px] bg-buttonShop rounded-[10px] flex items-center overflow-hidden">
                <img src={product.image} alt={product.productName} className="w-[477px] h-[391px]" />
              </div>
            </div>
          </div>

          <div className="w-[606px] h-[730px]">
            <h2 className="text-[42px]">{product.productName}</h2>
            <p className="text-2xl text-gray50 mb-[10px]">Rs. {product.price}</p>

            <div className="flex gap-[18px]">
              <div className="flex w-[124px] h-[20px] gap-[7px] py-[5px]">
                <FaStar size={18} className="text-[#ffc700]" />
                <FaStar size={18} className="text-[#ffc700]" />
                <FaStar size={18} className="text-[#ffc700]" />
                <FaStar size={18} className="text-[#ffc700]" />
                <FaStarHalf size={18} className="text-[#ffc700]" />
              </div>
              <div className="border-l-gray50 border-l w-[147px] h-[30px] flex items-center justify-end">
                <p className="text-[13px] text-gray50">5 Customer Review</p>
              </div>
            </div>

            <div className="w-[424px] h-[80px] text-[13px] mt-[13px] mb-[22px]">
              <p>{product.description}</p>
            </div>

            <div className="flex flex-col gap-[12px] mb-[18px]">
              <p className="text-gray50 text-[14px]">Size</p>
              <div className="flex w-[123px] h-[30px] justify-between">
                <div className="w-[30px] h-[30px] bg-buttonBord rounded-[5px] flex justify-center items-center">L</div>
                <div className="w-[30px] h-[30px] bg-backFilter rounded-[5px] flex justify-center items-center">XL</div>
                <div className="w-[30px] h-[30px] bg-backFilter rounded-[5px] flex justify-center items-center">XS</div>
              </div>
            </div>

            <div className="flex flex-col gap-[12px]">
              <p className="text-gray50 text-[14px]">Color</p>
              <div className="flex w-[123px] h-[30px] justify-between">
                <div className="w-[30px] h-[30px] bg-circleroxo rounded-full flex justify-center items-center"></div>
                <div className="w-[30px] h-[30px] bg-black rounded-full flex justify-center items-center"></div>
                <div className="w-[30px] h-[30px] bg-buttonBord rounded-full flex justify-center items-center"></div>
              </div>
            </div>

            <div className="flex mt-[32px] gap-[10px]">
              <div className="flex items-center border border-gray50 rounded-[10px] px-4 py-2 w-[123px] h-[64px] justify-between">
                <button 
                  className="text-lg font-bold" 
                  onClick={() => decreaseQuantity(product)}>
                  -
                </button>
                <input
                  type="number"
                  className="text-center pl-[10px] border-none font-semibold bg-transparent w-[50px]"
                  value={cart.find(item => item.id === product.id)?.quantity || 1}
                  readOnly
                />
                <button 
                  className="text-lg font-bold" 
                  onClick={() => increaseQuantity(product)}>
                  +
                </button>
              </div>
              <button
                className="w-[215px] h-[64px] border-black border rounded-[10px]"
                onClick={handleAddToCart}
              >
                Add to cart
              </button>
            </div>

            <div className="w-[605px] border border-gray-100 mt-[60px]"></div>

            <div className="flex mt-[41px] gap-[12px]">
              <div>
                <p className="mb-[12px] text-gray50">SKU</p>
                <p className="mb-[12px] text-gray50">Category</p>
                <p className="mb-[12px] text-gray50">Tags</p>
                <p className="mb-[12px] text-gray50">Share</p>
              </div>
              <div>
                <p className="mb-[12px] text-gray50">:</p>
                <p className="mb-[12px] text-gray50">:</p>
                <p className="mb-[12px] text-gray50">:</p>
                <p className="mb-[12px] text-gray50">:</p>
              </div>
              <div>
                <p className="mb-[12px] text-gray50">SS001</p>
                <p className="mb-[12px] text-gray50">Sofas</p>
                <p className="mb-[12px] text-gray50">Sofa, Chair, Home, Shop</p>
                <div className="flex gap-[25px]">
                  <a href="www.facebook.com" ><FaFacebook size={20}/></a>
                  <a href="www.linkedin.com"><FaLinkedin size={20}/></a>
                  <a href="www.x.com"><AiFillTwitterCircle size={20}/></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleProduct;

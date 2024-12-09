import { IoIosArrowForward } from "react-icons/io";
import { Link, useParams } from "react-router-dom";
import { FaStar, FaStarHalf,FaFacebook, FaLinkedin  } from "react-icons/fa";
import { updateQuantity, removeFromCart, addToCart } from "../../redux/cart/cartSlice";
import { CartItem } from "../../redux/cart/cartTypes";
import { RootState } from "../../redux/store";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { AiFillTwitterCircle } from "react-icons/ai";
import card1 from '../../assets/sofa5.png';
import products from "../../data/products.json";
import ButtonCard from "../homepage/outproducts/ButtonCard";
import ProductCard from "../card-product/CardProdutcs";
import { setProduct } from "../../redux/cart/productSlice";


const SingleProduct = () => {
  const { id } = useParams();  // Receives the product id via URL
  const dispatch = useDispatch();
  const cart = useSelector((state: RootState) => state.cart.items);
  
  // Get the product directly from Redux
  const product = useSelector((state: RootState) => state.product.product);


  useEffect(() => {
    const fetchProductData = async (productId: string) => {
      try {
        const response = await fetch(`../../data/products.json`);
        const data = await response.json();
        const productData = data.find((product: CartItem) => product.id === parseInt(productId));
        setProduct(productData);
      } catch (error) {
        console.error("Erro ao carregar os dados", error);
      }
    };
  
    if (id) {
      fetchProductData(id);
    }
  }, [id]);

  // Add to cart function
  const handleAddToCart = () => {
    if (product) {
      const existingProduct = cart.find(item => item.id === product.id);
      if (existingProduct) {
        dispatch(updateQuantity({ id: product.id, quantity: existingProduct.quantity + 1 }));
      } else {
        dispatch(addToCart({ ...product, quantity: 1 }));
      }
    }
  };

  // Function to decrease quantity
  const decreaseQuantity = (product: CartItem) => {
    const existingProduct = cart.find(item => item.id === product.id);
    if (existingProduct && existingProduct.quantity > 0) {
      dispatch(updateQuantity({ id: product.id, quantity: existingProduct.quantity - 1 }));
    } else if (existingProduct) {
      dispatch(removeFromCart(product.id));
    }
  };

  // Function to increase quantity
  const increaseQuantity = (products: CartItem) => {
    const existingProduct = cart.find(item => item.id === products.id);
    if (existingProduct) {
      dispatch(updateQuantity({ id: products.id, quantity: existingProduct.quantity + 1 }));
    }
  };

  if (!product) {
    return <div>Loading...</div>;  // Displays a message while the product is charging
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
              <div className="bg-buttonShop rounded-[10px] w-[76px] h-[80px] overflow-hidden flex">
                <img src={product.image} alt={product.productName} className="w-[83px] h-[55px] self-center  rounded-[10px]"/>
              </div>
              <div className="bg-buttonShop rounded-[10px] w-[76px] h-[80px]  overflow-hidden flex">
                <img src={product.image} alt={product.productName} className="w-[83px] h-[55px] self-center  rounded-[10px]" />
              </div>
              <div className="bg-buttonShop rounded-[10px] w-[76px] h-[80px]  overflow-hidden flex">
                <img src={product.image} alt={product.productName}  className="w-[83px] h-[55px] self-center rounded-[10px]"/>
              </div>
              <div className="bg-buttonShop rounded-[10px] w-[76px] h-[80px]  overflow-hidden flex">
                <img src={product.image} alt={product.productName} className="w-[83px] h-[55px] self-center rounded-[10px]"/>
              </div>
            </div>
            <div className="w-[477px] h-[500px] flex justify-center">
              <div className="w-[419px] h-[500px] bg-buttonShop rounded-[10px] flex items-center overflow-hidden">
                <img src={product.image} alt={product.productName} className="w-[477px] h-[391px] self-center rounded-[10px]" />
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

      <div className="w-[1440px] h-[744px] flex flex-col items-center border-t border-b pt-[49px] gap-[36px]">
        <div className="flex w-[536px] h-[36px] justify-between ">
          <h2 className="text-[24px] font-medium">Description</h2>
          <h2 className="text-gray50 text-[24px]">Additional Information</h2>
        </div>
        <div className="w-[1026px] h-[174px] flex justify-between flex-col text-gray50 ">
          <p>Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker 
            takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.</p>
          <p>Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar
             as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced 
             audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. 
             The analogue knobs allow you to fine tune the controls to your personal 
            preferences while the guitar-influenced leather strap enables easy and stylish travel.</p>
        </div>
        <div className="w-[1239px] h-[348px] flex justify-between ">
          <div className="w-[605px] h-[348px] bg-buttonShop rounded-[10px]">
            <img src={card1} alt="" className="w-[605px] h-[348px]"/>
          </div>
          <div className="w-[605px] h-[348px] bg-buttonShop rounded-[10px]">
            <img src={card1} alt="" className="w-[605px] h-[348px]"/>
          </div>
        </div>
      </div>

      <div className="w-[1440px] h-[765px] flex flex-col pt-[54px] items-center">
        <h2 className="text-[36px] font-medium">Related Products</h2>
        <div className="flex w-[1236px] h-[439px] gap-6 mb-[43.32px] mt-[25px]">
        {products.slice(0, 4).map((product) => (
          <ProductCard
          key={product.id}
          id={product.id} 
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
        <ButtonCard />
      </div>
    </>
  );
};

export default SingleProduct;



import { RiDeleteBin7Fill } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart, updateQuantity } from "../../redux/cart/cartSlice";
import { RootState } from "../../redux/store";
import { CartItem } from "../../redux/cart/cartTypes";
import { Link } from "react-router-dom";
import styles from './CartPage.module.css'; // Importando estilos

const CartPage: React.FC = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state: RootState) => state.cart.items);

  const decreaseQuantity = (item: CartItem) => {
    const newQuantity = item.quantity - 1;
    if (newQuantity > 0) {
      dispatch(updateQuantity({ id: item.id, quantity: newQuantity }));
    } else {
      dispatch(removeFromCart(item.id));
    }
  };

  const increaseQuantity = (item: CartItem) => {
    const newQuantity = item.quantity + 1;
    dispatch(updateQuantity({ id: item.id, quantity: newQuantity }));
  };

  return (
    <div className={styles.cartPageContainer}>
      <div className={styles.cartWrapper}>
        {/* Lista de Itens do Carrinho */}
        <div className={styles.cartItemsContainer}>
          {/* Header da Tabela */}
          <div className={styles.cartHeader}>
            <div className={styles.cartHeaderProduct}>
              <p className={styles.cartHeaderText}>Product</p>
              <p className={styles.cartHeaderText}>Price</p>
            </div>
            <div className={styles.cartHeaderDetails}>
              <p className={styles.cartHeaderText}>Quantity</p>
              <p className={styles.cartHeaderText}>Subtotal</p>
            </div>
          </div>

          {/* Renderiza os itens do carrinho */}
          {cart.length > 0 ? (
            cart.map((item: CartItem) => (
              <div key={item.id} className={styles.cartItem}>
                <div className={styles.productImageContainer}>
                  <img src={item.image} alt={item.productName} />
                </div>

                <div className="flex flex-grow items-center justify-between">
                  <p className={styles.productName}>{item.productName}</p>
                  <p className={styles.productPrice}>
                    Rs. {item.price.toLocaleString()}
                  </p>

                  <div className={styles.quantityControl}>
                    <button
                      className={styles.quantityButton}
                      onClick={() => decreaseQuantity(item)}
                    >
                      -
                    </button>
                    <input
                      type="number"
                      className={styles.quantityInput}
                      value={item.quantity}
                      min="1"
                      id="quantity"
                      readOnly
                    />
                    <button
                      className={styles.quantityButton}
                      onClick={() => increaseQuantity(item)}
                    >
                      +
                    </button>
                  </div>

                  <p className={styles.subtotal}>
                    Rs. {(item.price * item.quantity).toLocaleString()}
                  </p>

                  <div className={styles.deleteIconContainer}>
                    <a
                      className={styles.deleteIcon}
                      onClick={() => dispatch(removeFromCart(item.id))}
                    >
                      <RiDeleteBin7Fill className={styles.textOrangeIcon} />
                    </a>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className={styles.emptyCartMessage}>Your cart is empty.</p>
          )}
        </div>

        {/* Totais do carrinho */}
        <div className={styles.cartTotalsContainer}>
          <h2 className={styles.cartTotalsHeader}>Cart Totals</h2>
          <div className={styles.cartSubtotalRow}>
            <p className={styles.cartSubtotalText}>Subtotal</p>
            <p className={styles.cartSubtotalAmount}>
              Rs.{" "}
              {cart.reduce(
                (total: number, item: CartItem) =>
                  total + item.price * item.quantity,
                0
              ).toLocaleString()}
            </p>
          </div>
          <div className={styles.cartTotalRow}>
            <p className={styles.cartSubtotalText}>Total</p>
            <p className={styles.cartTotalAmount}>
              Rs.{" "}
              {cart.reduce(
                (total: number, item: CartItem) =>
                  total + item.price * item.quantity,
                0
              ).toLocaleString()}
            </p>
          </div>
          <Link to="/checkout">
            <button className={styles.checkoutButton}>Check Out</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CartPage;

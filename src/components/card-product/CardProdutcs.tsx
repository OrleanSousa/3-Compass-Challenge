import React from 'react';

import { useDispatch } from 'react-redux'; 
import { addToCart } from '../../redux/cart/cartSlice'; 
import { setProduct } from '../../redux/cart/productSlice'; 
import { Link } from 'react-router-dom'; 
import styles from './ProductCard.module.css'; // Importando o módulo CSS
import { FaSearch } from 'react-icons/fa';

interface ProductCardProps {
  id: number;
  productName: string;
  description: string;
  price: number;
  originalPrice?: number;
  discount?: number;
  isNew?: boolean;
  image: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  productName,
  description,
  price,
  originalPrice = 0,
  discount,
  isNew,
  image, 
}) => {
  const dispatch = useDispatch();

  const handleCardClick = () => {
    dispatch(setProduct({
      id,
      productName,
      description,
      price,
      image,
      quantity: 1,    
    }));
  };

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    dispatch(addToCart({
      id,
      productName,
      description,
      price,
      image,
      quantity: 1,
    }));
  };

  return (
    <div className={`${styles.cardContainer} group`}> {/* Adicionado 'group' aqui */}
      <div className="relative">
        {discount && (
          <span className={styles.discountBadge}>
            -{discount}%
          </span>
        )}
        {isNew && (
          <span className={styles.newBadge}>
            New
          </span>
        )}
        <img
          src={image} 
          alt={productName}
          className={styles.productImage}
        />
      </div>

      <div className={`${styles.hoverOverlay} group-hover:opacity-100`}> {/* group-hover aplicado diretamente */}
        <button
          onClick={handleAddToCart}
          className={styles.addToCartButton}
        >
          Add to cart
        </button>
        <div className={styles.iconContainer}>
          
          <Link to={`/product/${id}`} onClick={handleCardClick} className="cursor-pointer flex items-center gap-[3px] m-auto text-white">
            <FaSearch  size={16} />
            Description
          </Link>
          
        </div>
      </div>

      <Link to={`/product/${id}`} onClick={handleCardClick}>
        <div className={styles.cardFooter}>
          <h3 className={styles.productName}>{productName}</h3>
          <p className={styles.productDescription}>{description}</p>
          <div className="mt-2">
            <span className={styles.productPrice}>
              Rp {(price ?? 0).toLocaleString()}
            </span>
            {originalPrice > 0 && (
              <span className={styles.originalPrice}>
                Rp {originalPrice.toLocaleString()}
              </span>
            )}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;

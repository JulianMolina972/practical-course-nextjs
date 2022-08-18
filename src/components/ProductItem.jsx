import React, { useContext } from 'react'
import AppContext from '@context/AppContext'
import addToCartIcon from '@icons/bt_add_to_cart.svg'
import addedToCartIcon from '@icons/bt_added_to_cart.svg'
import '@styles/ProductItem.scss';

export const ProductItem = ({ product }) => {

	const { addToCart, removeFromCart, state } = useContext(AppContext);

	const handleClick = (item) => {
    itsProductAdded() ? removeFromCart(item) : addToCart(item);
  };

	const itsProductAdded = () =>
	state.cart.some((item) => item.id === product.id) ? true : false;

  return (
    <div className="ProductItem">
			<img 
				src={product.images[0]} 
				alt={product.title} 
			/>
			<div className="product-info">
				<div>
					<p>${product.price}</p>
					<p>{product.title}</p>
				</div>
				<figure onClick={() => handleClick(product)}>
					{itsProductAdded() ? (
							<img src={addedToCartIcon} alt="added to cart icon" />
						) : (
							<img src={addToCartIcon} alt="add to cart icon" />
						)}
				</figure>
			</div>
		</div>
  )
}

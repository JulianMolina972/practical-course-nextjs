import React, { useContext } from 'react'
import Image from 'next/image'
import AppContext from '@context/AppContext'
import addToCartIcon from '@icons/bt_add_to_cart.svg'
import addedToCartIcon from '@icons/bt_added_to_cart.svg'
import styles from '@styles/ProductItem.module.scss'

export const ProductItem = ({ product }) => {

	const { addToCart, removeFromCart, state } = useContext(AppContext);

	const handleClick = (item) => {
    itsProductAdded() ? removeFromCart(item) : addToCart(item);
  };

	const itsProductAdded = () =>
	state.cart.some((item) => item.id === product.id) ? true : false;

	console.log(product.images)
  return (
    <div className={styles.ProductItem}>
			<Image 
				src={product.images[0]} 
				alt={product.title} 
				width={240}
				height={240}
			/>
			<div className={styles['product-info']}>
				<div>
					<p>${product.price}</p>
					<p>{product.title}</p>
				</div>
				<figure onClick={() => handleClick(product)}>
					{itsProductAdded() ? (
							<Image 
								src={addedToCartIcon} 
								alt="added to cart icon" 
								width={50}
								height={50}
							/>
						) : (
							<Image 
								src={addToCartIcon} 
								alt="add to cart icon" 
								width={50}
								height={50}	
							/>
						)}
				</figure>
			</div>
		</div>
  )
}

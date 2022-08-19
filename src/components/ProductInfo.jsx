import React from "react";
import addToCart from "@icons/bt_add_to_cart.svg";
import styles from "@styles/ProductInfo.module.scss";

const bikeImage = "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";

export const ProductInfo = () => {
  return (
    <>
			<img src={bikeImage} alt="bike" />
			<div className={styles.ProductInfo}>
				<p>$35,00</p>
				<p>Bike</p>
				<p>With its practical position, this bike also fulfills a decorative function, add your hall or workspace.</p>
				<button className={styles['primary-button', 'add-to-cart-button']}>
					<img src={addToCart} alt="add to cart" />
					Add to cart
				</button>
			</div>
		</>
  )
}
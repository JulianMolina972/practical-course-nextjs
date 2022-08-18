import React, { useContext } from 'react'
import AppContext from '@context/AppContext'
import closeIcon from '@icons/icon_close.png';
import styles from '@styles/OrderItem.module.scss';


export const OrderItem = ({ product }) => {
	const { removeCart } = useContext(AppContext);
  return (
    <div className={styles.OrderItem}>
			<figure>
				<img src={product.images[0]} alt={product.title} />
			</figure>
			<p>{product.title}</p>
			<p>{product.price}</p>
			<img 
				src={closeIcon} 
				className="close-icon"
				alt="close" 
				onClick={() => removeCart(product)} />
		</div>
  )
}

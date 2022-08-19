import React, { useContext } from 'react';
import Image from 'next/image';
import AppContext from '@context/AppContext';
import closeIcon from '@icons/icon_close.png';
import styles from '@styles/OrderItem.module.scss';


export const OrderItem = ({ product }) => {
	const { removeCart } = useContext(AppContext);
  return (
    <div className={styles.OrderItem}>
			<figure>
				<Image 
					src={product?.images[0]} 
					alt={product?.title} 
					width={240}
					height={240}
				/>
			</figure>
			<p>{product?.title}</p>
			<p>{product?.price}</p>
			<Image 
				src={closeIcon} 
				className={styles['close-icon']}
				alt="close" 
				onClick={() => removeCart(product)} 
				width={20}
				height={20}
			/>
		</div>
  );
};

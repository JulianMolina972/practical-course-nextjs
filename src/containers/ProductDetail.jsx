import React from 'react';
import { ProductInfo } from '@components/ProductInfo';
import closeIcon from '@icons/icon_close.png';
import styles from '@styles/ProductDetail.module.scss';

export const ProductDetail = () => {
	return (
		<aside className={styles.ProductDetail}>
			<div className={styles['ProductDetail-close']}>
				<img src={closeIcon} alt="close" />
			</div>
			<ProductInfo />
		</aside>
	);
}


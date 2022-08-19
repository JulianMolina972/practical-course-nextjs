import React from 'react';
import Link from 'next/link';
import styles from '@styles/MenuMobile.module.scss';

export const MenuMobile = () => {
  return (
    <div className={styles['mobile-menu']}>
      <ul>
        <li>
          <p>CATEGORIES</p>
        </li>
        <li>
          <Link href="/">All</Link>
        </li>
        <li>
          <Link href="/">Clothes</Link>
        </li>
        <li>
          <Link href="/">Electronics</Link>
        </li>
        <li>
          <Link href="/">Furnitures</Link>
        </li>
        <li>
          <Link href="/">Toys</Link>
        </li>
        <li>
          <Link href="/">Other</Link>
        </li>
      </ul>

      <ul className={styles['my-orders-account']}>
        <li>
          <Link href="/account">My orders</Link>
        </li>
        <li>
          <Link href="/account">My account</Link>
        </li>
      </ul>
      <ul>
        <li className={styles.email}>
          <Link href="/account" >exaple@platzi.com</Link>
        </li>
        <li className={styles['sign-out']}>
          <Link href="/signup" >Sign out</Link>
        </li>
      </ul>
    </div>
  );
};

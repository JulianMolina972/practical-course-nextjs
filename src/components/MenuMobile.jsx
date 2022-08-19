import React from 'react';
import Link from 'next/link';
import styles from '@styles/MenuMobile.module.scss';

export const MenuMobile = () => {
  return (
    <div className={styles.MenuMobile}>
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
        <li>
          <Link href="/account" className={styles.email}>exaple@platzi.com</Link>
        </li>
        <li>
          <Link href="/signup" className={styles['sign-out']}>Sign out</Link>
        </li>
      </ul>
    </div>
  );
};

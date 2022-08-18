import React from 'react';
import styles from '@styles/MenuMobile.module.scss';

export const MenuMobile = () => {
  return (
    <div className={styles.MenuMobile}>
      <ul>
        <li>
          <p>CATEGORIES</p>
        </li>
        <li>
          <a href="/">All</a>
        </li>
        <li>
          <a href="/">Clothes</a>
        </li>
        <li>
          <a href="/">Electronics</a>
        </li>
        <li>
          <a href="/">Furnitures</a>
        </li>
        <li>
          <a href="/">Toys</a>
        </li>
        <li>
          <a href="/">Other</a>
        </li>
      </ul>

      <ul className='my-orders-account'>
        <li>
          <a href="/account">My orders</a>
        </li>
        <li>
          <a href="/account">My account</a>
        </li>
      </ul>
      <ul>
        <li>
          <a href="/account" className="email">exaple@platzi.com</a>
        </li>
        <li>
          <a href="/signup" className="sign-out">Sign out</a>
        </li>
      </ul>
    </div>
  );
}

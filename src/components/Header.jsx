import React, { useState, useContext } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import AppContext from '@context/AppContext';
import { Menu } from '@components/Menu';
import { MyOrder } from '@containers/MyOrder';
import { MenuMobile } from '@components/MenuMobile';
import logo from "@logos/logo_yard_sale.svg";
import menuIcon from "@icons/icon_menu.svg";
import shoppingCartIcon from "@icons/icon_shopping_cart.svg";
import styles from '@styles/Header.module.scss';

export const Header = () => {
  const [toggle, setToggle] = useState(false);
  const [toggleMobile, setToggleMobile] = useState(false);

  const { 
    state, 
    toggleOrders ,
    toggleOrdersFlechita,
  } = useContext(AppContext);

  const handleToggle =() => {
    setToggle(!toggle);
  };

  const handleToggleMobile =() => {
    setToggleMobile(!toggleMobile);
  };

  return (
      <nav className={styles.Nav}>
        <Image
          src={menuIcon}
          alt="menu" 
          className={styles.menu}  
          onClick={handleToggleMobile}
        />
        <div className={styles['navbar-left']}>
          <Link href="/">
            <Image src={logo} alt="logo" className={styles['nav-logo']} />
          </Link>
          <ul>
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
              <Link href="/">Others</Link>
            </li>
          </ul>
        </div>
        <div className={styles['navbar-right']}>
          <ul>
            <li 
              className={styles['navbar-email']} 
              onClick={() => handleToggle} 
              role="presentation"
            > 
              platzi@example.com
            </li>
            <li 
              className={styles['navbar-shopping-cart']}
              onClick={() => toggleOrdersFlechita()}
              role="presentation"
            >
              <Image src={shoppingCartIcon} alt="shopping cart" />
              {state.cart.length > 0 ? <div>{state.cart.length}</div> : null}
            </li>
          </ul>
        </div>
        {toggle ? <Menu /> : null}
        {toggleMobile ? <MenuMobile /> : null}
        {toggleOrders ? <MyOrder /> : null}    
      </nav>
  );
};

import React, { useState, useContext } from 'react'
import Link from 'next/link';
import Image from 'next/image'
import AppContext from '@context/AppContext'
import { Menu } from '@components/Menu'
import { MyOrder } from '@containers/MyOrder'
import { MenuMobile } from '@components/MenuMobile'
import logo from "@logos/logo_yard_sale.svg"
import menuIcon from "@icons/icon_menu.svg"
import shoppingCartIcon from "@icons/icon_shopping_cart.svg"
import styles from '@styles/Header.module.scss'

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
  }

  const handleToggleMobile =() => {
    setToggleMobile(!toggleMobile);
  }

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
              <a href="/">Others</a>
            </li>
          </ul>
        </div>
        <div className={styles['navbar-right']}>
          <ul>
            <li 
              className={styles['navbar-email']}
              onClick={handleToggle}
            > 
              platzi@example.com
            </li>
            <li 
              className={styles['navbar-shopping-cart']}
              onClick={() => toggleOrdersFlechita()}
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
  )
}

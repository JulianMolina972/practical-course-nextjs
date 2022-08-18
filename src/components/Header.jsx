import React, { useState, useContext } from 'react'
import AppContext from '@context/AppContext'
import { Menu } from '@components/Menu'
import { MyOrder } from '@containers/MyOrder'
import { MenuMobile } from '@components/MenuMobile'
import menu from "@icons/icon_menu.svg"
import logo from "@logos/logo_yard_sale.svg"
import shoppingCartIcon from "@icons/icon_shopping_cart.svg"
import styles from '@styles/Header.module.scss'

export const Header = () => {
  const [toggle, setToggle] = useState(false);
  const [toggleMobile, setToggleMobile] = useState(false);
  // const [toggleOrders, setToggleOrders] = useState(false);
  // () => setToggleOrders(!toggleOrders)
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
        <img 
          src={menu} 
          alt="menu" 
          className="menu" 
          onClick={handleToggleMobile}
        />
        <div className="navbar-left">
          <img src={logo} alt="logo" className="nav-logo" />
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
        <div className="navbar-right">
          <ul>
            <li 
              className="navbar-email" 
              onClick={handleToggle}
            > 
              platzi@example.com
            </li>
            <li 
              className="navbar-shopping-cart"
              onClick={() => toggleOrdersFlechita()}
            >
              <img src={shoppingCartIcon} alt="shopping cart" />
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

import { Link, NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useState } from 'react';
export default function Header(){
 const [open,setOpen]=useState(false); const count=useSelector(s=>s.cart.items.reduce((a,i)=>a+i.quantity,0));
 return <header className="header">
  <div className="topbar">Sign up and get 20% off to your first order. <u>Sign Up Now</u></div>
  <nav className="nav wrap">
   <button className="burger" onClick={()=>setOpen(!open)}>☰</button><Link className="logo" to="/">SHOP.CO</Link>
   <div className={open?'links show':'links'} onClick={()=>setOpen(false)}><NavLink to="/shop">Shop</NavLink><a>On Sale</a><a>New Arrivals</a><a>Brands</a><NavLink to="/about">About</NavLink></div>
   <input className="search" placeholder="Search for products..." onChange={e=>window.dispatchEvent(new CustomEvent('shop-search',{detail:e.target.value}))}/>
   <div className="icons"><span>♡</span><Link to="/cart">🛒{count>0&&<b>{count}</b>}</Link><span>👤</span></div>
  </nav>
 </header>
}

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { getCategories } from '../services';


const Header = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((newCategories) => {
      setCategories(newCategories);
    });
  }, []);

  if (typeof window !== "undefined") {
    const body = document.querySelector("body")

    const headerBurger = document.querySelector(".header__burger")
    const headerClose = document.querySelector(".header__close-burger")
    const navbar = document.querySelector(".header__nav")
    

    if (navbar) {
      headerBurger.addEventListener("click", () => {
        navbar.classList.add("active")
        body.classList.add("scroll-block")
      })

      headerClose.addEventListener("click", () => {
        navbar.classList.remove("active")
        body.classList.remove("scroll-block")
      })
    
      
    }
  }

  return (

    <header id="header">
      <div class="wrapper">
        <Link href="/" class="header__logo"><img className="logo-img" src="/img/logo.svg" alt="logo" /></Link>
        <nav class="header__nav">
          <ul>
            {categories.map((category, index) => (
              <li>
                <Link className="header-text" key={index} href={`/category/${category.slug}`}>{category.name}</Link>
              </li>
            ))}
          </ul>
          <button type="submit" class="header__close-burger" aria-label="close menu">
            <img src="/img/burger-close.svg" alt="close burger" />
          </button>
        </nav>
        <nav class="header__second-nav">
          <ul class="header__socials">
            <li><a href="#"><img src="/img/whatsapp.svg" alt="our whatsapp" /></a></li>
            <li><a href="#"><img src="/img/instagram.svg" alt="our instagram" /></a></li>
          </ul>
          <button type="submit" aria-label="search on site" class="header__search"><img src="/img/search.svg" alt="Open the search" /></button>
          <button class="header__burger" aria-label="open menu">
            <img src="/img/burger.svg" alt="open menu" />
          </button>
        </nav>
      </div>
    </header>


  );
};

export default Header;

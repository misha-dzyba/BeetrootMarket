import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom"



function Header(props) {
  return (
    <header className="header">
      <Link to='/'>
      <h3>
        <img src="/img/Frame 9.png"></img>
      </h3>
      </Link>
      <input onChange={props.changeValueSearch}></input>

      <img width={34} height={34} src="/img/Frame 8.svg"></img>

      <p onClick={props.clickCart} className="header-price">
        899 грн
      </p>

      <Link to='/favorites'>
        <img src='/img/Frame 5.svg'></img>
      </Link>

      <img width={34} height={34} src="/img/Frame 7.svg"></img>
    </header>
  );
}

export default Header;

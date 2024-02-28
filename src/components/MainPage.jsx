import React from "react";
// import { useState } from "react";
import "./MainPage.css";

import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";
import Footer from "./Footer";

const MainPage = () => {
  // const [count, setCount] = useState(0);

  // const IncNum = () => {
  //   setCount(count + 1);
  // };

  // const decNum = () => {
  //   setCount(count - 1);
  // };

  // const [time, setTime] = useState(new Date().toLocaleTimeString());

  // const newTime = () => {
  //   setTime(new Date().toLocaleTimeString());
  // };

  // useEffect(() => {
  //   alert("I am Clicked");
  // }, [count]);

  // useEffect(() => {
  //   console.log("clicked");
  //   alert("Button time");
  // }, [time]);

  return (
    <>
      <header>
        {/* Navbar Start here */}
        <nav className="navbar-main">
          <h2 className="navIcon">GenZ</h2>
          <ul className="ul">
            <li>
              <Link to="/home" className="navlist">
                Home
              </Link>
            </li>
            <li>
              <Link to="/product" className="navlist">
                Products
              </Link>
            </li>
            <li>
              <Link to="/shop" className="navlist">
                Shop
              </Link>
            </li>
            <li>
              <Link to="/about" className="navlist">
                About
              </Link>
            </li>
          </ul>
          <span className="searchIcon">
            <input type="text" placeholder="Search" className="navInput" />
            <img
              src="./assets/search_icon.png"
              alt="Search_icon"
              className="search_logo"
            />
          </span>
        </nav>

        {/* Navbar end */}
      </header>

      <main>
        <div className="carsdiv">
          <img src="./assets/carsual.jpg" alt="carsual" className="carsual" />
          <img
            src="./assets/monkey_logo.png"
            alt="monkey_logo"
            className="monkey"
          />
          <button className="carsbtn">Lets Start</button>
        </div>

        {/* <div>
        <img src="./assets/image1.jpeg" className="cardsize" alt="card" />

        <h3>Title of the card</h3>
        <p>Best Selling product in the market.</p>
      </div>
      <h1> {count} </h1>
      <button onClick={IncNum}>Min</button>
      <button onClick={decNum}>Plus</button>
      <h1>{time}</h1>

      <button onClick={newTime}>Get time</button> */}
        <div className="scroll-cards">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
        <div className="scroll-cards">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default MainPage;

import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="all">
      <nav className="nvbg">
        <div>
          <a href="/">
            <img className="logo" src="/assets/logo.png" alt="picture" />
          </a>
          <div>
            <ul>
              <li>
                <a className="acc" href="/">Home</a>
              </li>
              <li>
                <a className="acc" href="/login">Login</a>
              </li>
              <li>
                <a className="acc" href="/register">Signup</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="data">
        <h1 className="title">Welcome to FastDelivery</h1>
        <p className="para">
          Human-centric integrated logistics service provider
        </p>
        <a className="comm" href="/register">Start now</a>
      </div>
      <div className="pngg">
        <img className="box" src="/assets/box.png" alt="" />
        <img className="camio" src="/assets/camio.png" alt="" />
      </div>
    </div>
  );
};

export default Home;
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import logo from './assets/logo.svg';
import original from './assets/original-cinnamon-roll.jpg';
import apple from './assets/apple-cinnamon-roll.jpg';
import raisin from './assets/raisin-cinnamon-roll.jpg';
import walnut from './assets/walnut-cinnamon-roll.jpg';
import chocolate from './assets/double-chocolate-cinnamon-roll.jpg'
import strawberry from './assets/strawberry-cinnamon-roll.jpg';
import NavBar from './NavBar'
import Item from './Item'

const Homepage = () => {
  return (
    <div className="homepage">
      <div className="header-section">
        <img src={logo} width="25%" alt="logo"/>
        <div className="vert-header-section" >
          <NavBar></NavBar>
          <hr className="horizontal-line" />
          <p className="tagline"> Our hand-made cinnamon rolls</p>
        </div>
      </div>
    <div className="food-options">
      <div className="row">
        <Item src={original} alt="Original Cinnamon Roll" title="Original cinnamon roll" price="$2.49" />
        <Item src={apple} alt="Apple Cinnamon Roll" title="Apple cinnamon roll" price="$3.49" />
        <Item src={raisin} alt="Raisin Cinnamon Roll" title="Raisin cinnamon roll" price="$2.99" />
      </div>
      <div className="row">
        <Item src={walnut} alt="Walnut Cinnamon Roll" title="Walnut cinnamon roll" price="$3.49" />
        <Item src={chocolate} alt="Double Chocolate Cinnamon Roll" title="Double-chocolate cinnamon roll" price="$3.99" />
        <Item src={strawberry} alt="Strawberry Cinnamon Roll" title="Strawberry cinnamon roll" price="$3.99" />
      </div>
    </div>
  
  </div>

  );
}

export default Homepage;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import logo from './assets/logo.svg';
import original from './assets/original-cinnamon-roll.jpg';
import apple from './assets/apple-cinnamon-roll.jpg';
import raisin from './assets/raisin-cinnamon-roll.jpg';
import walnut from './assets/walnut-cinnamon-roll.jpg';
import chocolate from './assets/double-chocolate-cinnamon-roll.jpg'
import strawberry from './assets/strawberry-cinnamon-roll.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div class="header-section">
        <img src={logo} width="25%"/>
        <div class="vert-header-section" >
          <div class="navigation">
            <div class="product"> PRODUCTS </div>
            <div class="cart"> CART </div>
          </div>
          <p class="cart-items"> 0 item <br /> Total: $0</p>
          <hr class="horizontal-line" />

          <div id="myModal" class="modal">
            <div class="modal-content">
              <p>Added to cart:

              </p>
            </div>
          
          </div>
          <p class="tagline"> Our hand-made cinnamon rolls</p>
        </div>
      </div>
    <div class="food-options">
      <div class="row">
        <div class="item" id="originalRoll">
          <img class="image" src={original} alt="Original Cinnamon Roll"/>
          <p class="roll-title"> Original cinnamon roll</p>
          <div class="glazing-section">
            <p class="glazing"> Glazing: </p>
            <select class="dropdown"> 

            </select>
          </div>
          <div class="pack-size-section">
            <p class="pack-size"> Pack size:</p>
            <p class="btn sizes-1"> 1 </p>
            <p class="btn sizes-3"> 3 </p>
            <p class="btn sizes-6"> 6 </p>
            <p class="btn sizes-12"> 12 </p>
          </div>
          <div class="price-cart-section">
            <p class="price"> $2.49 </p>
            <p class="addtocart"> Add to Cart</p>
          </div>
        </div>
        <div class="item" id="appleCinnamonRoll">
          <img class="image" src={apple} alt="Apple Cinnamon Roll"/>
          <p class="roll-title"> Apple cinnamon roll</p>
          <div class="glazing-section">
            <p class="glazing"> Glazing: </p>
            <select class="dropdown"> 

            </select>
          </div>
          <div class="pack-size-section">
            <p class="pack-size"> Pack size:</p>
            <p class="btn sizes-1"> 1 </p>
            <p class="btn sizes-3"> 3 </p>
            <p class="btn sizes-6"> 6 </p>
            <p class="btn sizes-12"> 12 </p>
          </div>
          <div class="price-cart-section">
            <p class="price"> $3.49 </p>
            <p class="addtocart"> Add to Cart</p>
          </div>
        </div>
        <div class="item" id="raisinCinnamonRoll">
          <img class="image" src={raisin} alt="Raisin Cinnamon Roll"/>
          <p class="roll-title"> Raisin cinnamon roll</p>
          <div class="glazing-section">
            <p class="glazing"> Glazing: </p>
            <select class="dropdown"> 

            </select>
          </div>
          <div class="pack-size-section">
            <p class="pack-size"> Pack size:</p>
            <p class="btn sizes-1"> 1 </p>
            <p class="btn sizes-3"> 3 </p>
            <p class="btn sizes-6"> 6 </p>
            <p class="btn sizes-12"> 12 </p>
          </div>
          <div class="price-cart-section">
            <p class="price"> $2.99 </p>
            <p class="addtocart"> Add to Cart</p>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="item" id="walnutCinnamonRoll">
          <img class="image" src={walnut} alt="Walnut Cinnamon Roll"/>
          <p class="roll-title"> Walnut cinnamon roll</p>
          <div class="glazing-section">
            <p class="glazing"> Glazing: </p>
            <select class="dropdown"> 

            </select>
          </div>
          <div class="pack-size-section">
            <p class="pack-size"> Pack size:</p>
            <p class="btn sizes-1"> 1 </p>
            <p class="btn sizes-3"> 3 </p>
            <p class="btn sizes-6"> 6 </p>
            <p class="btn sizes-12"> 12 </p>
          </div>
          <div class="price-cart-section">
            <p class="price"> $3.49 </p>
            <p class="addtocart"> Add to Cart</p>
          </div>
        </div>
        <div class="item" id="doubleChocolateRoll">
          <img class="image" src={chocolate} alt="Double Chocolate Cinnamon Roll"/>
          <p class="roll-title"> Double-chocolate cinnamon roll</p>
          <div class="glazing-section">
            <p class="glazing"> Glazing: </p>
            <select class="dropdown"> 

            </select>
          </div>
          <div class="pack-size-section">
            <p class="pack-size"> Pack size:</p>
            <p class="btn sizes-1"> 1 </p>
            <p class="btn sizes-3"> 3 </p>
            <p class="btn sizes-6"> 6 </p>
            <p class="btn sizes-12"> 12 </p>
          </div>
          <div class="price-cart-section">
            <p class="price"> $3.99 </p>
            <p class="addtocart"> Add to Cart</p>
          </div>
        </div>
        <div class="item" id="strawberryRoll">
          <img class="image" src={strawberry} alt="Strawberry Cinnamon Roll"/>
          <p class="roll-title"> Strawberry cinnamon roll</p>
          <div class="glazing-section">
            <p class="glazing"> Glazing: </p>
            <select class="dropdown"> 

            </select>
          </div>
          <div class="pack-size-section">
            <p class="pack-size"> Pack size:</p>
            <p class="btn sizes-1"> 1 </p>
            <p class="btn sizes-3"> 3 </p>
            <p class="btn sizes-6"> 6 </p>
            <p class="btn sizes-12"> 12 </p>
          </div>
          <div class="price-cart-section">
            <p class="price"> $3.99 </p>
            <p class="addtocart"> Add to Cart</p>
          </div>
        </div>
      </div>
    </div>
  
  </div>

  );
}

export default App;

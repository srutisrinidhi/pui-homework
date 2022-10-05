import './App.css';
import React, { Component } from 'react';
import NavBar from './NavBar'
import Roll from './Item'
import CartRoll from './cartRoll'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rolls : [
        {
          src:'assets/original-cinnamon-roll.jpg',
          alt:"Original Cinnamon Roll",
          title:"Original cinnamon roll",
          price:"2.49",
          basePrice:"2.49",
          currentGlaze: "Keep original",
          currentQuantity: "1"
        },
        {
          src:'assets/apple-cinnamon-roll.jpg',
          alt:"Apple Cinnamon Roll",
          title:"Apple cinnamon roll",
          price:"3.49",
          basePrice:"3.49",
          currentGlaze: "Keep original",
          currentQuantity: "1"
        },
        {
          src:'assets/raisin-cinnamon-roll.jpg',
          alt:"Raisin Cinnamon Roll",
          title:"Raisin cinnamon roll",
          price:"2.99",
          basePrice:"2.99",
          currentGlaze: "Keep original",
          currentQuantity: "1"
        },
        {
          src:'assets/walnut-cinnamon-roll.jpg',
          alt:"Walnut Cinnamon Roll",
          title:"Walnut cinnamon roll",
          price:"3.49",
          basePrice:"3.49",
          currentGlaze: "Keep original",
          currentQuantity: "1"
        },
        {
          src:'assets/double-chocolate-cinnamon-roll.jpg',
          alt:"Double Chocolate Cinnamon Roll",
          title:"Double-chocolate cinnamon roll",
          price:"3.99",
          basePrice:"3.99",
          currentGlaze: "Keep original",
          currentQuantity: "1"
        },
        {
          src:'assets/strawberry-cinnamon-roll.jpg',
          alt:"Strawberry Cinnamon Roll",
          title:"Strawberry cinnamon roll",
          price:"3.99",
          basePrice:"3.99",
          currentGlaze: "Keep original",
          currentQuantity: "1"
        }
      ],
      cartItems: [],
      totalPrice: 0,
      glazingOptions: {"Keep original": 0, "Sugar milk": 0, "Vanilla milk": 0.5, "Double chocolate": 1.5},
      popupDisplay: "None",
      latestRoll:{
        title:"",
        glazing:"",
        packSize:"",
        price:""
      },
      searchText: "",
      searchTextTemp: "",
      noMatch: 'none',
      sortCriterea: "name",
      showShoppingCart: 'none',
      emptyCart: 'block'
    }
  }

  /* Function hides the added to cart popup */
  removeBlock = () =>{
    this.setState(prevState => ({
      ...prevState,
      popupDisplay: "none"
    }));
  }

  /* Function that adds item to cart, updates webpage and triggers popup */
  addToCartList  = (rollIndex) => {
    let price = this.state.totalPrice + Number(this.state.rolls[rollIndex].price)
    let roll = this.state.rolls[rollIndex]
    let lastRoll = {
      title: roll.title,
      glazing: roll.currentGlaze,
      packSize: roll.currentQuantity,
      price: roll.price
    }
    this.setState(prevState => ({
      ...prevState,
      cartItems: [...prevState.cartItems, roll],
      totalPrice: price,
      latestRoll: lastRoll,
      popupDisplay: "block",
      emptyCart: "none"
    }));
    const myTimeout = setTimeout(this.removeBlock, 3000);
    
  }

  /* Function changes the color of pack size buttons and computes new price */
  changeQuantity = (className, rollIndex) => {
    let tempRolls = this.state.rolls
    tempRolls[rollIndex].size1Color = "white"
    tempRolls[rollIndex].size3Color = "white"
    tempRolls[rollIndex].size6Color = "white"
    tempRolls[rollIndex].size12Color = "white"
    if (className === "btn sizes-1"){
      tempRolls[rollIndex].price = Number(this.state.rolls[rollIndex].basePrice) + Number(this.state.glazingOptions[this.state.rolls[rollIndex].currentGlaze])
      tempRolls[rollIndex].price = String(tempRolls[rollIndex].price.toFixed(2))
      tempRolls[rollIndex].currentQuantity = "1"
      tempRolls[rollIndex].size1Color = "lightgrey"
    }
    else if (className === "btn sizes-3"){
      tempRolls[rollIndex].price = (Number(this.state.rolls[rollIndex].basePrice) + Number(this.state.glazingOptions[this.state.rolls[rollIndex].currentGlaze]))*3
      tempRolls[rollIndex].price = String(tempRolls[rollIndex].price.toFixed(2))
      tempRolls[rollIndex].currentQuantity = "3"
      tempRolls[rollIndex].size3Color = "lightgrey"
    }
    else if (className === "btn sizes-6"){
      tempRolls[rollIndex].price = (Number(this.state.rolls[rollIndex].basePrice) + Number(this.state.glazingOptions[this.state.rolls[rollIndex].currentGlaze]))*5
      tempRolls[rollIndex].price = String(tempRolls[rollIndex].price.toFixed(2))
      tempRolls[rollIndex].currentQuantity = "6"
      tempRolls[rollIndex].size6Color = "lightgrey"
    }
    else if (className === "btn sizes-12"){
      tempRolls[rollIndex].price = (Number(this.state.rolls[rollIndex].basePrice) + Number(this.state.glazingOptions[this.state.rolls[rollIndex].currentGlaze]))*10
      tempRolls[rollIndex].price = String(tempRolls[rollIndex].price.toFixed(2))
      tempRolls[rollIndex].currentQuantity = "12"
      tempRolls[rollIndex].size12Color = "lightgrey"
    }
    this.setState(prevState => ({
      ...prevState,
      rolls: tempRolls
    }))
  }

  /* Function recomputes price when a new glazing option is chosen */
  changeGlazing = (value, rollIndex) => {
    let tempRolls = this.state.rolls
    if (this.state.rolls[rollIndex].currentQuantity === "6") {
      tempRolls[rollIndex].price = (Number(this.state.rolls[rollIndex].basePrice) + Number(this.state.glazingOptions[value]))*6;
    }
    else if (this.state.rolls[rollIndex].currentQuantity === "12") {
      tempRolls[rollIndex].price = (Number(this.state.rolls[rollIndex].basePrice) + Number(this.state.glazingOptions[value]))*10;
    }
    else if (this.state.rolls[rollIndex].currentQuantity === "3") {
      tempRolls[rollIndex].price = (Number(this.state.rolls[rollIndex].basePrice) + Number(this.state.glazingOptions[value]))*3;
    }
    else {
      tempRolls[rollIndex].price = (Number(this.state.rolls[rollIndex].basePrice) + Number(this.state.glazingOptions[value]));
    }
    tempRolls[rollIndex].price = String(tempRolls[rollIndex].price.toFixed(2))
    tempRolls[rollIndex].currentGlaze = value;
    this.setState(prevState => ({
      ...prevState,
      rolls: tempRolls
    }))

  }

  searchText = () => {
    let temp = this.state.searchTextTemp
    this.setState(prevState => ({
      ...prevState,
      searchText: temp
    }))
    let count = 0
    for (let i=0; i<6; i++){
      if (this.state.rolls[i].title.includes(temp)){
        count++
      }
    }
    if (count == 0){
      this.setState(prevState => ({
        ...prevState,
        noMatch: 'block'
      }))
    }
    else{
      this.setState(prevState => ({
        ...prevState,
        noMatch: 'none'
      }))
    }
  }

  updateSearchText = (event) => {
    this.setState(prevState => ({
      ...prevState,
      searchTextTemp: event.target.value
    }))
  }

  compare = (a, b) =>{
    if (this.state.sortCriterea == "name"){
      return a.title > b.title ? 1 : b.title > a.title ? -1 : 0;
    }
    else{
      return Number(a.price) - Number(b.price)
    }
  }

  sortRolls = (v) => {
    this.setState(prevState => ({
      ...prevState,
      sortCriterea: v.target.value
    }))
  }
  
  showCart = (v) => {
    if (this.state.showShoppingCart === "none"){
      this.setState(prevState => ({
        ...prevState,
        showShoppingCart: "block"
      }))
      if (this.state.cartItems.length==0){
        this.setState(prevState => ({
          ...prevState,
          emptyCart: "block"
        }))
      } else {
          this.setState(prevState => ({
            ...prevState,
            emptyCart: "none"
          }))
      }
    } else {
        this.setState(prevState => ({
          ...prevState,
          showShoppingCart: "none"
        }))
    }
  }

  removeFromCart = (roll) => {
    let temp = this.state.cartItems
    const index = temp.indexOf(roll);
    let tempTotalPrice = this.state.totalPrice - roll.price;
    if (index > -1) {
      temp.splice(index, 1); 
    }
    this.setState(prevState => ({
      ...prevState,
      cartItems: temp,
      totalPrice: tempTotalPrice
    }))
  }

  render() {
    return (
      <div className="homepage">
      <div className="header-section">
        <img src='assets/logo.svg' width="25%" alt="logo"/>
        <div className="vert-header-section" >
          <NavBar itemCount={this.state.cartItems.length} totalPrice={this.state.totalPrice} showCart={this.showCart}></NavBar>
          <hr className="horizontal-line" />
          <p className="tagline"> Our hand-made cinnamon rolls</p>
        </div>
        <div id="myModal" className="modal" style={{display:this.state.popupDisplay}}>
            <div className="modal-content">
              <p>Added to cart: <br/> <br/> </p> 
              <p className='bold'>{this.state.latestRoll.title} <br/> </p>
              <p>{this.state.latestRoll.glazing} <br/> Pack of {this.state.latestRoll.packSize} <br/> Prize: $ {this.state.latestRoll.price} </p>

            </div>
          
          </div>
      </div>
      <div className='shopping_cart' style={{display:this.state.showShoppingCart}}>
        <hr className='thick_line'/>
        <span className="cart_heading"> Shopping Cart ({this.state.cartItems.length} items)</span>
        <span className="cart_price"> Total: ${this.state.totalPrice.toFixed(2)}</span>
        <div className="row_cart">
          <div style={{display:this.state.emptyCart}}> This cart is empty!</div>
        {this.state.cartItems.map(
          (roll, idx) => {
              return <CartRoll 
              src={roll.src} 
              alt={roll.alt} 
              title={roll.title} 
              price={roll.price}
              pack_size={roll.currentQuantity}
              glazing={roll.currentGlaze}
              removeFromCart={this.removeFromCart}
              roll={roll}/>
          }
        )}
      </div>
        <hr className='thick_line'/>
      </div>
      <div className='search_div'>
        <input className='search_input' name='search_text' onChange={this.updateSearchText}></input>
        <button className='search' onClick={this.searchText}>Search</button>
        <span className='sort_div'>
          <label className='sort'> sort by:</label>
          <select className='sort_select' onChange={(v) => this.sortRolls(v)}>
            <option value="name">Name</option>
            <option value="base_price">Base Price</option>
          </select>
        </span>
      </div>
      
    <div className="food-options">
      <div className="row">
        {this.state.rolls.sort(this.compare).map(
          (roll, idx) => {
            if ((this.state.searchText == "")|| (roll.title.includes(this.state.searchText))){
              return <Roll 
              src={roll.src} 
              alt={roll.alt} 
              title={roll.title} 
              price={roll.price} 
              addToCart={this.addToCartList} 
              rollIndex={idx} 
              changeGlazing={this.changeGlazing} 
              changeQuantity={this.changeQuantity} />
            } else {
              return <div/>
            }
          }
        )}
         <div className="no_match" style={{hidden:this.state.noMatch}}> No match!</div>
      </div>
    </div>
  
  </div>
    );
  }
}

export default App;

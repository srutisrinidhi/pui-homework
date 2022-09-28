import './App.css';
import React, { Component } from 'react';
import logo from './assets/logo.svg';
import original from './assets/original-cinnamon-roll.jpg';
import apple from './assets/apple-cinnamon-roll.jpg';
import raisin from './assets/raisin-cinnamon-roll.jpg';
import walnut from './assets/walnut-cinnamon-roll.jpg';
import chocolate from './assets/double-chocolate-cinnamon-roll.jpg'
import strawberry from './assets/strawberry-cinnamon-roll.jpg';
import NavBar from './NavBar'
import Roll from './Item'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rolls : [
        {
          src:{original},
          alt:"Original Cinnamon Roll",
          title:"Original cinnamon roll",
          price:"2.49",
          basePrice:"2.49",
          currentGlaze: "Keep original",
          currentQuantity: "1",
          size1Color:"lightgrey",
          size3Color:"white",
          size6Color:"white",
          size12Color:"white"
        },
        {
          src:{apple},
          alt:"Apple Cinnamon Roll",
          title:"Apple cinnamon roll",
          price:"3.49",
          basePrice:"3.49",
          currentGlaze: "Keep original",
          currentQuantity: "1",
          size1Color:"lightgrey",
          size3Color:"white",
          size6Color:"white",
          size12Color:"white"
        },
        {
          src:{raisin},
          alt:"Raisin Cinnamon Roll",
          title:"Raisin cinnamon roll",
          price:"2.99",
          basePrice:"2.99",
          currentGlaze: "Keep original",
          currentQuantity: "1",
          size1Color:"lightgrey",
          size3Color:"white",
          size6Color:"white",
          size12Color:"white"
        },
        {
          src:{walnut},
          alt:"Walnut Cinnamon Roll",
          title:"Walnut cinnamon roll",
          price:"3.49",
          basePrice:"3.49",
          currentGlaze: "Keep original",
          currentQuantity: "1",
          size1Color:"lightgrey",
          size3Color:"white",
          size6Color:"white",
          size12Color:"white"
        },
        {
          src:{chocolate},
          alt:"Double Chocolate Cinnamon Roll",
          title:"Double-chocolate cinnamon roll",
          price:"3.99",
          basePrice:"3.99",
          currentGlaze: "Keep original",
          currentQuantity: "1",
          size1Color:"lightgrey",
          size3Color:"white",
          size6Color:"white",
          size12Color:"white"
        },
        {
          src:{strawberry},
          alt:"Strawberry Cinnamon Roll",
          title:"Strawberry cinnamon roll",
          price:"3.99",
          basePrice:"3.99",
          currentGlaze: "Keep original",
          currentQuantity: "1",
          size1Color:"lightgrey",
          size3Color:"white",
          size6Color:"white",
          size12Color:"white"
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
      }
    }
  }
  removeBlock = () =>{
    this.setState(prevState => ({
      ...prevState,
      popupDisplay: "none"
    }));
}
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
      popupDisplay: "block"
    }));
    const myTimeout = setTimeout(this.removeBlock, 3000);
  }

  changeQuantity = (className, rollIndex) => {
    let tempRolls = this.state.rolls
    tempRolls[rollIndex].size1Color = "white"
    tempRolls[rollIndex].size3Color = "white"
    tempRolls[rollIndex].size6Color = "white"
    tempRolls[rollIndex].size12Color = "white"
    if (className === "btn sizes-1"){
      console.log("1")
      tempRolls[rollIndex].price = Number(this.state.rolls[rollIndex].basePrice) + Number(this.state.glazingOptions[this.state.rolls[rollIndex].currentGlaze])
      tempRolls[rollIndex].price = String(tempRolls[rollIndex].price.toFixed(2))
      tempRolls[rollIndex].currentQuantity = "1"
      tempRolls[rollIndex].size1Color = "lightgrey"
    }
    else if (className === "btn sizes-3"){
      console.log("3")
      tempRolls[rollIndex].price = (Number(this.state.rolls[rollIndex].basePrice) + Number(this.state.glazingOptions[this.state.rolls[rollIndex].currentGlaze]))*3
      tempRolls[rollIndex].price = String(tempRolls[rollIndex].price.toFixed(2))
      tempRolls[rollIndex].currentQuantity = "3"
      tempRolls[rollIndex].size3Color = "lightgrey"
    }
    else if (className === "btn sizes-6"){
      console.log("6")
      tempRolls[rollIndex].price = (Number(this.state.rolls[rollIndex].basePrice) + Number(this.state.glazingOptions[this.state.rolls[rollIndex].currentGlaze]))*5
      tempRolls[rollIndex].price = String(tempRolls[rollIndex].price.toFixed(2))
      tempRolls[rollIndex].currentQuantity = "6"
      tempRolls[rollIndex].size6Color = "lightgrey"
    }
    else if (className === "btn sizes-12"){
      console.log("12")
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
    console.log(Number(this.state.rolls[rollIndex].price))
    this.setState(prevState => ({
      ...prevState,
      rolls: tempRolls
    }))

  }
  render() {
    return (
      <div className="homepage">
      <div className="header-section">
        <img src={logo} width="25%" alt="logo"/>
        <div className="vert-header-section" >
          <NavBar itemCount={this.state.cartItems.length} totalPrice={this.state.totalPrice}></NavBar>
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
    <div className="food-options">
      <div className="row">
        <Roll src={original} alt={this.state.rolls[0].alt} title={this.state.rolls[0].title} price={this.state.rolls[0].price} addToCart={this.addToCartList} rollIndex="0" changeGlazing={this.changeGlazing} changeQuantity={this.changeQuantity} size1Color={this.state.rolls[0].size1Color} size3Color={this.state.rolls[0].size3Color} size6Color={this.state.rolls[0].size6Color} size12Color={this.state.rolls[0].size12Color}/>
        <Roll src={apple} alt={this.state.rolls[1].alt} title={this.state.rolls[1].title} price={this.state.rolls[1].price} addToCart={this.addToCartList} rollIndex="1" changeGlazing={this.changeGlazing} changeQuantity={this.changeQuantity} size1Color={this.state.rolls[1].size1Color} size3Color={this.state.rolls[1].size3Color} size6Color={this.state.rolls[1].size6Color} size12Color={this.state.rolls[1].size12Color}/>
        <Roll src={raisin} alt={this.state.rolls[2].alt} title={this.state.rolls[2].title} price={this.state.rolls[2].price} addToCart={this.addToCartList} rollIndex="2" changeGlazing={this.changeGlazing} changeQuantity={this.changeQuantity} size1Color={this.state.rolls[2].size1Color} size3Color={this.state.rolls[2].size3Color} size6Color={this.state.rolls[2].size6Color} size12Color={this.state.rolls[2].size12Color}/>
      </div>
      <div className="row">
        <Roll src={walnut} alt={this.state.rolls[3].alt} title={this.state.rolls[3].title} price={this.state.rolls[3].price} addToCart={this.addToCartList} rollIndex="3" changeGlazing={this.changeGlazing} changeQuantity={this.changeQuantity} size1Color={this.state.rolls[3].size1Color} size3Color={this.state.rolls[3].size3Color} size6Color={this.state.rolls[3].size6Color} size12Color={this.state.rolls[3].size12Color}/>
        <Roll src={chocolate} alt={this.state.rolls[4].alt} title={this.state.rolls[4].title} price={this.state.rolls[4].price} addToCart={this.addToCartList} rollIndex="4" changeGlazing={this.changeGlazing} changeQuantity={this.changeQuantity} size1Color={this.state.rolls[4].size1Color} size3Color={this.state.rolls[4].size3Color} size6Color={this.state.rolls[4].size6Color} size12Color={this.state.rolls[4].size12Color}/>
        <Roll src={strawberry} alt={this.state.rolls[5].alt} title={this.state.rolls[5].title} price={this.state.rolls[5].price} addToCart={this.addToCartList} rollIndex="5" changeGlazing={this.changeGlazing} changeQuantity={this.changeQuantity} size1Color={this.state.rolls[5].size1Color} size3Color={this.state.rolls[5].size3Color} size6Color={this.state.rolls[5].size6Color} size12Color={this.state.rolls[5].size12Color}/>
      </div>
    </div>
  
  </div>
    );
  }
}

export default App;

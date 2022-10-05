import './cartRoll.css'
import React, { Component } from 'react';

class CartRoll extends Component {
  render(){
    return (
        <div className="cartRollDiv">
          <img className="image_cart" src={this.props.src} alt={this.props.alt}/>
          <p className="roll-title_cart"> {this.props.title}</p>
          <p className="glazing_cart"> Glazing: {this.props.glazing}</p>
          <p className="pack-size_cart"> Pack size: {this.props.pack_size}</p>
          <p className="price_cart"> ${this.props.price} </p>
          <p className="remove" onClick={() => this.props.removeFromCart(this.props.roll)}>Remove</p>
        </div>
    );
  }
}

export default CartRoll;
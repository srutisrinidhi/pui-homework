import './Item.css'
import React, { Component } from 'react';

class Roll extends Component {
  render(){
    return (
        <div className="item">
          <img className="image" src={this.props.src} alt={this.props.alt}/>
          <p className="roll-title"> {this.props.title}</p>
          <div className="glazing-section">
            <p className="glazing"> Glazing: </p>
            <select className="dropdown" onChange={(val) => this.props.changeGlazing(val.target.value, this.props.rollIndex)}> 
              <option value="Keep original">Keep original</option>
              <option value="Sugar milk">Sugar milk</option>
              <option value="Vanilla milk">Vanilla milk</option>
              <option value="Double chocolate">Double chocolate</option>
            </select>
          </div>
          <div className="pack-size-section">
            <p className="pack-size"> Pack size:</p>
            <p className="btn sizes-1" style={{backgroundColor: this.props.size1Color}} onClick={(val) => this.props.changeQuantity(val.target.className, this.props.rollIndex)}> 1 </p>
            <p className="btn sizes-3" style={{backgroundColor: this.props.size3Color}} onClick={(val) => this.props.changeQuantity(val.target.className, this.props.rollIndex)}> 3 </p>
            <p className="btn sizes-6" style={{backgroundColor: this.props.size6Color}} onClick={(val) => this.props.changeQuantity(val.target.className, this.props.rollIndex)}> 6 </p>
            <p className="btn sizes-12" style={{backgroundColor: this.props.size12Color}} onClick={(val) => this.props.changeQuantity(val.target.className, this.props.rollIndex)}> 12 </p>
          </div>
          <div className="price-cart-section">
            <p className="price"> ${this.props.price} </p>
            <p className="addtocart" onClick={() => this.props.addToCart(this.props.rollIndex)}> Add to Cart</p>
          </div>
        </div>
    );
  }
}

export default Roll;
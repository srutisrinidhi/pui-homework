import './Item.css'
import React, { Component } from 'react';

class Roll extends Component {
  constructor(props) {
    super(props);
    this.state = {
      packSize: 1
    };    
    this.selectPackSize = this.selectPackSize.bind(this);
  }

  selectPackSize(size){
    if (size === 1){
      this.setState({
        packSize: 1
      })
    } else if (size === 3){
      this.setState({
        packSize: 3
      })

    } else if (size === 6){
      this.setState({
        packSize: 6
      })
    } else {
      this.setState({
        packSize: 12
      })
    }
  }
  render(){
    let btn_1 = "btn sizes-1"
    let btn_3 = "btn sizes-3"
    let btn_6= "btn sizes-6"
    let btn_12 = "btn sizes-12"
    if (this.state.packSize == 1){
      btn_1 += " selected"
    } else if (this.state.packSize == 3){
      btn_3 += " selected"
    } if (this.state.packSize == 6){
      btn_6 += " selected"
    } if (this.state.packSize == 12){
      btn_12 += " selected"
    } 
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
            <p className={btn_1} onClick={(val) => {this.props.changeQuantity(val.target.className, this.props.rollIndex); this.selectPackSize(1)}}> 1 </p>
            <p className={btn_3} onClick={(val) => {this.props.changeQuantity(val.target.className, this.props.rollIndex); this.selectPackSize(3)}}> 3 </p>
            <p className={btn_6} onClick={(val) => {this.props.changeQuantity(val.target.className, this.props.rollIndex); this.selectPackSize(6)}}> 6 </p>
            <p className={btn_12} onClick={(val) => {this.props.changeQuantity(val.target.className, this.props.rollIndex); this.selectPackSize(12)}}> 12 </p>
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
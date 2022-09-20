import './Item.css'

const Item = (props) => {
    const {src, alt, title, price} = props
    return (
        <div className="item">
          <img className="image" src={src} alt={alt}/>
          <p className="roll-title"> {title}</p>
          <div className="glazing-section">
            <p className="glazing"> Glazing: </p>
            <select className="dropdown"> 
            </select>
          </div>
          <div className="pack-size-section">
            <p className="pack-size"> Pack size:</p>
            <p className="btn sizes-1"> 1 </p>
            <p className="btn sizes-3"> 3 </p>
            <p className="btn sizes-6"> 6 </p>
            <p className="btn sizes-12"> 12 </p>
          </div>
          <div className="price-cart-section">
            <p className="price"> {price} </p>
            <p className="addtocart"> Add to Cart</p>
          </div>
        </div>
    );
}

export default Item;
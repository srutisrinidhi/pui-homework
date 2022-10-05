import './NavBar.css'

const NavBar = (props) => {
    var {itemCount, totalPrice, showCart} = props
    return (
        <div className="navigation">
            <div className="product"> 
                <div className='product-header'>PRODUCTS </div>
            </div>
            <div className="cart"> 
                <div className='cart-header' onClick={(v) => showCart(v)}> CART </div>
                <p className="cart-items"> {itemCount} item <br/> Total: ${totalPrice}</p>
            </div>
          </div>
    );
}

export default NavBar;
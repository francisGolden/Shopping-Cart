import { useContext } from "react";
import { Link } from "react-router-dom";
import CartContext from "./context/Context";

const Navbar = () => {
    
    const {products} = useContext(CartContext)
    
    return (
        <div id="navbar-container">
            <Link to="/" className="link"><h1>NFT World</h1></Link>
            <nav id="navbar-nav">
                
                <Link to="/shop" className="link">Shop</Link>
                <Link to="/cart" className="link">Cart <b>&#40;{products.filter(item=>item.orders>0).length}&#41;</b></Link>
            </nav>
        </div>
    )
}

export default Navbar;
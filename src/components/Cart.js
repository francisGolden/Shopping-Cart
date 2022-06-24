import { useContext } from "react";
import CartContext from "./context/Context";
import uniqid from "uniqid";

const Cart = () => {
    const {products, setProducts} = useContext(CartContext)

    

    const handleMore = (e) => {
        // eslint-disable-next-line eqeqeq
        setProducts(products.map(item=>item.name == e.target.id ? {
            ...item, orders: item.orders + 1}: item))
    }

    const handleLess = (e) => {
        // eslint-disable-next-line eqeqeq
        setProducts(products.map(item=>item.name == e.target.id ? {
            ...item, orders: item.orders - 1}: item))
    }

    const cartProducts = products.filter(item=>item.orders>0)   

    const getSubTotal = (items) => {
        const fn = (total, { price, orders }) => total + price * orders;
        return items.reduce(fn, 0)
    }

    return (
        <div id="cart-container-super">
            <div id="cart-container">
            {/* compact conditional statement using ? and : */}
            {/* so: if the cart is empty, display something. 
                if it's not empty, show the cart items*/}
            {cartProducts.length > 0 ? <div id="subtotal">Total: {getSubTotal(cartProducts)} shit-coins</div>: <div className="empty-cart"><h1>Cart is empty </h1></div>}
            {
                cartProducts.map((item)=>{
                    return  <div className="cart-box" key={uniqid()}>
                                <div><img className="logo" src={item.img} alt="" /></div>
                                <div>{item.stname}</div>
                                <button id={item.name} onClick={handleLess}>-</button>
                                <button id={item.name} onClick={handleMore}>+</button>
                                <div>pcs. {item.orders}</div>
                                <div>price: {item.price*item.orders}</div>
                            </div>
                })
            }
            {cartProducts.length > 0 ? <button id="checkout" onClick={()=>{alert("Thank you for stopping by!")}}>Checkout</button>: null}
            
            
            </div>
        </div>

    )
}

export default Cart;
import { useContext } from "react";
import CartContext from "./context/Context";
import uniqid from "uniqid";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Shop = () => {
    const {products, setProducts} = useContext(CartContext)

    const notify = () => toast("Item added to the cart!");

    const handleClick = (e) => {

        // eslint-disable-next-line eqeqeq
        setProducts(()=>products.map(item=>item.name == e.target.id ? {
            ...item, orders: item.orders + 1}:item))

        
        notify()

    }

    console.log(products)
    
    return (
        <div id="shop-container">

            <ToastContainer 
                position="top-center"
                autoClose={200}
                hideProgressBar={true}
                theme="colored"
                
            />

            <div id="shop-grid">
            {
                products.map((item)=>{
                    return  <span key={uniqid()} className="item-box"> 
                                <div><img className="logo" src={item.img} alt="" /></div>
                                <div className="item-name">{item.stname}</div>
                                <div>{item.price} shit-coins</div>
                                <button className="add-btn" id={item.name} onClick={handleClick}>Add to cart</button>
                            </span>
                })
            }
            </div>
        </div>

    )
}

export default Shop;
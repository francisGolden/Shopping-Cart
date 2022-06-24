import { useContext } from "react";
import CartContext from "./context/Context";
import uniqid from "uniqid"

const Shop = () => {
    const {products, setProducts} = useContext(CartContext)

    const handleClick = (e) => {

        // eslint-disable-next-line eqeqeq
        setProducts(()=>products.map(item=>item.name == e.target.id ? {
            ...item, orders: item.orders + 1}:item))

    }



    console.log(products)
    
    return (
        <div id="shop-container">
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
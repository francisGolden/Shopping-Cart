import { createContext, useState } from "react";

const CartContext = createContext()

export function CartProvider({children}){
    const [products, setProducts] = useState([
        {name: "doodles", stname: "Doodles", price: 10, img: `doodles.png`, orders: 0},
        {name: "bored-apes", stname: "Bored Apes", price: 25, img: "bored-apes.png", orders: 0},
        {name: "crypto-punks", stname: "Crypto Punks", price: 30, img: "crypto-punks.png", orders: 0},
        {name: "axies", stname: "Axies", price: 20, img: "axies.png", orders: 0},
        {name: "meebits", stname: "Meebits", price: 75, img: "meebits.png", orders: 0},
        {name: "mutant-ape", stname: "Mutant Apes", price: 40, img: "mutant-apes.png", orders: 0},
        {name: "dribblies", stname: "Dribblies", price: 23, img: "dribblies.png", orders: 0},
        {name: "crypto-baristas", stname: "Crypto Baristas", price: 20, img: "crypto-baristas.png", orders: 0},
        {name: "kibatsu-mecha", stname: "Kibatsu Mecha", price: 75, img: "kibatsu-mecha.png", orders: 0},
        {name: "moonbirds", stname: "Moonbirds", price: 23, img: "moonbirds.png", orders: 0},
    ])
    
    return(
        <CartContext.Provider value={{products, setProducts}}>{children}</CartContext.Provider>
    )
}


export default CartContext;
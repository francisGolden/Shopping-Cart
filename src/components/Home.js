import { Link } from "react-router-dom";

const Home = () => {
    
    return (
        <div id="home-container">
                
                <h1>NFT WORLD</h1><br></br>
                <h2>The best NFT marketplace <br></br>in the entire universe</h2>
                
                <br></br>
                <Link to="/shop" class="link"><h1>Shop Now</h1></Link>
                
        </div>
    )
}

export default Home;
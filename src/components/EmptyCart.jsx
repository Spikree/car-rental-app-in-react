import "./styles/main.css";
import { Link } from 'react-router-dom';

function EmptyCart() {
    return <>
            <div className="empty-cart">
            <div className="img-cart">
            <img src="https://www.99fashionbrands.com/wp-content/uploads/2020/12/empty_cart.png" alt="empty" />
            </div>
            <div className="text-cart">
                <h3>
                    Your cart is empty
                </h3>
                <p>add cars to cart to rent</p>
                <div className="btn-box">
        <Link to="/Cars"><button>our cars</button></Link>
        </div>
            </div>
        </div>
    </>
}

export default EmptyCart;
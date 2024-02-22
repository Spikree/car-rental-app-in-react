import "./styles/main.css"
import EmptyCart from "./EmptyCart";
import CartWithCars from "./CartWithCars";
import { useState } from "react";

function Cart() {
    const [cart , addToCart] = useState([]);

    function addItemToCart(car) {
        addToCart(prevCar => {
            return [...prevCar , car]
        });
    }

    if (cart.length === 0) {
        return <>
        <EmptyCart />
    </>
    } else if (cart.length != 0) {
        return <>
            <CartWithCars />
        </>
    }
}

export default Cart;
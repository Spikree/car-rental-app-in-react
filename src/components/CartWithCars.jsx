import RentalCars from "./RentalCars";
import "./styles/main.css";

function CartWithCars(props) {
    return <>
        List of cars you want to rent...
        <RentalCars insertCar={props.insertCar}  />
    </>
}

export default CartWithCars;
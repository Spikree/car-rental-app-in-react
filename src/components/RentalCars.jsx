import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
function RentalCars(props) {
  const [cars, addCars] = useState([]);

  function addToCart(car) {
    addCars((prev) => [...prev, car]);
  }

  console.log(cars);

  return (
    <>
      <div className="card">
        <img src={props.imageLink} alt="Car Image" />
        <div className="card-content">
          <div className="card-title">{props.carName}</div>
          <div className="card-text">{props.carPrice}</div>
          <div className="icon-cart">
            <FontAwesomeIcon
              onClick={() => addToCart(props.id)}
              className="icon-cart"
              icon={props.icon}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default RentalCars;

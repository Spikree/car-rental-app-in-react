import "./styles/main.css";
import RentalCars from "./RentalCars"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCar } from '@fortawesome/free-solid-svg-icons'
import { faMoneyBill } from '@fortawesome/free-solid-svg-icons'
import { faPlane } from '@fortawesome/free-solid-svg-icons'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { slides } from  "./data/carouselData.json"
import Carousel from "./Carousel";
import carsData from "./data/carsData";
import Footer from "./Footer";
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

function Cars() {
    return <>
    <div className="main-cars">
    <div className="page-header">
        <h1>Need a big or small car</h1>
        <p className="page-header-paragraph">we have them all compact, Mid-sized Full size, Mini-vans, and convertables</p>
    </div>
    <div className="cars-images">
     <Carousel  data={slides} />
    </div>
    <div className="features">

    <div className="components">
    <FontAwesomeIcon className="icon" icon={faCar} />
    <h3>Short term rental Available</h3>
    <p>Flexible rental options for immediate need</p>
    </div>

          <div className="components">
            <FontAwesomeIcon className="icon" icon={faMoneyBill} />
            <h3>Out of state rental competitive rates</h3>
            <p>Explore our competitive rates for out of state rental</p>
          </div>

          <div className="components">
            <FontAwesomeIcon className="icon" icon={faPlane} />
            <h3>Free Pickup</h3>
            <p>Free airport pickup or within 5 miles from our location</p>
          </div>

    <div  className="components">
    <FontAwesomeIcon className="icon" icon={faCheck} />
    <h3>Everyone Is Approved</h3>
    <p>Anyone with a valid drivers license is accepted.</p>
    </div>
    </div>
    <div className="rental-cars">
        {carsData.map((car) => {
          return <RentalCars
            id={car.id}
            key = {car.id}
            imageLink = {car.imgUrl}
            carName = {car.name}
            carPrice = {car.price}
            icon = {faShoppingCart}
        />
        })}

    </div>
    <Footer />
    <br />
    </div>
    </>
}

export default Cars;

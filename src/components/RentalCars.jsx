import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
function RentalCars(props) {

    return <>
    <div className="card">
    <img src={props.imageLink} alt="Car Image" />
    <div className="card-content">
    <div className="card-title">{props.carName}</div>
    <div className="card-text">{props.carPrice}</div>
    <div className="icon-cart"><FontAwesomeIcon className="icon-cart" icon={props.icon} /></div>
    </div>
    </div>
    </>
}

export default RentalCars;
function RentalCars(props) {
    return <>
    <div className="card">
    <img src={props.imageLink} alt="Car Image" />
    <div className="card-content">
    <div className="card-title">{props.carName}</div>
    <div className="card-text">{props.carPrice}</div>
    </div>
    </div>
    </>
}

export default RentalCars;
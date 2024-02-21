import "./styles/main.css"
import { Link } from 'react-router-dom';
import Footer from "./Footer"

function Location() {
    return <>
    <div className="location">
        <div className="location-text">
            <h1>
                We are available all across germany
            </h1>
            <div className="btn-box">
        <Link to="/Cars"><button>our cars</button></Link>
        </div>
        </div>
        <div className="map">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4334395.874338958!2d6.408127160625985!3d50.889616542067174!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479a721ec2b1be6b%3A0x75e85d6b8e91e55b!2sGermany!5e0!3m2!1sen!2sin!4v1708541866945!5m2!1sen!2sin" width="600" height="450" style={{border:0, borderRadius: "30px"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
    </div>
    <br />
    <br />
    <br />
    <Footer/>
    <br />
    </>
}

export default Location;
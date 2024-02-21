import Footer from "./Footer";
import { Link } from 'react-router-dom';

function AboutUs() {
    return <>
    <div style={{paddingTop:"40px"}} className="about-us-all">
    <div className="about-us-main"> 
        <div className="about-us">
            <div>
            <h1 className="about-h1">About <span className="us">us</span></h1>
            <p>Your journey starts here.</p>
            </div>
            <p className="about-us-paragraph" style={{color: "gray"}}> 
Unleash your travel spirit with Miles Rental! Navigate cityscapes or conquer countryside wonders – our versatile fleet fuels your escape. Experience the freedom of choice, from budget-friendly rides to luxury cruisers. We offer competitive rates, exceptional service, and unwavering commitment to quality and safety. Miles Rental: where every journey begins with unforgettable smiles.</p>
        <div className="btn-box">
        <Link to="/Cars"><button>our cars</button></Link>
        </div>
        </div>
        <div className="cars-images-about">
            <img className="about-image" src="https://www.seekpng.com/png/detail/213-2133261_new-2019-mercedes-benz-glc-glc-2018-mercedes.png" alt="" />
        </div>
    </div>
    <br />
    <br />
    <br />
    <Footer />
    <br />
    </div>
    </>
}

export default AboutUs;
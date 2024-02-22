import "./styles/main.css"
import { Link } from 'react-router-dom';
import Sidebar from "./Sidebar";
function Header() {
    return <>
    <header>
        <Sidebar />
        <div className="logo">  
            <h1 style={{color:"purple"}}>Miles <span style={{color: "orange"}}>Rental</span></h1>
        </div>
        <div className="nav-items">
            <ul >
                <li >
                    <Link to="/">About us</Link>
                </li>
                <li>
                    <Link to="Location">Location</Link>
                </li>
                <li>
                    <Link to="Cars">Cars</Link>
                </li>
                <li>
                    <Link to="Cart">Cart</Link>
                </li>
            </ul>
        </div>
    </header>
    </>
}

export default Header;
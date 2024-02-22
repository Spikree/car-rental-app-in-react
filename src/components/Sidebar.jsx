import { Link } from "react-router-dom";
import "./styles/main.css";

function Sidebar() {
    return <>
        <div className="dropdown">
  <button className="dropdown-button">☰</button>
  <div className="dropdown-content">
    <ul>
        <li><Link to="/">About us</Link></li>
        <li><Link to="/Location">Location</Link></li>
        <li><Link to="/Cars">Cars</Link></li>
        <li><Link to="/Cart">Cart</Link></li>
    </ul>
  </div>
</div>

    </>
}

export default Sidebar;
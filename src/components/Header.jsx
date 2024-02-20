import "./styles/main.css"

function Header() {
    return <>
    <header>
        <div className="logo">
            <h1 style={{color:"purple"}}>Miles <span style={{color: "orange"}}>Rental</span></h1>
        </div>
        <div className="nav-items">
            <ul className="nav-items">
                <li>
                    About us
                </li>
                <li>
                    Locations
                </li>
                <li>
                    Cars
                </li>
                <li>
                    Cart
                </li>
            </ul>
        </div>
    </header>
    </>
}

export default Header;
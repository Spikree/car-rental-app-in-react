function Footer() {
    let date = new Date();
    let year = date.getFullYear();
    return <>
        <footer style={{color: "gray"}}>
             © {year} Miles Rental
        </footer>
    </>
}

export default Footer;
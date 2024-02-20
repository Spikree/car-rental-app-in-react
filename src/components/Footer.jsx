function Footer() {
    let date = new Date();
    let year = date.getFullYear();
    return <>
        <footer style={{color: "gray"}}>
            copyright © {year}
        </footer>
    </>
}

export default Footer;
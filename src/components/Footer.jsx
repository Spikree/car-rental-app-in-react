function Footer() {
    let date = new Date();
    let year = date.getFullYear();
    return <>
        <footer>
            copyright © {year}
        </footer>
    </>
}

export default Footer;
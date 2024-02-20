import "./styles/main.css"

function Carousel(props) {
    return <div className="carousel">
        {
        props.data.map(item => {
            return <img style={{height: "200px", paddingTop:"0px"}} src={item.src} alt={item.alt} key={item.id} className="slide" />
        })
        }
    </div>
}

export default Carousel;
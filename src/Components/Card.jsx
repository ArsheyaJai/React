import "./Card.css"

function Card (props) {
    return (
        <div className="container">
            <img src={props.image}/>
            <h1>{props.name}</h1>
            <h2>{props.ingredients}</h2>  
            <h3>{props.recipe}</h3>  
        </div>
    )
}

export default Card;
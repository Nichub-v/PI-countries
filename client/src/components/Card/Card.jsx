export default function Card(props) {
    
    return (
        <div className="card-container">
            <img width="50px" src={props.flag}></img>
            <p>{props.name}</p>
            <p>{props.continents[0]}</p>
        </div>
    )
}
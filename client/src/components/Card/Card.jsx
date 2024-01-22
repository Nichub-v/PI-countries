import { Container } from "../../styles/Card.styled"
import { Link } from "react-router-dom"

export default function Card(props) {

    function goToDetail(id) {
        console.log(id)
    }

    return (
        <Container flagUrl={props.flag}>
            <div class="info-container">
                <Link to={`/home/country/${props.id}`}><p>{props.name}</p></Link>
                <img src={props.flag}></img>
                <p>{props.continents[0]}</p>
            </div>
        </Container>
    )
}
import { Link } from "react-router-dom"
import { Container } from "../../styles/Navbar.styled.js"
import SearchBar from "../SearchBar/SearchBar.jsx"

export default function Navbar() {
    return (
        <>
            <Container>
                <h1 className="title">Countries</h1>

                <SearchBar/>

                <Link class="add-activity-link" to="/home/add_activity">Add activity</Link>

            </Container>

            <div style={{height: "55px"}}></div>
        </>
    )
}
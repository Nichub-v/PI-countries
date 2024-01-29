import Cards from "../Cards/Cards.jsx"
import { Container } from "../../styles/Home.styled.js"
import Navbar from "../../components/Navbar/Navbar.jsx"

import { Outlet } from "react-router-dom"


export default function Home() {
    return(
        <Container>
            <Navbar />
            <div class="layout">
                <Cards className="main" />
                <Outlet />
                
            </div>
        </Container>

    )
}
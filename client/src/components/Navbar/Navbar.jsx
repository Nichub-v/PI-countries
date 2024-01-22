import { Link } from "react-router-dom"
import { Container } from "../../styles/Navbar.styled.js"
import { useState } from "react"
import SearchBar from "../SearchBar/SearchBar.jsx"

export default function Navbar() {
    return (
        <>
            <Container>
                <span>Countries</span>
                
                <Link to="/home/add_activity">Add activity</Link>
                <SearchBar/>

            </Container>

            <div style={{height: "50px"}}></div>
        </>
    )
}
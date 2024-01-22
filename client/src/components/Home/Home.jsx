import Navbar from "../Navbar/Navbar.jsx"
import Cards from "../Cards/Cards.jsx"
import { Container } from "../../styles/Home.styled.js"
import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react"
import { storeActivities, storeCountries, switchPage, filterByActivity, filterByContinent } from "../../redux/actions.js"

import { Outlet } from "react-router-dom"


export default function Home() {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(storeCountries())
        dispatch(storeActivities())
    }, [])
    
    return(
        <Container>
            <h1>Home page</h1>
            <div class="layout">
                <Cards />
                <Outlet />
            </div>
        </Container>

    )
}
import { Link, NavLink } from "react-router-dom"
import { Container } from "../../styles/Navbar.styled.js"
import SearchBar from "../SearchBar/SearchBar.jsx"
import { CiMenuBurger } from "react-icons/ci";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { enableDarkTheme } from "../../redux/actions.js"
import { WiMoonAltThirdQuarter } from "react-icons/wi";
import { useSelector } from "react-redux";
import NavbarMenu from "../NavbarMenu/NavbarMenu.jsx"

export default function Navbar() {
    const dispatch = useDispatch()
    let [active, setActive] = useState(false)
    let [bool, setBool] = useState(useSelector((state) => state.theme))

    function toggleActive() {
        setActive(!active)
    }

    useEffect(()=> {
        dispatch(enableDarkTheme(bool))
    }, [bool])
    
    return (
        <>
            <Container>
                <div className="nav-start">
                    <Link to="/"><img alt="countries-app-icon" className="title-icon" src="https://www.svgrepo.com/show/122878/cityscape.svg"></img></Link>
                    <Link to="/"><h1 className="title">Countries</h1></Link>
                </div>

                <div className="nav-middle">
                    <SearchBar disabled={active ? true : false}/>
                </div>
                
                <div className="nav-end">
                    <button onClick={toggleActive} className={`nav-btn-adaptive ${active ? "active-menu" : ""}`}><CiMenuBurger className="menu-icon"/></button> {/* solo se muestra a partir de cierto width */}

                    <NavLink to="/home/add_activity"><button className={`nav-btn`}><span className="nav-text">Activities</span></button></NavLink>
                    <NavLink to="/home/feedback"><button className={`nav-btn`}><span className="nav-text">Feedback</span></button></NavLink>
                    <button onClick={()=>{setBool(!bool)}} className={`nav-btn theme-btn`}><WiMoonAltThirdQuarter className="theme-icon"/></button>
                </div>

                {active && <NavbarMenu toggleActive={toggleActive}/>}
            </Container>

            <div style={{height: "55px"}}></div>
        </>
    )
}
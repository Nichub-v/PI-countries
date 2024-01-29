import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom"
import { enableDarkTheme } from "../../redux/actions";
import { Container } from "../../styles/NavbarMenu.styled"
import { WiMoonAltThirdQuarter } from "react-icons/wi";



export default function NavbarMenu(props) {
    const dispatch = useDispatch()
    let [bool, setBool] = useState(useSelector((state) => state.theme))

    useEffect(()=> {
        dispatch(enableDarkTheme(bool))
    }, [bool])

    return (
            <Container>
                <ul className="menu-ul">
                    <li className="menu-li"><Link onClick={props.toggleActive} class="menu-link" to="/home/add_activity">Activity</Link></li>
                    <li className="menu-li"><div className="li-separator"></div></li>
                    <li className="menu-li"><Link onClick={props.toggleActive} class="menu-link" to="/home/feedback">Feedback</Link></li>
                </ul>

                <button className="menu-theme-btn" onClick={()=>{setBool(!bool)}}><WiMoonAltThirdQuarter className="theme-icon"/></button>
            </Container>
    )
}
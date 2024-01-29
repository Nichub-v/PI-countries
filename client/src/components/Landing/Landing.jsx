import { Link } from "react-router-dom";
import bgImg from "../../../img/landingBg.jpg"
import { Container } from "../../styles/Landing.styled.js" 

import { HiCamera } from "react-icons/hi2";

export default function Landing() {

    return (
        <Container bgImg={bgImg}>
            <div className="bgDiv"></div>
            <header className="header"></header>
            
            <div className="text-container">
                <h1 className="title">Bienvenido</h1>
                <p className="subtitle">Busca países, accede a su información, crea y visualiza sus actividades turísticas.</p>
                <Link to="/home"><button className="button">Acceder</button></Link>
            </div>
            
            <footer className="footer">
                
                <p className="copyright"><HiCamera className="camera-icon"/>Imágen por Javier Miranda</p>
                <p className="copyright-handle">(@nuvaproductions).</p>
                <p className="footer-info">Desarrollado con React, Express, Postgres, entre otras tecnologías.</p>

                <div className="contact-container">
                    <Link>LinkedIn</Link>
                    <div></div>
                    <Link>Discord</Link>
                    <div></div>
                    <Link>Slack</Link>
                </div>
            </footer>

            
        </Container>

    )
}
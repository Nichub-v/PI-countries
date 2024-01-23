import { Container } from "../../styles/SearchBar.styled.js";
import { Link } from "react-router-dom"
import { useRef, useState, useEffect } from "react"
import axios from "axios"
import { serverIp, serverPort } from "../../config.js"

import { TfiClose } from "react-icons/tfi";

export default function SearchBar() {
    const searchBarRef = useRef(null);
    const linkRef = useRef(null);
    const [results, setResults] =  useState([])

    const [showingResults, setShowingResults] = useState(false) // Estado que ayuda a mostrar la animacion de aparecer o desaparecer
    const [activeInput, setActiveInput] = useState(false)       // Estado que ayuda a mostrar la animación de la lupa en el input
    const [unmountDiv, setUnmountDiv] = useState(false)         // Estado que ayuda a desmontar o montar la caja de resultados luego o antes de una animación

      useEffect(() => {
        searchBarRef.current.addEventListener('focusin', ()=>{setActiveInput(true); setShowingResults(true); setUnmountDiv(false);});
        searchBarRef.current.addEventListener('blur', () => {setActiveInput(false); setShowingResults(false); setTimeout(()=>{
            setUnmountDiv(true)
        },"200")});
      }, []);

      function handleDivAnimationEnd(e) {
        let inputText = e.target.ownerDocument.activeElement.value

        if (inputText.length < 3 && e.animationName === "hide") { // si al finalizar la animacion de hide el input tiene menos de 3 caracteres, se desmonta y luego se limpian los resultados
            setUnmountDiv(true);                                  // para que no se vuelvan a mostrar en el focus-in
            setTimeout(()=>{
                setResults([])
            },"200")

        } else if (e.animationName === "hide") {                  // simplemente desmonta el div al finalizar la animación
            setUnmountDiv(true);
        }
        
    }
    

    function searchCountry(e) {
        const name = e.target.value;

        if (name.length < 3) {
            setShowingResults(false)
            return 0
        }
        
        axios.get(`http://${serverIp}:${serverPort}/countries/?name=${name}`).then(({ data }) => {
            setResults(data)
            setUnmountDiv(false);
            setShowingResults(true)
        }).catch((error) => {
            setShowingResults(false)

            setTimeout(()=>{        // si no se encuentran resultados; al terminar la animación de hide, se desmonta y se borran resultados para que no se muestren nuevamente
                setResults([])      // en el focus-in
                setUnmountDiv(true);
            },"200")
        })
    }

    return(
        <Container>
            <div className="search-bar">
                <input className="input" ref={searchBarRef} onChange={searchCountry} name="search" placeholder="Buscar país (al menos 3 letras)"></input>
                <div className="icon-container"><TfiClose className={`icon ${activeInput ? "showIcon" : "hideIcon"}`}/></div>
            </div>
                {results.length > 0 && !unmountDiv && (
                    <div onAnimationEnd={handleDivAnimationEnd} className={`results-container ${showingResults ? "show" : "hide"}`}>
                        <ul>
                            {results.map((result) => {
                                return <li className="result-li" key={result.id}>
                                            <Link onClick={()=>{setShowingResults(false)}} to={`/home/country/${result.id}`} className="result-link">
                                                <div className="result-span-container"><span className="result-span">{result.name.official}</span></div>
                                                <img className="result-img" src={`${result.flags.svg}`}></img>
                                            </Link>
                                        </li>
                            })}
                        </ul>
                    </div>
                )}
        </Container> 
    )
}
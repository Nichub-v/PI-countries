import { Container } from "../../styles/SearchBar.styled.js";
import { Link } from "react-router-dom"
import { useRef, useState, useEffect } from "react"
import axios from "axios"
import { serverIp, serverPort } from "../../config.js"
import { useDispatch } from "react-redux";
import { showSearchResults } from "../../redux/actions.js";

import { TfiClose } from "react-icons/tfi";

export default function SearchBar(props) {
    const searchBarRef = useRef(null);
    const linkRef = useRef(null);
    const [results, setResults] =  useState([])
    const dispatch = useDispatch()

    const [showingResults, setShowingResults] = useState(false) // Estado que ayuda a mostrar la animacion de aparecer o desaparecer
    const [activeInput, setActiveInput] = useState(false)       // Estado que ayuda a mostrar la animación de la lupa en el input
    const [unmountResults, setUnmountResults] = useState(false)         // Estado que ayuda a desmontar o montar la caja de resultados luego o antes de una animación

      useEffect(() => {
        searchBarRef.current.addEventListener('focusin', ()=>{setActiveInput(true); setShowingResults(true); setUnmountResults(false);});
        searchBarRef.current.addEventListener('blur', () => {setActiveInput(false); setShowingResults(false); setTimeout(()=>{
            setUnmountResults(true)
        },"200")});
      }, []);

      function handleResultsAnimationEnd(e) { // Funcion que utiliza onAnimationEnd para dejar de renderizar el cajón de resultados
        let inputText = e.target.ownerDocument.activeElement.value

        if (inputText.length < 3 && e.animationName === "hide" ) { // si al finalizar la animacion de hide el input tiene menos de 3 caracteres, se desmonta y luego se limpian los resultados
            setUnmountResults(true);                                  // para que no se vuelvan a mostrar en el focus-in
            setTimeout(()=>{
                setResults([])
            },"200")

        } else if (e.animationName === "hide") {                  // simplemente desmonta el div al finalizar la animación
            setUnmountResults(true);
        }
        
    }

    function searchCountry(e) {
        const name = e.target.value.trim(); // para que no busque string vacíos

        if (name.length < 3 || !name) {
            setShowingResults(false)
            return 0
        }
        
        axios.get(`http://${serverIp}:${serverPort}/countries/?name=${name}&&limit=12`).then(({ data }) => {
            setResults(data)
            setUnmountResults(false);
            setShowingResults(true)
        }).catch((error) => {
            setShowingResults(false)

            setTimeout(()=>{        // si no se encuentran resultados; al terminar la animación de hide, se desmonta y se borran resultados para que no se muestren nuevamente
                setResults([])      // en el focus-in
                setUnmountResults(true);
            },"200")
        })
    }

    function handleEnter(e) {
        const name = e.target.value.trim(); // para que no busque string vacíos

        if (e.key === "Enter" || e.keyCode === 13) {
            if (name.length < 3 || !name) {
                setShowingResults(false)
                return 0
            }
            
            dispatch(showSearchResults(e.target.value))
            setShowingResults(false)
            setTimeout(() => {
                setUnmountResults(true);
                setResults([])
            }, "200")
        }
    }
        

    return(
        <Container>
            {/* Barra de búsqueda */}
            <div className="search-bar">
                <input onKeyUp={handleEnter} disabled={props.disabled} className="input" ref={searchBarRef} onChange={searchCountry} name="search" placeholder="Buscar"></input>
                <div className="icon-container"><TfiClose className={`icon ${activeInput ? "showIcon" : "hideIcon"}`}/></div>
            </div>

            {/* Caja de resultados */}

            {results.length > 0 && !unmountResults && ( // mostrar solo si hay al menos 1 resultado y el contenedor no está desmontado
                <div  className={`results-container ${showingResults ? "show" : "hide"}`} onAnimationEnd={handleResultsAnimationEnd}>
                    <div className="results-sub-container">
                        <ul>
            
                            {results.map((result) => { // items con los resultados de la búsqueda
                                return <li className="result-li" key={result.id}>
                                    
                                            <Link onClick={()=>{setShowingResults(false)}} to={`/home/country/${result.id}`} className="result-link">
                                                <div className="result-span-container"><span className="result-span">{result.name.official}</span></div>
                                                <img alt={`SVG image of ${result.name.common}'s flag`} className="result-img" src={`${result.flags.svg}`}></img>
                                            </Link>
                                            
                                        </li>
                            })}

                        </ul>
                    </div>
                </div>
                )}
        </Container> 
    )
}
import { Container } from "../../styles/SearchBar.styled.js";
import { Link } from "react-router-dom"
import { useRef, useState, useEffect } from "react"
import axios from "axios"

export default function SearchBar() {
    const searchBarRef = useRef(null);
    const linkRef = useRef(null);
    const [results, setResults] =  useState([])
    const [showingResults, setShowingResults] = useState(false)

      useEffect(() => {
        searchBarRef.current.addEventListener('focusin', ()=>{setShowingResults(true)});
        searchBarRef.current.addEventListener('focusout', ()=>{setTimeout(()=> {setShowingResults(false)}, "100")});
        return () => {
            searchBarRef.current.addEventListener('focusin', ()=>{setShowingResults(true)});
            searchBarRef.current.addEventListener('focusout', ()=>{setTimeout(()=> {setShowingResults(false)}, "100")});
        };
      }, []);


    function searchCountry(e) {
        const name = e.target.value;

        if (name.length < 3) {
            setResults([]) 
            return 0
        }

        axios.get(`http://localhost:3001/countries/?name=${name}`).then(({ data }) => {
            setResults(data)
        }).catch((error) => {
            setResults([])
        })
    }

    return(
        <Container>
            <input ref={searchBarRef} onChange={searchCountry} name="search" placeholder="Buscar país"></input>
                {showingResults && (
                    <div class="results-container">
                        <ul>
                            {results.map((result) => {
                                return <li key={result.id}><Link onClick={()=>{setShowingResults(false)}} to={`home/country/${result.id}`}>{result.name.common}</Link></li>
                            })}
                        </ul>
                    </div>
                )}
        </Container> 
    )
}
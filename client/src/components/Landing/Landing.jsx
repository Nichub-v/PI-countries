import { NavLink } from "react-router-dom";
import countriesImg from "./countries.png"

export default function Landing() {

    return (
        <div>
            <h1>Landing page</h1>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium hic aliquam, velit asperiores totam nisi exercitationem illo quo error quaerat provident incidunt quidem! Nemo adipisci id voluptatem harum enim commodi.</p>
            <img width="1500px" src={countriesImg}></img>
            <NavLink to="/home"><button>Home</button></NavLink>
        </div>
    )
}
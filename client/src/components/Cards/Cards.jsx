import Card from "../Card/Card.jsx"

export default function Cards(props) {
    return (
        <div>
            {props.countries.map((country) => {console.log(country); return <Card
                flag={country.flags.png}
                name={country.name.common}
                continents={country.continents}
            />})}

        </div>
    )
}
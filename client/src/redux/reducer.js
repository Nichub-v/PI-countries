let initState = {allCountries: [], pagedCountries: [], filteredCountries: [], allActivities: []}

function reducer(state = initState, action) {
    switch (action.type) {

        case "STORE_COUNTRIES":
            return {...state, allCountries: action.payload, filteredCountries: action.payload}

        case "FILTER_BY_ACTIVITY":
            return {...state, filteredCountries: action.payload}

        case "FILTER_BY_CONTINENT":
            return {...state, filteredCountries: state.allCountries.filter((country) => {return country.continents.includes(action.payload)})}

        case "RESET":
            return {...state, filteredCountries: state.allCountries}

        case "STORE_ACTIVITIES":
            return {...state, allActivities: action.payload}



        case "SWITCH_PAGE":
            const items = 10
            const page = (action.payload - 1) * items
            
            const countries = state.filteredCountries.slice(page, page + items);
            return {
                ...state, pagedCountries: countries
            }

        default:
            return { ...state }
    }
}

export default reducer
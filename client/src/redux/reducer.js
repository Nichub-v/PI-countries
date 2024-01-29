let initState = {allCountries: [],  filteredCountries: [], pagedCountries: [], allActivities: [], theme: "darkTheme", toasts: []}

function compareAZ(a, b) {
	if (a.name.common > b.name.common) {
  		return 1;
    }

    if (a.name.common < b.name.common) {
        return -1;
    }
    // a must be equal to b
    return 0;
}

function compareZA(a, b) {
	if (a.name.common < b.name.common) {
  		return 1;
    }

    if (a.name.common > b.name.common) {
        return -1;
    }
    // a must be equal to b
    return 0;
}

function reducer(state = initState, action) {
    switch (action.type) {

        case "STORE_COUNTRIES":
            return {...state, allCountries: action.payload, filteredCountries: action.payload}

        case "STORE_ACTIVITIES":
            return {...state, allActivities: action.payload}

        case "FILTER_BY_ACTIVITY":
            return {...state, filteredCountries: action.payload}

        case "FILTER_BY_CONTINENT":
            return {...state, filteredCountries: state.allCountries.filter((country) => {return country.continents.includes(action.payload)})}

        case "ORDER":
            if (action.payload === "A-Z") {
                return {
                    ...state,
                    filteredCountries: state.filteredCountries.sort(compareAZ)
                }
            } else {
                return {
                    ...state,
                    filteredCountries: state.filteredCountries.sort(compareZA)
                }
            }

        case "RESET":
            return {...state, filteredCountries: state.allCountries}

        case "SWITCH_THEME":
            return {...state, theme: action.payload}

        case "SWITCH_PAGE":
            const items = 10
            const page = (action.payload - 1) * items
            
            const countries = state.filteredCountries.slice(page, page + items);
            return {
                ...state, pagedCountries: countries
            }
            
        case "SHOW_SEARCH_RESULTS": 
            return {...state, filteredCountries: action.payload}


        case "NEW_TOAST": 
            return {
                ...state,
                toasts: state.toasts.concat(action.payload)
            }

        default:
            return { ...state }
    }
}

export default reducer
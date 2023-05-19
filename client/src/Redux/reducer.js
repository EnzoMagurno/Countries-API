import {
    GET_COUNTRIES,
    GET_COUNTRY,
    GET_COUNTRY_BY_NAME,
    FILTER_BY_CONTINENT,
    ORDER_BY_NAME,
    ORDER_BY_POPULATION,
}
    from './actions'

const initialState = {
    countries: [],
    country: [],
}

const rootReducer = (state = initialState, action) => {

    switch (action.type) {

        case GET_COUNTRIES:
            return { ...state, countries: action.payload }

        case GET_COUNTRY:
            return { ...state, country: action.payload }

        case GET_COUNTRY_BY_NAME:
            return { ...state, country: action.payload }

        case FILTER_BY_CONTINENT:
            const allCountries = [...state.countries.data];
            const filteredContinent = action.payload === 'All' ? allCountries : allCountries.filter(element => element.continent.includes(action.payload));
            return { ...state, countries: { ...state.countries, data: filteredContinent } }

        case ORDER_BY_NAME:
            const sortedCountries = [...state.countries.data]
            sortedCountries.sort((a, b) => {
                if (action.payload === 'asc') {
                    return a.name.localeCompare(b.name)
                }
                else {
                    return b.name.localeCompare(a.name)
                }
            })
            return { ...state, countries: { ...state.countries, data: sortedCountries } }

        case ORDER_BY_POPULATION:
            const sortedByPopulation = [...state.countries.data]
            sortedByPopulation.sort((a, b) => {
                if (action.payload === 'Higher') {
                    return b.population - a.population
                }
                else {
                    return a.population - b.population
                }
            })
            return { ...state, countries: { ...state.countries, data: sortedByPopulation } }

        default:
            return { ...state }
    }
}
export default rootReducer
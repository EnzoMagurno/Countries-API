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
    allCountries: []
}
const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_COUNTRIES:
            return { ...state, countries: action.payload, allCountries: action.payload };
        case GET_COUNTRY:
            return { ...state, country: action.payload };
        case GET_COUNTRY_BY_NAME:
            const country = action.payload;
            const updatedCountries = state.allCountries.filter(element => element.id !== country.id);
            return { ...state, country: country, countries: updatedCountries };

        case FILTER_BY_CONTINENT:
            const allCountries = Array.isArray(state.allCountries) ? state.allCountries : [];
            const filteredCountries = action.payload === 'All' ? allCountries : allCountries.filter(element => element.continent.includes(action.payload));
            return { ...state, countries: filteredCountries }; // No se realizan cambios en esta línea
        case ORDER_BY_NAME:
            const sortedCountriesByName = [...state.countries]; // Cambio: se copia el estado countries en un nuevo array
            sortedCountriesByName.sort((a, b) => {
                if (action.payload === 'asc') {
                    return a.name.localeCompare(b.name);
                } else {
                    return b.name.localeCompare(a.name);
                }
            });
            return { ...state, countries: sortedCountriesByName }; // Cambio: se asigna el nuevo array ordenado a countries
        case ORDER_BY_POPULATION:
            const sortedCountriesByPopulation = [...state.countries]; // Cambio: se copia el estado countries en un nuevo array
            sortedCountriesByPopulation.sort((a, b) => {
                if (action.payload === 'Higher') {
                    return b.population - a.population;
                } else {
                    return a.population - b.population;
                }
            });
            return { ...state, countries: sortedCountriesByPopulation }; // Cambio: se asigna el nuevo array ordenado a countries
        default:
            return { ...state };
    }
};
export default rootReducer

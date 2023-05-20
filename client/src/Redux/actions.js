import axios from 'axios'

export const GET_COUNTRIES = 'GET_COUNTRIES'
export const GET_COUNTRY = 'GET_COUNTRY'
export const GET_COUNTRY_BY_NAME = 'GET_COUNTRY_BY_NAME'
export const FILTER_BY_CONTINENT = 'FILTER_BY_CONTINENT'
export const ORDER_BY_NAME = 'ORDER_BY_NAME'
export const ORDER_BY_POPULATION = 'ORDER_BY_POPULATION'


export const getCountries = () => {
    return async function (dispatch) {
        const countries = (await axios.get(`http://localhost:3001/countries`)).data
        return dispatch({ type: GET_COUNTRIES, payload: countries })
    }
}

export const getCountry = (id) => {
    return async function (dispatch) {
        const country = await axios.get(`http://localhost:3001/countries/${id}`)
        return dispatch({ type: GET_COUNTRY, payload: country })
    }
}

export const getCountryByName = (name) => {
    return async function (dispatch) {
        try {
            const country = (await axios.get(`http://localhost:3001/countries?name=${name}`)).data
            return dispatch({ type: GET_COUNTRY_BY_NAME, payload: country })
        } catch (error) {
            console.log(error.message);
        }
    }
}

export const filterByContinent = (payload) => {
    return { type: FILTER_BY_CONTINENT, payload }
}

export const orderByName = (payload) => {
    return { type: ORDER_BY_NAME, payload }
}

export const orderByPopulation = (payload) => {
    return { type: ORDER_BY_POPULATION, payload }
}
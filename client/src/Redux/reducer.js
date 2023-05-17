import {GET_COUNTRIES,GET_COUNTRY,GET_COUNTRY_BY_NAME} from './actions'
const initialState = {
    countries:[],
    country:[],
    countryByName:[]
}
const rootReducer = (state = initialState,action) =>{
    switch(action.type){
        case GET_COUNTRIES:
            return {...state, countries:action.payload}
        
        case GET_COUNTRY:
            return {...state, country:action.payload}
        
        case GET_COUNTRY_BY_NAME:
            return {...state, countryByName:action.payload}
        default:
            return {...state}
    }
}
export default rootReducer
import React from 'react'
import { getCountry } from '../../Redux/actions'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
const Detail = () => {
    const dispatch = useDispatch()
    const { id } = useParams()
    const country = useSelector(state => state.country.data)
    useEffect(() => {
        dispatch(getCountry(id))
    }, [dispatch, id])
    if (!country) {
        return <div>Loading...</div> // or any other loading state
    }
    return (
        <>
            <div>
                <h1>Esta es la vista de {country.name}</h1>
                <img src={country.flag} alt="Flag" />
                <h2>🌍Located in {country.continent} and the {country.subregion} as subregion.</h2>
                <h2>Its area is {country.area}.</h2>
                <h2>It has 👥population of {country.population} inhabitants and its capital is {country.capital}.</h2>
            </div>
        </>
    )
}
export default Detail
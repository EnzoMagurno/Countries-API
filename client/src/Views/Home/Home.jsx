import React from 'react'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getCountries } from '../../Redux/actions'
import { useSelector } from 'react-redux'
import Cards from '../../Components/Cards/Cards.jsx'
import Card from '../../Components/Card/Card'
import Filters from '../../Components/Filters/Filters'
import SearchBar from '../../Components/SearchBar/SearchBar'

const Home = () => {

    const countries = useSelector(state => state.countries)
    const country = useSelector(state => state.country)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getCountries())
    }, [dispatch])

    useEffect(() => {
    }, [countries])

    return (
        <>
            <SearchBar />
            <Filters />
            {Array.isArray(country) && country.length ? (
                country.map((count) => (
                    <Card
                        key={count.id}
                        id={count.id}
                        name={count.name}
                        continent={count.continent}
                        flag={count.flag}
                    />
                ))
            ) : (
                <Cards countries={countries} />
            )}
        </>
    )
}
export default Home
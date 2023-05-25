
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
    return (
        <>
            <SearchBar />
            <Filters />

            {country.length > 0 || countries.length > 0 ? (
                <>
                    {country.length > 0 ? (
                        <div>
                            {country.map((count) => (
                                <Card
                                    key={count.id}
                                    id={count.id}
                                    name={count.name}
                                    continent={count.continent}
                                    flag={count.flag}
                                    activities={count.activities}
                                />
                            ))}
                        </div>
                    ) : (
                        <Cards countries={countries} />
                    )}
                </>
            ) : (
                <p>No se encontraron resultados.</p>
            )}
        </>
    )
}
export default Home
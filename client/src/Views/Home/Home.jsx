import React from 'react'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getCountries } from '../../Redux/actions'
import { useSelector } from 'react-redux'
import Cards from '../../Components/Cards/Cards.jsx'
import Card from '../../Components/Card/Card'
const Home = () => {
    const countries = useSelector(state => state.countryByName)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getCountries())
    }, [dispatch])
    return (
        <>
            <h1>Vista Home</h1>
            {countries && countries.length ? (
                countries.map((country) => (
                    <Card
                        key={country.id}
                        id={country.id}
                        name={country.name}
                        continent={country.continent}
                        flag={country.flag}
                    />
                )
                )
            ) : (
                <>
                    <p>No countries found.</p>
                    <Cards countries={countries} />
                </>
            )
            }
        </>
    )
}

export default Home
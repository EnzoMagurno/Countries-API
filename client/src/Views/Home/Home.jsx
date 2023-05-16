/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import Cards from '../../Components/Cards/Cards'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getCountries } from '../../Redux/actions'
import { useSelector } from 'react-redux'

const Home = () => {
    const countries = useSelector(state => state.countries.data)
    // console.log(countries);
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getCountries())
    }, [dispatch])

    return (
        <>
            <h1>Vista Home</h1>
            <Cards countries={countries} />
        </>
    )
}

export default Home
import React, { useState } from 'react'
import { getCountryByName } from '../../Redux/actions'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
const SearchBar = () => {
    const country = useSelector(state => state.country)
    console.log(country);
    const dispatch = useDispatch()
    const [name, setName] = useState('')

    const handleChange = (event) => {
        setName(event.target.value)
    }

    useEffect(() => {
        // console.log(name);
        if (name) dispatch(getCountryByName(name))
    }, [dispatch, name])

    return (
        <>
            <div>
                <input type="text" onChange={handleChange} placeholder="Write here" />
            </div >
        </>
    );
}

export default SearchBar
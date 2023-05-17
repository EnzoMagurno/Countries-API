import React from 'react'
import Card from '../Card/Card'
import style from '../Cards/Cards.module.css'
import { useSelector } from 'react-redux'

const Cards = () => {
    const countries = useSelector(state => state.countries.data)
    return (
        <div className={style.container}>
            {countries?.length > 0 ? (
                countries.map(
                    country => (
                        <Card
                            id={country.id}
                            key={country.id}
                            name={country.name}
                            flag={country.flag}
                            continent={country.continent}
                            capital={country.capital}
                            subregion={country.subregion}
                            area={country.area}
                            population={country.population}
                        />
                    )
                )) : (<p className={style.loading}>Loading</p>)}
        </div>
    )
}
export default Cards
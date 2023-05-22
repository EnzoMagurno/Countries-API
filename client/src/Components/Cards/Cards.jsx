import React from 'react'
import Card from '../Card/Card'
import style from '../Cards/Cards.module.css'
import { useSelector, useDispatch } from 'react-redux'
import { nextPage, prevPage } from '../../Redux/actions'
import Paginate from '../Paginate/Paginate'

const Cards = () => {

    const countries = useSelector(state => state.countries)
    const numPage = useSelector(state => state.numPage)
    const dispatch = useDispatch()

    let desde = (numPage - 1) * 10
    let hasta = numPage * 10
    let pages = Math.ceil(countries?.length / 10)
    let views = countries?.slice(desde, hasta)

    const next = () => dispatch(nextPage())
    const prev = () => dispatch(prevPage())

    return (
        <div>
            <Paginate pages={pages} next={next} prev={prev} />
            <div className={style.cardsContainer}>
                {views?.map(country => (
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
                ))}
            </div>
        </div>
    );
}
export default Cards
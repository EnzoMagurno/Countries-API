import React from 'react'
import style from './Card.module.css'
import { Link } from 'react-router-dom'
const Card = (props) => {
    return (
        <div className={style.card}>
            <div className={style.container}>
                <Link to={`/detail/${props.id}`}>
                    <h2>{props.name}</h2>
                    <img className='image' src={props.flag} alt='Flag' />
                </Link>
                <h2>Continent:</h2>{props.continent}
                {/* <h2>Capital:</h2>{props.capital}
                <h2>Subregion:</h2>{props.subregion}
                <h2>Area:</h2>{props.area}
                <h2>Population:</h2>{props.population} */}
            </div>
        </div>
    )
}
export default Card
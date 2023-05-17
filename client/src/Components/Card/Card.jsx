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
            </div>
        </div>
    )
}
export default Card
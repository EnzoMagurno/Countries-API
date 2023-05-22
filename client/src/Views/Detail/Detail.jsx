import React from 'react'
import { getCountry } from '../../Redux/actions'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import style from '../Detail/Detail.module.css'

const Detail = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const country = useSelector(state => state.country.data);
    const activities = useSelector(state => state.country.data?.activities)
    console.log(activities);
    useEffect(() => {
        dispatch(getCountry(id))
    }, [dispatch, id])

    if (!country?.country) {
        return <div>Loading...</div>
    }
    return (
        <>
            <div>
                <h1>{country?.country.name}</h1>
                <img src={country?.country.flag} alt="Flag" />
                <h2>🌍Located in {country?.country.continent} and the {country?.country.subregion} as subregion.</h2>
                <h2>Its area is {country?.country.area}.</h2>
                <h2>It has 👥population of {country?.country.population} inhabitants and its capital is {country?.country.capital}.</h2>
            </div>

            {activities.length ? activities.map(activity => (
                <div className={style.activityContainer} key={activity.id}>
                    <p>Activity: {activity.name}</p>
                    <p>Difficulty: {activity.difficulty}</p>
                    <p>Season: {activity.season}</p>
                    <p>Duration: {activity.duration}</p>
                </div>
            )) : <p>{country?.country.name} has no activities
            </p>}
        </>
    )
}
export default Detail
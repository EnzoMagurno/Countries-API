import { useDispatch } from "react-redux";
import { filterByContinent, orderByPopulation, orderByName } from "../../Redux/actions";
import styles from './Filters.module.css'

const Filters = () => {

    const dispatch = useDispatch();

    const handlerFilterByContinent = (event) => {
        const continent = event.target.value
        dispatch(filterByContinent(continent))
    }

    const handlerOrderByName = (event) => {
        const name = event.target.value
        dispatch(orderByName(name))
    }

    const handlerByPopulation = (event) => {
        const mayor = event.target.value;
        dispatch(orderByPopulation(mayor))
    }

    return (
        <div className={styles.container}>
            <select className={styles.select} onChange={handlerOrderByName}>
                <option>Filter</option>
                <option value="asc">A - Z</option>
                <option value="desc">Z - A</option>
            </select>

            <select className={styles.select} onChange={handlerFilterByContinent}>
                <option value="All">All</option>
                <option value="Americas">America</option>
                <option value="Europe">Europa</option>
                <option value="Asia">Asia</option>
                <option value="Africa">Africa</option>
                <option value="Oceania">Oceania</option>
            </select>

            <select className={styles.select} onChange={handlerByPopulation}>
                <option>By population</option>
                <option value="Higher">Higher population</option>
                <option value="Lower">Lower population</option>
            </select>
        </div>
    )
}

export default Filters;
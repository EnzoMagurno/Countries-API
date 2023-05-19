import { useDispatch } from "react-redux";
import { filterByContinent, orderByPopulation, orderByName } from "../../Redux/actions";

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
        <div>
            <select onChange={handlerOrderByName}>
                <option>Filter</option>
                <option value="asc">A - Z</option>
                <option value="desc">Z - A</option>
            </select>

            <select onChange={handlerFilterByContinent}>
                <option value="All">All</option>
                <option value="Americas">America</option>
                <option value="Europe">Europa</option>
                <option value="Asia">Asia</option>
                <option value="Africa">Africa</option>
                <option value="Oceania">Oceania</option>
            </select>

            <select onChange={handlerByPopulation}>
                <option>Por poblacion</option>
                <option value="Higher">Mayor poblacion</option>
                <option value="Lower">Menor poblacion</option>
            </select>
        </div>
    )
}

export default Filters;
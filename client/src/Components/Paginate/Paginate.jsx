// import React from 'react'
// import { useSelector } from 'react-redux'
// import styles from './Paginate.module.css'
// import left from './assets/left.svg'
// import right from './assets/right.svg'

// const Paginate = ({ pages, next, prev }) => {
//     const numPage = useSelector(state => state.numPage)

//     return (
//         <div className={styles.paginate}>

//             {numPage > 1 ? (
//                 <div className={styles.arrow}>
//                     <img src={left} alt="left arrow" onClick={prev} className={styles.image} />
//                     <p>{numPage - 1}</p>
//                 </div>
//             ) : null}
//             <h2>{numPage}</h2>
//             {numPage < pages ? (
//                 <div className={styles.arrow}>
//                     <p>{numPage + 1}</p>
//                     <img src={right} alt="right arrow" onClick={next} className={styles.image} />
//                 </div>
//             ) : null}


//         </div >
//     )
// }

// export default Paginateimport React from 'react'
import { useSelector } from 'react-redux'
import styles from './Paginate.module.css'
import left from './assets/left.svg'
import right from './assets/right.svg'

const Paginate = ({ pages, next, prev }) => {
    const numPage = useSelector(state => state.numPage)

    return (
        <div className={styles.paginate}>

            {numPage > 1 ? (
                <div className={styles.arrow}>
                    <img src={left} alt="left arrow" onClick={prev} className={styles.image} />
                    <p className={styles.pageNumber}>{numPage - 1}</p>
                </div>
            ) : null}
            <h2 className={styles.pageNumber}>{numPage}</h2>
            {numPage < pages ? (
                <div className={styles.arrow}>
                    <p className={styles.pageNumber}>{numPage + 1}</p>
                    <img src={right} alt="right arrow" onClick={next} className={styles.image} />
                </div>
            ) : null}


        </div >
    )
}

export default Paginate

import React from 'react'
import { Link } from 'react-router-dom'

const Landing = () => {
    return (
        <>
            <h1>Vista Landing</h1>
            <Link to={'/home'}>Home</Link>
        </>
    )
}

export default Landing
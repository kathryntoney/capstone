import React from 'react'
import Navbar from '../Navbar'

const BaseLayout = (props) => {
    return (
        <>
        <Navbar />
        <div>
            { props.children }
        </div>
        </>
    )
}

export default BaseLayout

import React from 'react'
import Navbar from '../Navbar'
import { useSelector } from 'react-redux'

const BaseLayout = (props) => {
    const token = useSelector(state => state.token)

    return (
        <>
            <Navbar />
            <div>
                {props.children}
            </div>
        </>
    )
}

export default BaseLayout

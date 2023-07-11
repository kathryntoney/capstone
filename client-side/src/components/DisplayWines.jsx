import React, { useEffect } from 'react'
import { Box } from '@mui/material'
import { useSelector, useDispatch } from 'react-redux'
import AddWine from './AddWine'
import FaveWineEntry from './FaveWineEntry'
import { useNavigate } from 'react-router-dom'

const Wines = () => {
    const isLoading = (state => state.isLoading)
    const token = useSelector(state => state.token)
    console.log('wines', token)
    const favoriteList = useSelector(state => state.favorites)
    console.log('favorite list: ', favoriteList)
    const userID = localStorage.getItem('userID')
    console.log('userID: ', userID)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        if (!isLoading && token) {
            navigate('/wines')
        }
    }, [token, isLoading])

    return (
        <Box flex={4} p={2}>
            {favoriteList.map(wine => (
                <FaveWineEntry
                    key={wine.id}
                    picture={wine.picture}
                    notes={wine.notes}
                    userID={userID}
                />
            ))}
            {/* <FaveWineEntry /> */}
            <AddWine />
        </Box>
    )
}

export default Wines

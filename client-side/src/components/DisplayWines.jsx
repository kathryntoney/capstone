import React, { useEffect } from 'react'
import { Box } from '@mui/material'
import { useSelector, useDispatch } from 'react-redux'
import AddWine from './AddWine'
import FaveWineEntry from './FaveWineEntry'
import { useNavigate } from 'react-router-dom'
import { checkToken, displayFavorite } from '../components/auth/authSlice'

const Wines = () => {
    const isLoading = (state => state.isLoading)
    const token = useSelector(state => state.token)
    console.log('wines', token)
    const favoriteList = useSelector(state => state.favorites)
    console.log('favorite list: ', favoriteList)
    const userID = localStorage.getItem('userID')
    // const userID = useSelector(state => state.userID)
    console.log(userID)
    // console.log('userID: ', userID)
    // const endpoint = '/wines' + userID
    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        const fetchData = async () => {
            try {
                await dispatch(checkToken());
                console.log('inside fetch data', userID)
                await dispatch(displayFavorite(userID));
            } catch (error) {
                console.log("couldn't fetch data")
            }
        };

        fetchData();
    }, [dispatch]);


    // useEffect(() => {
    //     console.log('inside useEffect')
    //     dispatch(checkToken())
    //     dispatch(displayFavorite())
    //     if (!isLoading && token) {
    //         console.log('inside if')
    //         dispatch(displayFavorite())
    //     }
    //     else {
    //         console.log('inside else')
    //         dispatch(checkToken())
    //     }
    // }, [])

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
            <AddWine />
        </Box>
    )
}

export default Wines

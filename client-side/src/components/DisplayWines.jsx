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
    // const token = localStorage.getItem('token')
    console.log('wines', token)
    const favoriteList = useSelector(state => state.favorites)
    // const favoriteList = localStorage.getItem('favoriteList')
    console.log('favorite list: ', favoriteList)
    const userID = useSelector(state => state.userID)
    // const userID = localStorage.getItem('userID')
    console.log('userID:', userID)
    const profilePic = useSelector(state => state.profilePic)
    // const profilePic = localStorage.getItem('profilePic')
    console.log('profilePic:', profilePic)
    const name = useSelector(state => state.name)
    // const name = localStorage.getItem('name')
    console.log('name:', name)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        const fetchData = async () => {
            try {
                await dispatch(checkToken());
                console.log('inside fetch data', userID)
                await dispatch(displayFavorite(userID, profilePic, name));
            } catch (error) {
                console.log("couldn't fetch data")
            }
        };

        fetchData();
    }, [dispatch]);

    // useEffect(() => {
    //     if (!isLoading && token) {
    //         localStorage.setItem('token', token)
    //         localStorage.setItem('userID', userID)
    //         localStorage.setItem('profilePic', profilePic)
    //         localStorage.setItem('name', name)
    //     }
    // }, [token, userID, profilePic, name])

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

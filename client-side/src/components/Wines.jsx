import React, { useEffect } from 'react'
import { Box } from '@mui/material'
import Post from './Post'
import { useSelector, useDispatch } from 'react-redux'
import AddWine from './AddWine'
import { checkToken } from './auth/authSlice'

const Wines = () => {
    const token = useSelector(state => state.token)
    console.log('wines', token)
    const dispatch = useDispatch()

    useEffect(() => {
        if (localStorage.token) {
            dispatch(checkToken())
        }
    }, [])

    return (
        <Box flex={4} p={2}>
            <Post />
            <Post />
            <Post />
            <AddWine />
        </Box>
    )
}

export default Wines

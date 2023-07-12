import React, { useEffect } from 'react'
import { Box, Typography, Button } from '@mui/material'
import { styled } from '@mui/material/styles'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setUserID } from './auth/authSlice'

const StyledTypography = styled(Typography)({
    display: "flex",
    justifyContent: "center",
    alignItems: 'center',
    fontFamily: "'Nunito', sans - serif",
    fontFamily: "'Roboto Mono', monospace",
    marginTop: '10px'
})

const StyledButton = styled(Button)({
    display: 'flex',
    flexDirection: 'column',
    fontSize: '20px',
    margin: '5px',
    width: '80vw', 
   color:'#5C374C'
})

const Main = () => {
    const dispatch = useDispatch()
    const isLoading = (state => state.isLoading)
    // const token = (state => state.token)
    const token = localStorage.token
    const userID = localStorage.getItem('userID')
    const profilePic = localStorage.getItem('profilePic')
    const name = localStorage.getItem('name')
    console.log('main', userID)
    const navigate = useNavigate()
    console.log('main', token)

    useEffect(() => {
        if (!isLoading && token) {
            let token = localStorage.token
            let userID = localStorage.userID
            let profilePic = localStorage.profilePic
            let name = localStorage.name
            dispatch(setUserID(userID))
        }
    }, [])

    return (
        <>
            <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <StyledTypography variant='h5' sx={{ display: 'flex', }}>What would you like to do?</StyledTypography>
                <StyledButton variant='contained' href='/photo'>Get help with a pairing</StyledButton>
                <StyledButton variant='contained' href='/wines' userID={userID}>View wine list</StyledButton>
            </Box>
        </>
    )
}

export default Main

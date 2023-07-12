import React, { useEffect } from 'react'
import { Box, Typography, Button, Card } from '@mui/material'
import { styled } from '@mui/material/styles'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setUserID } from './auth/authSlice'
import { createTheme, ThemeProvider } from '@mui/material/styles'


const theme = createTheme({
  palette: {
    primary: {
  
      main:'#5C374C' , //dark purple
    },
    secondary:{
      main:'#FF8C61' //atomic tangerine
    },
    info:{
      main:'#fdd5c1 ' //light peach
    }
    
  },
});

const StyledTypography = styled(Typography)({
    display: "flex",
    justifyContent: "center",
    alignItems: 'center',
    fontFamily: "'Nunito', sans - serif",
    
    marginTop: '10px'
})

const StyledButton = styled(Button)({
    display: 'flex',
    flexDirection: 'column',
    fontSize: '20px',
    margin: '5px',
    width: '80vw', 
   
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
        <ThemeProvider theme={theme}>
            <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <Card sx={{backgroundColor:"#fdd5c1", marginTop:"20%"}} >

                <StyledTypography color='primary' variant='h5' sx={{ display: 'flex', }}>What would you like to do?</StyledTypography>
                <br/>
                <StyledButton  variant='contained' href='/pairing'>Get help with a pairing</StyledButton>
                <br/>
                <StyledButton  variant='contained' href='/wines' userID={userID}>View wine list</StyledButton>
                </Card>
            </Box>
            </ThemeProvider>
        </>
    )
}

export default Main

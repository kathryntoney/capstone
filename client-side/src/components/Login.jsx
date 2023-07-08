import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Box, Typography, TextField, Modal, Button } from '@mui/material'
import { styled } from '@mui/material/styles'
import Registration from './Registration'
import { useNavigate } from 'react-router-dom'
import { signIn, checkToken } from './auth/authSlice'

const StyledTextField = styled(TextField)({
    display: "flex",
    justifyContent: "space-between",
    alignItems: 'center',
    fontFamily: "'Nunito', sans - serif",
    fontFamily: "'Roboto Mono', monospace",
    marginTop: '10px'
})

const StyledModal = styled(Modal)({
    display: 'flex',
    alignItems: "center",
    justifyContent: 'center'
})

const Login = () => {
    const [openRegistration, setOpenRegistration] = useState(false)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const isLoading = (state => state.isLoading)
    const token = useSelector(state => state.token)

    useEffect(() => {
        if (localStorage.token) {
            dispatch(checkToken())
        }
    }, [])

    useEffect(() => {
        if (!isLoading && token) {
            navigate('/')
        }
    }, [token])

    const handleSubmit = (e) => {
        e.preventDefault()
        let data = {
            formData: {
                email,
                password
            }
        }
        console.log(data)
        dispatch(signIn(data))
        navigate('/')
    }

    return (
        <>
            <Typography variant='h5' sx={{ fontFamily: "'Nunito', sans - serif", display: 'flex', justifyContent: 'center', marginTop: '10px' }}>Login:</Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <StyledTextField type='email' placeholder='email' onChange={e => setEmail(e.target.value)} />
                <StyledTextField type='password' placeholder='password' onChange={e => setPassword(e.target.value)} />
                <Button variant='contained' sx={{ margin: '10px' }} onClick={handleSubmit} >Submit</Button>
            </Box>
            <Box>
                <Typography variant='h5' sx={{ fontFamily: "'Nunito', sans - serif", display: 'flex', justifyContent: 'center', marginTop: '10px' }}><a href='#' onClick={e => setOpenRegistration(true)}>First time here?</a></Typography>
                <StyledModal
                    open={openRegistration}
                    onClose={e => setOpenRegistration(false)}
                    aria-labelledby='modal-modal-title'
                    aria-describedby='modal-modal-description'
                >
                    <Box width={400} height={350} bgcolor='white' p={3} borderRadius={5}>
                        <Typography variant='h6' textAlign='center'>Register Now:</Typography>
                        <Registration />
                    </Box>
                </StyledModal>
            </Box>
        </>
    )
}

export default Login

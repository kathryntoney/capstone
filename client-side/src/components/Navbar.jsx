import '../index.css';
import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { AppBar, Toolbar, Typography, Box, Avatar, Badge, Menu, MenuItem } from '@mui/material'
import { styled } from '@mui/material/styles'
import WineBar from '@mui/icons-material/WineBar';

import { signOut } from './auth/authSlice';

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
  backgroundColor: '#5C374C',
  fontFamily: "'Nunito', sans - serif",
  fontFamily: "'Roboto Mono', monospace"
})

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%"
}))

const Icons = styled(Box)(({ theme }) => ({
  display: 'none',
  alignItems: 'center',
  [theme.breakpoints.up("sm")]: {
    display: 'flex'
  }
}))

const UserBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  [theme.breakpoints.up("sm")]: {
    display: 'none'
  }
}))

const Navbar = () => {
  const profilePic = useSelector(state => state.profilePic)
  console.log('profilePic: ', profilePic)
  const name = useSelector(state => state.name)
  console.log('username: ', name)
  const [open, setOpen] = useState(false)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handlePairing = () => {
    navigate('/photo')
    setOpen(false)
  }

  const handleWines = () => {
    navigate('/wines')
    setOpen(false)
  }

  const handleSignout = () => {
    dispatch(signOut())
    localStorage.removeItem('token')
    localStorage.removeItem('userID')
    localStorage.removeItem('profilePic')
    localStorage.removeItem('name')
    navigate('/login')
    setOpen(false)
  }



  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography className='navbar-title' variant='span' sx={{ fontFamily: "'Nunito', sans - serif", fontSize: '25px', fontWeight: 'bold', color: '#FAA275', justifyContent: 'center', alignItems: 'center' }}><WineBar />Pocket Somm</Typography>
        <Icons>
          <Badge sx={{ ml: '5px' }}>
            <Avatar onClick={e => setOpen(true)} src={profilePic || ""} />
          </Badge>
        </Icons>
        <UserBox onClick={e => setOpen(true)}>
          <Avatar src={profilePic || ""} />
          <Typography sx={{ display: { xs: "none", sm: "block" } }} variant="span">{name || ""}</Typography>
        </UserBox>
      </StyledToolbar>
      <Menu
        id='demo-positioned-menu'
        aria-labelledby='demo-positioned-button'
        open={open}
        onClose={e => setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right'
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right'
        }}
      >
        <MenuItem onClick={handlePairing} >Pairing</MenuItem>
        <MenuItem onClick={handleWines} >My Wines</MenuItem>
        <MenuItem onClick={handleSignout} >Logout</MenuItem>
      </Menu>
    </AppBar>
  )
}

export default Navbar

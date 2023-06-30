import React, { useState } from 'react'
import { AppBar, styled, Toolbar, Typography, Box, InputBase, Avatar, Badge, Menu, MenuItem } from '@mui/material'
import WineBar from '@mui/icons-material/WineBar';
import { borderRadius } from '@mui/system'
import Favorite from '@mui/icons-material/Favorite';

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
  backgroundColor: '#985277'
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
  const [open, setOpen] = useState(false)

  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography variant='h6' sx={{ display: { xs: "none", sm: "block" } }}>Pocket Somm</Typography>
        <WineBar sx={{ display: { xs: "block", sm: "none" } }} />
        <Search><InputBase placeholder='search' /></Search>
        <Icons>
          <Badge>
            <Favorite />
          </Badge>
          <Badge sx={{ ml: '5px' }}>
            <Avatar onClick={e => setOpen(true)} src='https://media.licdn.com/dms/image/D5635AQF5L1U9InOswA/profile-framedphoto-shrink_200_200/0/1680273766602?e=1688677200&v=beta&t=ItAk7-TVMDb0VjWon5r422sFqkWOrdaLJ77REI-wD_w' />
          </Badge>
        </Icons>
        <UserBox onClick={e => setOpen(true)}>
          <Avatar src='https://media.licdn.com/dms/image/D5635AQF5L1U9InOswA/profile-framedphoto-shrink_200_200/0/1680273766602?e=1688677200&v=beta&t=ItAk7-TVMDb0VjWon5r422sFqkWOrdaLJ77REI-wD_w' />
          <Typography variant="span">Katie</Typography>
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
        <MenuItem >Profile</MenuItem>
        <MenuItem >My Wines</MenuItem>
        <MenuItem >Logout</MenuItem>
      </Menu>
    </AppBar>
  )
}

export default Navbar
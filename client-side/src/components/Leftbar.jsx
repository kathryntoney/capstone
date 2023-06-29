import React from 'react'
import { Box } from '@mui/material'

const Leftbar = () => {
    return (
        <Box bgcolor="skyblue" flex={1} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
            Leftbar
        </Box >
    )
}

export default Leftbar
